import { DEFAULT_CONFIG } from '../constants.js';
import type {
  HomeAssistant,
  WeatherForecast,
  ForecastEvent,
  WeatherData
} from '../types.js';

export class ForecastService {
  private hourlyForecast: WeatherForecast[] = [];
  private dailyForecast: WeatherForecast[] = [];
  private hourlySubscription: Promise<(() => void)> | null = null;
  private dailySubscription: Promise<(() => void)> | null = null;
  private onUpdate: () => void;

  constructor(onUpdate: () => void) {
    this.onUpdate = onUpdate;
  }

  getHourlyData(): WeatherForecast[] {
    return this.hourlyForecast;
  }

  getDailyData(): WeatherForecast[] {
    return this.dailyForecast;
  }

  async subscribe(hass: HomeAssistant | undefined, entityId: string, showDaily: boolean): Promise<void> {
    if (!hass || !entityId) {
      return;
    }

    this.unsubscribe();

    try {
      this.hourlySubscription = hass.connection.subscribeMessage<ForecastEvent>(
        (event: ForecastEvent) => {
          if (event.forecast && event.forecast.length > 0) {
            this.hourlyForecast = event.forecast;
            this.onUpdate();
          }
        },
        {
          type: 'weather/subscribe_forecast',
          forecast_type: 'hourly',
          entity_id: entityId
        }
      );

      if (showDaily) {
        this.dailySubscription = hass.connection.subscribeMessage<ForecastEvent>(
          (event: ForecastEvent) => {
            if (event.forecast && event.forecast.length > 0) {
              this.dailyForecast = event.forecast;
              this.onUpdate();
            }
          },
          {
            type: 'weather/subscribe_forecast',
            forecast_type: 'daily',
            entity_id: entityId
          }
        );
      }
    } catch {
      // Silently fail - old integrations don't support this API
    }
  }

  async unsubscribe(): Promise<void> {
    if (this.hourlySubscription) {
      try {
        const unsubscribe = await this.hourlySubscription;
        unsubscribe();
      } catch {
        // Ignore unsubscribe errors
      }
      this.hourlySubscription = null;
    }

    if (this.dailySubscription) {
      try {
        const unsubscribe = await this.dailySubscription;
        unsubscribe();
      } catch {
        // Ignore unsubscribe errors
      }
      this.dailySubscription = null;
    }
  }

  getHourlyForecast(
    hours: number,
    fallbackWeatherData: WeatherData | null
  ): WeatherForecast[] {
    const maxHours = Math.max(1, Math.floor(Number(hours ?? DEFAULT_CONFIG.hourlyForecastHours)));

    if (this.hourlyForecast && this.hourlyForecast.length > 0) {
      return this.hourlyForecast.slice(0, maxHours);
    }

    if (!fallbackWeatherData?.forecast || fallbackWeatherData.forecast.length === 0) {
      return [];
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayForecast = fallbackWeatherData.forecast.filter(item => {
      if (!item.datetime) return false;
      const itemDate = new Date(item.datetime);
      const itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
      return itemDay.getTime() === today.getTime() ||
        (itemDay.getTime() === tomorrow.getTime() && itemDate.getHours() <= now.getHours());
    });

    return todayForecast
      .sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
      .slice(0, maxHours);
  }

  getDailyForecast(
    days: number,
    fallbackWeatherData: WeatherData | null
  ): WeatherForecast[] {
    const maxDays = Math.max(1, Math.floor(Number(days ?? DEFAULT_CONFIG.dailyForecastDays)));

    if (this.dailyForecast && this.dailyForecast.length > 0) {
      return this.dailyForecast.slice(0, maxDays);
    }

    if (!fallbackWeatherData?.forecast || fallbackWeatherData.forecast.length === 0) {
      return [];
    }

    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(start);
    end.setDate(end.getDate() + maxDays);

    const toDayKey = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const dayBuckets = new Map<string, { item: WeatherForecast; itemDate: Date; hourScore: number }>();

    fallbackWeatherData.forecast.forEach(item => {
      if (!item.datetime) return;
      const itemDate = new Date(item.datetime);
      if (Number.isNaN(itemDate.getTime())) return;
      if (itemDate < start || itemDate >= end) return;

      const key = toDayKey(itemDate);
      const hourScore = Math.abs((itemDate.getHours() + itemDate.getMinutes() / 60) - 12);
      const existing = dayBuckets.get(key);

      if (!existing || hourScore < existing.hourScore) {
        dayBuckets.set(key, { item, itemDate, hourScore });
      }
    });

    return Array.from(dayBuckets.values())
      .sort((a, b) => a.itemDate.getTime() - b.itemDate.getTime())
      .map(entry => entry.item)
      .slice(0, maxDays);
  }
}
