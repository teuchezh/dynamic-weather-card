import { DEFAULT_CONFIG } from '../constants.js';
import { aggregateWind } from '../forecast-wind.js';
import type {
  HomeAssistant,
  WeatherForecast,
  ForecastEvent,
  WeatherData
} from '../types.js';

const HOUR_MS = 3600000;

export interface ForecastSubscriptions {
  daily: boolean;
  // Twice-daily periods (day/night); the US National Weather Service puts its text forecast there
  twiceDaily: boolean;
}

/**
 * The text forecast for the period in progress, or the next one that has it.
 * Sources are tried in order; the first with any description wins.
 */
export function pickForecastDescription(sources: WeatherForecast[][], now: Date = new Date()): string | null {
  for (const source of sources) {
    const entries = source
      .map(item => ({ text: item.detailed_description?.trim() ?? '', time: new Date(item.datetime).getTime() }))
      .filter(({ time }) => !Number.isNaN(time))
      .sort((a, b) => a.time - b.time);
    if (!entries.some(({ text }) => text)) continue;

    // The period in progress is the last one that has started
    const started = entries.filter(({ time }) => time <= now.getTime());
    const current = started[started.length - 1];
    if (current?.text) return current.text;
    const next = entries.find(({ time, text }) => time > now.getTime() && text);
    if (next) return next.text;
  }
  return null;
}

/**
 * Every `step` hours from a sorted list of upcoming hourly entries: on hours divisible by the step
 * (00:00, 03:00, 06:00 … for 3) when the forecast has them, otherwise `step` hours apart.
 * Each kept entry shows the highest chance of precipitation of the hours it stands for.
 */
export function thinHourlyForecast(entries: Array<{ item: WeatherForecast; time: number }>, step: number): WeatherForecast[] {
  if (step <= 1 || entries.length === 0) return entries.map(({ item }) => item);

  const firstAligned = entries.findIndex(({ time }) => new Date(time).getHours() % step === 0);
  const start = firstAligned !== -1 && entries[firstAligned].time < entries[0].time + step * HOUR_MS ? firstAligned : 0;

  const kept: number[] = [];
  for (let i = start; i < entries.length; i++) {
    // A minute of slack for providers whose times are not exactly on the hour
    if (kept.length === 0 || entries[i].time >= entries[kept[kept.length - 1]].time + step * HOUR_MS - 60000) kept.push(i);
  }

  return kept.map((index, k) => {
    const until = k + 1 < kept.length ? kept[k + 1] : Math.min(entries.length, index + step);
    const chances = entries.slice(index, until)
      .map(({ item }) => item.precipitation_probability)
      .filter((value): value is number => value != null);
    const item = entries[index].item;
    return chances.length > 1 ? { ...item, precipitation_probability: Math.max(...chances) } : item;
  });
}

export class ForecastService {
  private hourlyForecast: WeatherForecast[] = [];
  private dailyForecast: WeatherForecast[] = [];
  private twiceDailyForecast: WeatherForecast[] = [];
  private subscriptions: Array<Promise<(() => void)>> = [];
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

  async subscribe(hass: HomeAssistant | undefined, entityId: string, options: ForecastSubscriptions): Promise<void> {
    if (!hass || !entityId) {
      return;
    }

    await this.unsubscribe();
    this.hourlyForecast = [];
    this.dailyForecast = [];
    this.twiceDailyForecast = [];

    const types: Array<ForecastEvent['type']> = ['hourly'];
    if (options.daily) types.push('daily');
    if (options.twiceDaily) types.push('twice_daily');

    for (const type of types) {
      try {
        const subscription = hass.connection.subscribeMessage<ForecastEvent>(
          (event: ForecastEvent) => {
            if (event.forecast && event.forecast.length > 0) {
              if (type === 'hourly') this.hourlyForecast = event.forecast;
              else if (type === 'daily') this.dailyForecast = event.forecast;
              else this.twiceDailyForecast = event.forecast;
              this.onUpdate();
            }
          },
          {
            type: 'weather/subscribe_forecast',
            forecast_type: type,
            entity_id: entityId
          }
        );
        // A forecast type the integration doesn't support rejects; the others keep working
        subscription.catch(() => {});
        this.subscriptions.push(subscription);
      } catch {
        // Silently fail - old integrations don't support this API
      }
    }
  }

  async unsubscribe(): Promise<void> {
    const subscriptions = this.subscriptions;
    this.subscriptions = [];
    for (const subscription of subscriptions) {
      try {
        const unsubscribe = await subscription;
        unsubscribe();
      } catch {
        // Ignore unsubscribe errors
      }
    }
  }

  /**
   * The provider's text forecast for the current period, when it has one
   */
  getForecastDescription(fallbackWeatherData: WeatherData | null, now: Date = new Date()): string | null {
    return pickForecastDescription(
      [this.twiceDailyForecast, this.dailyForecast, this.hourlyForecast, fallbackWeatherData?.forecast ?? []],
      now
    );
  }

  /**
   * Upcoming hourly entries, up to `hours` of them, optionally every `step` hours.
   * There is no upper limit: a large number shows everything the provider forecasts.
   */
  getHourlyForecast(
    hours: number,
    fallbackWeatherData: WeatherData | null,
    step: number = 1
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

    const everyHours = Math.max(1, Math.floor(Number(step)) || 1);
    return thinHourlyForecast(upcoming, everyHours).slice(0, maxHours);
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
