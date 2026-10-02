import { describe, expect, test } from 'bun:test';
import { getPrecipitationKind, getPrecipitationOutlook } from '../src/precipitation-outlook';
import type { WeatherForecast } from '../src/types';

// 14:20 local time; hourly entries start on the hour
const NOW = new Date(2026, 9, 2, 14, 20);

function hourly(conditions: string[], start = 14, probabilities: number[] = []): WeatherForecast[] {
  return conditions.map((condition, i) => ({
    datetime: new Date(2026, 9, 2, start + i, 0).toISOString(),
    condition,
    precipitation_probability: probabilities[i]
  }));
}

describe('getPrecipitationKind', () => {
  test('maps wet conditions to a kind', () => {
    expect(getPrecipitationKind('rainy')).toBe('rain');
    expect(getPrecipitationKind('pouring')).toBe('rain');
    expect(getPrecipitationKind('snowy')).toBe('snow');
    expect(getPrecipitationKind('snowy-rainy')).toBe('sleet');
    expect(getPrecipitationKind('hail')).toBe('hail');
    expect(getPrecipitationKind('lightning-rainy')).toBe('storm');
    expect(getPrecipitationKind('RAINY')).toBe('rain');
  });

  test('returns null for dry or missing conditions', () => {
    expect(getPrecipitationKind('sunny')).toBeNull();
    expect(getPrecipitationKind('windy')).toBeNull();
    expect(getPrecipitationKind(undefined)).toBeNull();
  });
});

describe('getPrecipitationOutlook', () => {
  test('dry now, rain later: start at the first wet hour', () => {
    const outlook = getPrecipitationOutlook('sunny', hourly(['sunny', 'cloudy', 'rainy', 'rainy']), NOW);
    expect(outlook?.type).toBe('start');
    expect(outlook?.kind).toBe('rain');
    expect(outlook?.time?.getHours()).toBe(16);
  });

  test('wet hour already in progress: starts soon, without a time', () => {
    const outlook = getPrecipitationOutlook('cloudy', hourly(['snowy', 'snowy']), NOW);
    expect(outlook).toMatchObject({ type: 'start', kind: 'snow', time: null });
  });

  test('a high chance of precipitation counts as wet', () => {
    const outlook = getPrecipitationOutlook('cloudy', hourly(['cloudy', 'cloudy', 'cloudy'], 14, [10, 20, 60]), NOW);
    expect(outlook?.type).toBe('start');
    expect(outlook?.time?.getHours()).toBe(16);
  });

  test('raining now: stop at the first dry hour after now', () => {
    const outlook = getPrecipitationOutlook('rainy', hourly(['rainy', 'pouring', 'cloudy', 'sunny']), NOW);
    expect(outlook?.type).toBe('stop');
    expect(outlook?.kind).toBe('rain');
    expect(outlook?.time?.getHours()).toBe(16);
  });

  test('raining for the whole window: continues', () => {
    const outlook = getPrecipitationOutlook('snowy', hourly(Array(14).fill('snowy')), NOW);
    expect(outlook).toMatchObject({ type: 'continues', kind: 'snow', time: null, hours: 12 });
  });

  test('nothing changes in the next 12 hours: no outlook', () => {
    const forecast = hourly([...Array(13).fill('sunny'), 'rainy']);
    expect(getPrecipitationOutlook('sunny', forecast, NOW)).toBeNull();
  });

  test('ignores hours that are already over', () => {
    // Rain at 11:00 is over; the next rain is at 15:00
    const outlook = getPrecipitationOutlook('sunny', hourly(['rainy', 'sunny', 'sunny', 'sunny', 'rainy'], 11), NOW);
    expect(outlook?.time?.getHours()).toBe(15);
  });

  test('a daily forecast is not used', () => {
    const daily = [0, 1, 2].map(day => ({ datetime: new Date(2026, 9, 2 + day, 12).toISOString(), condition: 'rainy' }));
    expect(getPrecipitationOutlook('sunny', daily, NOW)).toBeNull();
  });

  test('no forecast: no outlook', () => {
    expect(getPrecipitationOutlook('rainy', [], NOW)).toBeNull();
  });
});
