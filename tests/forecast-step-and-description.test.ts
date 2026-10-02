import { describe, expect, test } from 'bun:test';
import { pickForecastDescription, thinHourlyForecast } from '../src/components/forecast-service';
import type { WeatherForecast } from '../src/types';

// Hourly entries from 2026-10-02 at `startHour`, local time
function hourly(count: number, startHour = 0, extra: (i: number) => Partial<WeatherForecast> = () => ({})) {
  return Array.from({ length: count }, (_, i) => {
    const time = new Date(2026, 9, 2, startHour + i).getTime();
    return { item: { datetime: new Date(time).toISOString(), temperature: i, ...extra(i) } as WeatherForecast, time };
  });
}
const hours = (items: WeatherForecast[]) => items.map(item => new Date(item.datetime).getHours());

describe('thinHourlyForecast', () => {
  test('step 1 keeps every hour', () => {
    expect(thinHourlyForecast(hourly(5), 1)).toHaveLength(5);
  });

  test('every 3 hours, on hours divisible by 3', () => {
    expect(hours(thinHourlyForecast(hourly(12, 14), 3))).toEqual([15, 18, 21, 0]);
    expect(hours(thinHourlyForecast(hourly(24), 6))).toEqual([0, 6, 12, 18]);
  });

  test('a provider without those hours is still thinned to the step', () => {
    // 3-hourly entries at 02, 05, 08 …: every 6 hours from the first
    const entries = Array.from({ length: 8 }, (_, i) => {
      const time = new Date(2026, 9, 2, 2 + i * 3).getTime();
      return { item: { datetime: new Date(time).toISOString() } as WeatherForecast, time };
    });
    expect(hours(thinHourlyForecast(entries, 6))).toEqual([2, 8, 14, 20]);
  });

  test('each entry shows the highest chance of precipitation of its hours', () => {
    const entries = hourly(6, 0, i => ({ precipitation_probability: [10, 70, 20, 0, 5, 40][i] }));
    expect(thinHourlyForecast(entries, 3).map(item => item.precipitation_probability)).toEqual([70, 40]);
  });
});

describe('pickForecastDescription', () => {
  const now = new Date(2026, 9, 2, 20, 0);
  const period = (hour: number, day: number, text?: string): WeatherForecast =>
    ({ datetime: new Date(2026, 9, day, hour).toISOString(), detailed_description: text });

  test('the period in progress', () => {
    const twiceDaily = [period(6, 2, 'Sunny, high near 75.'), period(18, 2, 'Clear, low around 50.'), period(6, 3, 'Rain likely.')];
    expect(pickForecastDescription([twiceDaily], now)).toBe('Clear, low around 50.');
  });

  test('the next period when the forecast starts later', () => {
    expect(pickForecastDescription([[period(6, 3, 'Rain likely.')]], now)).toBe('Rain likely.');
  });

  test('the first source with descriptions wins', () => {
    const hourlyWithout = [period(20, 2), period(21, 2)];
    expect(pickForecastDescription([[], hourlyWithout, [period(18, 2, 'Windy.')]], now)).toBe('Windy.');
  });

  test('no descriptions: nothing', () => {
    expect(pickForecastDescription([[period(18, 2)], []], now)).toBeNull();
    expect(pickForecastDescription([[period(18, 2, '  ')]], now)).toBeNull();
  });
});
