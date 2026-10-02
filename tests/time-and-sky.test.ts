import { describe, expect, test } from 'bun:test';
import { getTimeOfDayWithSunData, formatTime } from '../src/utils';
import { getMoonPhase } from '../src/animations/night-sky';
import { getSkyKind, getSkyColors } from '../src/sky';

describe('getTimeOfDayWithSunData', () => {
  // Today's sunrise 07:00 and sunset 19:00, local time
  const sunData = { sunrise: new Date(2026, 9, 2, 7, 0), sunset: new Date(2026, 9, 2, 19, 0), hasSunData: true };
  const at = (h: number, m = 0) => getTimeOfDayWithSunData(sunData, new Date(2026, 9, 2, h, m));

  test('sunrise lasts from an hour before to an hour after the sun rises', () => {
    expect(at(5, 59).type).toBe('night');
    expect(at(6, 0)).toEqual({ type: 'sunrise', progress: 0 });
    expect(at(7, 0)).toEqual({ type: 'sunrise', progress: 0.5 });
    expect(at(8, 0).type).toBe('day');
  });

  test('day progress runs from the end of sunrise to the start of sunset', () => {
    expect(at(8, 0)).toEqual({ type: 'day', progress: 0 });
    expect(at(13, 0)).toEqual({ type: 'day', progress: 0.5 });
  });

  test('sunset lasts from an hour before to an hour after the sun sets', () => {
    expect(at(18, 0)).toEqual({ type: 'sunset', progress: 0 });
    expect(at(19, 30)).toEqual({ type: 'sunset', progress: 0.75 });
    expect(at(20, 0).type).toBe('night');
    expect(at(23, 0).type).toBe('night');
  });

  test("tomorrow's sun times (e.g. sun.sun next_rising) work the same", () => {
    const next = { sunrise: new Date(2026, 9, 3, 7, 0), sunset: new Date(2026, 9, 3, 19, 0), hasSunData: true };
    expect(getTimeOfDayWithSunData(next, new Date(2026, 9, 2, 13, 0))).toEqual({ type: 'day', progress: 0.5 });
  });
});

describe('formatTime', () => {
  const time = new Date(2026, 9, 2, 15, 5);

  test('24-hour clock', () => {
    expect(formatTime(time, '24h')).toBe('15:05');
    expect(formatTime(new Date(2026, 9, 2, 7, 0), '24h')).toBe('07:00');
  });

  test('12-hour clock with custom AM/PM labels', () => {
    expect(formatTime(time, '12h')).toBe('3:05 PM');
    expect(formatTime(new Date(2026, 9, 2, 0, 30), '12h', 'ДП', 'ПП')).toBe('12:30 ДП');
  });
});

describe('getMoonPhase', () => {
  const distance = (a: number, b: number) => Math.min(Math.abs(a - b), 1 - Math.abs(a - b));

  test('is 0 at the reference new moon', () => {
    expect(distance(getMoonPhase(new Date(Date.UTC(2000, 0, 6, 18, 14))), 0)).toBeLessThan(0.001);
  });

  test('matches known full and new moons within half a day', () => {
    // Full moon 2024-01-25 17:54 UTC, new moon 2025-01-29 12:36 UTC
    expect(distance(getMoonPhase(new Date(Date.UTC(2024, 0, 25, 17, 54))), 0.5)).toBeLessThan(0.02);
    expect(distance(getMoonPhase(new Date(Date.UTC(2025, 0, 29, 12, 36))), 0)).toBeLessThan(0.02);
  });

  test('stays between 0 and 1, also before the reference date', () => {
    const phase = getMoonPhase(new Date(Date.UTC(1990, 5, 1)));
    expect(phase).toBeGreaterThanOrEqual(0);
    expect(phase).toBeLessThan(1);
  });
});

describe('sky', () => {
  test('maps conditions to sky palettes', () => {
    expect(getSkyKind('sunny')).toBe('clear');
    expect(getSkyKind('windy')).toBe('clear');
    expect(getSkyKind('partlycloudy')).toBe('partly');
    expect(getSkyKind('pouring')).toBe('heavy');
    expect(getSkyKind('lightning-rainy')).toBe('storm');
    expect(getSkyKind('fog')).toBe('fog');
    expect(getSkyKind('windy-variant')).toBe('cloudy');
    expect(getSkyKind('exceptional')).toBe('cloudy');
  });

  test('daylight is 1 by day, 0 at night and in between at sunrise', () => {
    expect(getSkyColors('sunny', { type: 'day', progress: 0.5 }).daylight).toBe(1);
    expect(getSkyColors('sunny', { type: 'night', progress: 0 }).daylight).toBe(0);
    expect(getSkyColors('clear-night', { type: 'day', progress: 0.5 }).daylight).toBe(0);
    const sunrise = getSkyColors('sunny', { type: 'sunrise', progress: 0.5 }).daylight;
    expect(sunrise).toBeGreaterThan(0);
    expect(sunrise).toBeLessThan(1);
  });

  test('heavier weather has more cloud cover', () => {
    const day = { type: 'day' as const, progress: 0.5 };
    expect(getSkyColors('sunny', day).coverage).toBeLessThan(getSkyColors('partlycloudy', day).coverage);
    expect(getSkyColors('partlycloudy', day).coverage).toBeLessThan(getSkyColors('pouring', day).coverage);
  });
});
