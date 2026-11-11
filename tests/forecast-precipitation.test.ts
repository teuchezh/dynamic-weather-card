import { describe, expect, test } from 'bun:test';
import { ForecastService } from '../src/components/forecast-service';
import { formatDailyPrecipitation, sumPrecipitation } from '../src/forecast-precipitation';
import type { WeatherData, WeatherForecast } from '../src/types';

function weatherWith(forecast: WeatherForecast[]): WeatherData {
  return { forecast } as WeatherData;
}

// Local time, so the day's hours stay on one calendar day in any time zone
function at(dayOffset: number, hour: number): string {
  const date = new Date();
  date.setHours(hour, 0, 0, 0);
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString();
}

describe('formatDailyPrecipitation', () => {
  test('hides a missing or zero amount and keeps the forecast unit', () => {
    expect(formatDailyPrecipitation(undefined, 'mm')).toBeNull();
    expect(formatDailyPrecipitation(null, 'mm')).toBeNull();
    expect(formatDailyPrecipitation(Number.NaN, 'mm')).toBeNull();
    expect(formatDailyPrecipitation(0, 'mm')).toBeNull();
    expect(formatDailyPrecipitation(-1, 'in')).toBeNull();
    // A tenth is the smallest amount the row shows
    expect(formatDailyPrecipitation(0.04, 'mm')).toBeNull();
    expect(formatDailyPrecipitation(0.05, 'mm')).toBe('0.1 mm');
    expect(formatDailyPrecipitation(4.24, 'mm')).toBe('4.2 mm');
    expect(formatDailyPrecipitation(4.25, 'mm')).toBe('4.3 mm');
    expect(formatDailyPrecipitation(5, 'mm')).toBe('5 mm');
    expect(formatDailyPrecipitation(0.2, 'in')).toBe('0.2 in');
    expect(formatDailyPrecipitation(2.5, null)).toBe('2.5');
    expect(formatDailyPrecipitation(2.5, '   ')).toBe('2.5');
    expect(formatDailyPrecipitation(2.5, ' mm ')).toBe('2.5 mm');
  });
});

describe('sumPrecipitation', () => {
  test('sums reported amounts and ignores hours that have none', () => {
    const entries: WeatherForecast[] = [
      { datetime: at(0, 1), precipitation: 1.25 },
      { datetime: at(0, 2) },
      { datetime: at(0, 3), precipitation: 0 },
      { datetime: at(0, 4), precipitation: 0.75 }
    ];
    expect(sumPrecipitation(entries)).toBe(2);
    expect(sumPrecipitation([{ datetime: at(0, 1) }])).toBeUndefined();
    expect(sumPrecipitation([{ datetime: at(0, 1), precipitation: 0 }])).toBe(0);
  });
});

describe('daily rainfall aggregation', () => {
  test('hourly rainfall is summed per day and does not cross into the next day', () => {
    const entries: WeatherForecast[] = [];
    // Noon is 0.2, so using only the hour closest to midday would not yield the day's sum
    const hours: Array<[number, number]> = [[0, 1], [6, 1.5], [12, 0.2], [18, 2.3]];
    for (let day = 0; day < 2; day++) {
      for (const [hour, amount] of hours) {
        entries.push({
          datetime: at(day, hour),
          temperature: 10 + hour,
          precipitation: amount + day,
          precipitation_probability: hour === 12 ? 70 : 20
        });
      }
    }

    const daily = new ForecastService(() => {}).getDailyForecast(2, weatherWith(entries));
    expect(daily).toHaveLength(2);
    // Day 0: 1 + 1.5 + 0.2 + 2.3. Day 1: each hour is 1 mm more.
    expect(daily[0].precipitation).toBeCloseTo(5, 5);
    expect(daily[1].precipitation).toBeCloseTo(9, 5);
    expect(daily[0].precipitation_probability).toBe(70);
  });

  test('hours without a rainfall amount do not invent one', () => {
    const entries = [0, 6, 12].map(hour => ({
      datetime: at(0, hour),
      temperature: 10 + hour,
      precipitation_probability: 30
    }));
    const [day] = new ForecastService(() => {}).getDailyForecast(1, weatherWith(entries));
    expect(day.precipitation).toBeUndefined();
    expect(day.precipitation_probability).toBe(30);
  });

  test('a daily forecast keeps its own rainfall, including zero', () => {
    const days: WeatherForecast[] = [0, 1].map(day => ({
      datetime: at(day, 12),
      temperature: 20 + day,
      templow: 10 + day,
      precipitation: day === 0 ? 0 : 6.2,
      precipitation_probability: 40
    }));
    const daily = new ForecastService(() => {}).getDailyForecast(2, weatherWith(days));
    expect(daily.map(item => item.precipitation)).toEqual([0, 6.2]);
    expect(daily[1].precipitation_probability).toBe(40);
  });

  test('a subscribed day without rainfall takes the sum of that day\'s hours', () => {
    const service = new ForecastService(() => {});
    const daily: WeatherForecast[] = [
      { datetime: at(0, 0), temperature: 18, templow: 9, precipitation: 12.5, precipitation_probability: 10 },
      { datetime: at(1, 0), temperature: 16, templow: 8, precipitation_probability: 80 },
      { datetime: at(2, 0), temperature: 14, templow: 7, precipitation: 0, precipitation_probability: 5 }
    ];
    const hourly: WeatherForecast[] = [
      { datetime: at(0, 8), temperature: 15, precipitation: 4 },
      { datetime: at(0, 9), temperature: 16, precipitation: 1 },
      { datetime: at(1, 8), temperature: 15, precipitation: 1.5 },
      { datetime: at(1, 14), temperature: 17, precipitation: 2.5 },
      { datetime: at(2, 10), temperature: 12, precipitation: 9 }
    ];
    (service as unknown as { dailyForecast: WeatherForecast[] }).dailyForecast = daily;
    (service as unknown as { hourlyForecast: WeatherForecast[] }).hourlyForecast = hourly;

    const result = service.getDailyForecast(3, weatherWith([]));
    // Day 0 already has the day's total, so the hourly 5 mm is not added.
    // Day 2 is an explicit zero, not a missing value, so its hours are not summed either.
    expect(result.map(item => item.precipitation)).toEqual([12.5, 4, 0]);
    expect(result.map(item => item.precipitation_probability)).toEqual([10, 80, 5]);
  });
});
