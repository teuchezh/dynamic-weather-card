import { DEFAULT_CONFIG } from '../constants.js';
import { aggregateWind } from '../forecast-wind.js';
import type {
  HomeAssistant,
  WeatherForecast,
  ForecastEvent,
  WeatherData
} from '../types.js';

const HOUR_MS = 3600000;

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

    await this.unsubscribe();

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

  /**
   * Upcoming hourly entries, up to `hours` of them. There is no upper limit:
   * a large number shows everything the provider forecasts.
   */
  getHourlyForecast(
    hours: number,
    fallbackWeatherData: WeatherData | null
  ): WeatherForecast[] {
    const maxHours = Math.max(1, Math.floor(Number(hours ?? DEFAULT_CONFIG.hourlyForecastHours)) || DEFAULT_CONFIG.hourlyForecastHours);
    const subscribed = this.hourlyForecast && this.hourlyForecast.length > 0;
    const source = subscribed ? this.hourlyForecast : fallbackWeatherData?.forecast ?? [];

    const now = Date.now();
    const entries = source
      .map(item => ({ item, time: new Date(item.datetime).getTime() }))
      .filter(({ time }) => !Number.isNaN(time))
      .sort((a, b) => a.time - b.time)
      // The hour in progress stays, hours that are over are dropped
      .filter(({ time }) => time > now - HOUR_MS);

    // An older integration's forecast attribute may be daily: keep showing only the next day of it
    const hourly = entries.length < 2 || entries[1].time - entries[0].time <= 3 * HOUR_MS;
    const upcoming = subscribed || hourly ? entries : entries.filter(({ time }) => time < now + 24 * HOUR_MS);

    return upcoming.slice(0, maxHours).map(({ item }) => item);
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

    const dayBuckets = new Map<string, {
      item: WeatherForecast;
      itemDate: Date;
      hourScore: number;
      temperatures: number[];
      precipitationProbabilities: number[];
      entries: WeatherForecast[];
    }>();

    fallbackWeatherData.forecast.forEach(item => {
      if (!item.datetime) return;
      const itemDate = new Date(item.datetime);
      if (Number.isNaN(itemDate.getTime())) return;
      if (itemDate < start || itemDate >= end) return;

      const key = toDayKey(itemDate);
      const hourScore = Math.abs((itemDate.getHours() + itemDate.getMinutes() / 60) - 12);
      const temperature = item.temperature ?? item.temp ?? item.native_temperature;
      const existing = dayBuckets.get(key) ?? { item, itemDate, hourScore, temperatures: [], precipitationProbabilities: [], entries: [] };

      if (hourScore < existing.hourScore) {
        existing.item = item;
        existing.itemDate = itemDate;
        existing.hourScore = hourScore;
      }
      if (temperature != null) existing.temperatures.push(temperature);
      if (item.precipitation_probability != null) existing.precipitationProbabilities.push(item.precipitation_probability);
      existing.entries.push(item);
      dayBuckets.set(key, existing);
    });

    return Array.from(dayBuckets.values())
      .sort((a, b) => a.itemDate.getTime() - b.itemDate.getTime())
      .map(({ item, temperatures, precipitationProbabilities, entries }) => {
        // Several (hourly) entries for a day: summarize them as the day's high/low, max precipitation chance
        // and strongest wind with its prevailing direction
        if (temperatures.length < 2) return item;
        const daily: WeatherForecast = {
          ...item,
          temperature: Math.max(...temperatures),
          templow: item.templow ?? item.native_templow ?? Math.min(...temperatures),
          ...aggregateWind(entries)
        };
        if (precipitationProbabilities.length > 0) {
          daily.precipitation_probability = Math.max(...precipitationProbabilities);
        }
        return daily;
      })
      .slice(0, maxDays);
  }
}
