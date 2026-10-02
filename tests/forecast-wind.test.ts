import { describe, expect, test } from 'bun:test';
import { aggregateWind, getForecastWind } from '../src/forecast-wind';
import { ForecastService } from '../src/components/forecast-service';
import type { WeatherData, WeatherForecast } from '../src/types';

const entry = (wind: Partial<WeatherForecast>): WeatherForecast => ({ datetime: '2026-10-02T12:00:00Z', ...wind });

describe('aggregateWind', () => {
  test('strongest speed and gust of the day', () => {
    const wind = aggregateWind([
      entry({ wind_speed: 3, wind_gust_speed: 6 }),
      entry({ wind_speed: 7, wind_gust_speed: 12 }),
      entry({ wind_speed: 5 })
    ]);
    expect(wind.wind_speed).toBe(7);
    expect(wind.wind_gust_speed).toBe(12);
  });

  test('direction is averaged as a vector, across north', () => {
    expect(aggregateWind([entry({ wind_bearing: 350 }), entry({ wind_bearing: 10 })]).wind_bearing).toBe(0);
    expect(aggregateWind([entry({ wind_bearing: 80 }), entry({ wind_bearing: 100 })]).wind_bearing).toBe(90);
  });

  test('stronger hours weigh more in the direction', () => {
    const wind = aggregateWind([entry({ wind_speed: 1, wind_bearing: 0 }), entry({ wind_speed: 9, wind_bearing: 90 })]);
    expect(wind.wind_bearing).toBeGreaterThan(80);
  });

  test('no wind data: nothing', () => {
    expect(aggregateWind([entry({}), entry({})])).toEqual({});
    // Opposite directions cancel out: no prevailing direction
    expect(aggregateWind([entry({ wind_bearing: 0 }), entry({ wind_bearing: 180 })]).wind_bearing).toBeUndefined();
  });
});

describe('getForecastWind', () => {
  test('converts to the display unit, in whole numbers', () => {
    expect(getForecastWind(entry({ wind_speed: 4.6, wind_gust_speed: 9.2, wind_bearing: 225 }), 'km/h', 'km/h'))
      .toEqual({ speed: 5, gust: 9, bearing: 225 });
    expect(getForecastWind(entry({ wind_speed: 5 }), 'm/s', 'km/h')?.speed).toBe(18);
    expect(getForecastWind(entry({ wind_speed: 18 }), 'km/h', 'm/s')?.speed).toBe(5);
  });

  test('gusts no stronger than the speed are not shown', () => {
    expect(getForecastWind(entry({ wind_speed: 5, wind_gust_speed: 5.2 }), 'm/s', 'm/s')?.gust).toBeNull();
  });

  test('no wind speed: no wind row', () => {
    expect(getForecastWind(entry({ wind_bearing: 90 }), 'm/s', 'm/s')).toBeNull();
  });
});

describe('daily forecast built from hourly entries', () => {
  test('carries the day\'s strongest wind and prevailing direction', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const forecast: WeatherForecast[] = [6, 12, 18].map((hour, i) => {
      const time = new Date(today);
      time.setHours(hour);
      return { datetime: time.toISOString(), temperature: 10 + i, wind_speed: [2, 8, 4][i], wind_gust_speed: [4, 14, 6][i], wind_bearing: 270 };
    });
    const [day] = new ForecastService(() => {}).getDailyForecast(1, { forecast } as WeatherData);
    expect(day).toMatchObject({ wind_speed: 8, wind_gust_speed: 14, wind_bearing: 270 });
  });
});
