import { describe, expect, test } from 'bun:test';
import { DEFAULT_CONFIG } from '../src/constants';
import {
  TEMPERATURE_DECIMALS_MAX,
  clampTemperatureDecimals,
  formatTemperature
} from '../src/temperature-format';

describe('temperature decimals', () => {
  test('the default keeps whole-degree rounding', () => {
    expect(DEFAULT_CONFIG.temperatureDecimals).toBe(0);
    expect(TEMPERATURE_DECIMALS_MAX).toBe(2);
  });

  test('zero decimals matches Math.round, so 14.6 shows as 15', () => {
    const samples = [-20.6, -1.5, -0.4, 0, 0.4, 0.5, 14.4, 14.5, 14.6, 20];
    for (const value of samples) {
      expect(formatTemperature(value, 0)).toBe(`${Math.round(value)}°`);
    }
    expect(formatTemperature(14.6, 0)).toBe('15°');
    expect(formatTemperature(14.6, clampTemperatureDecimals(undefined))).toBe('15°');
  });

  test('one decimal keeps a station reading such as 14.6', () => {
    expect(formatTemperature(14.6, 1)).toBe('14.6°');
    expect(formatTemperature(14, 1)).toBe('14.0°');
    expect(formatTemperature(14.64, 1)).toBe('14.6°');
    expect(formatTemperature(-3.24, 1)).toBe('-3.2°');
  });

  test('two decimals keep hundredths', () => {
    expect(formatTemperature(14.64, 2)).toBe('14.64°');
    expect(formatTemperature(14.6, 2)).toBe('14.60°');
  });

  test('missing or out-of-range values fall back to whole degrees, clamped to 0–2', () => {
    expect(clampTemperatureDecimals(undefined)).toBe(0);
    expect(clampTemperatureDecimals(null)).toBe(0);
    expect(clampTemperatureDecimals('1')).toBe(0);
    expect(clampTemperatureDecimals(Number.NaN)).toBe(0);
    expect(clampTemperatureDecimals(Number.POSITIVE_INFINITY)).toBe(0);
    expect(clampTemperatureDecimals(-1)).toBe(0);
    expect(clampTemperatureDecimals(0)).toBe(0);
    expect(clampTemperatureDecimals(1)).toBe(1);
    expect(clampTemperatureDecimals(2)).toBe(2);
    expect(clampTemperatureDecimals(1.4)).toBe(1);
    expect(clampTemperatureDecimals(1.6)).toBe(2);
    expect(clampTemperatureDecimals(9)).toBe(2);
  });
});
