import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { ForecastService } from '../src/components/forecast-service';
import { i18n } from '../src/internationalization/index';
import type { WeatherData, WeatherForecast } from '../src/types';

function weatherWith(forecast: WeatherForecast[]): WeatherData {
  return { forecast } as WeatherData;
}

describe('ForecastService', () => {
  test('daily forecast from hourly entries: high, low and max chance of precipitation per day', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const entries: WeatherForecast[] = [];
    for (let day = 0; day < 3; day++) {
      for (let hour = 0; hour < 24; hour += 3) {
        const time = new Date(today);
        time.setDate(today.getDate() + day);
        time.setHours(hour);
        entries.push({
          datetime: time.toISOString(),
          condition: hour === 12 ? 'rainy' : 'sunny',
          temperature: 10 + day + hour / 3,
          precipitation_probability: hour === 12 ? 60 + day : 10
        });
      }
    }

    const daily = new ForecastService(() => {}).getDailyForecast(3, weatherWith(entries));
    expect(daily).toHaveLength(3);
    // Each day: 8 entries, temperatures 10+day … 17+day; the noon entry represents the day
    daily.forEach((item, day) => {
      expect(item.temperature).toBe(17 + day);
      expect(item.templow).toBe(10 + day);
      expect(item.precipitation_probability).toBe(60 + day);
      expect(item.condition).toBe('rainy');
    });
  });

  test('a real daily forecast is passed through, limited to the requested days', () => {
    const service = new ForecastService(() => {});
    const days = [0, 1, 2, 3].map(i => ({ datetime: `2026-10-0${i + 2}T12:00:00Z`, temperature: 20 + i, templow: 10 + i }));
    expect(service.getDailyForecast(2, weatherWith(days))).toHaveLength(2);
  });

  test('hourly forecast falls back to the weather attribute and is limited to the requested hours', () => {
    const now = new Date();
    const entries = Array.from({ length: 10 }, (_, i) => ({
      datetime: new Date(now.getTime() + i * 3600000).toISOString(),
      temperature: 10 + i
    }));
    const hourly = new ForecastService(() => {}).getHourlyForecast(4, weatherWith(entries));
    expect(hourly.length).toBeLessThanOrEqual(4);
    expect(hourly.length).toBeGreaterThan(0);
  });
});

describe('i18n', () => {
  test('translates and falls back to English for missing keys', () => {
    i18n.setLanguage('ru');
    expect(i18n.t('sunny')).toBe('Солнечно');
    i18n.setLanguage('et');
    // Estonian has no demo strings
    expect(i18n.t('editor.show_aurora')).toBe('Virmalised');
    expect(i18n.t('no.such.key')).toBe('no.such.key');
    i18n.setLanguage('en');
  });

  test('addTranslations merges extra strings into a language', () => {
    i18n.addTranslations('en', { demo: { pageTitle: 'Test title' } } as never);
    i18n.setLanguage('en');
    expect(i18n.t('demo.pageTitle')).toBe('Test title');
  });
});

describe('translation files', () => {
  const dir = 'src/internationalization/locales';
  const locales = readdirSync(dir).filter(code => !code.includes('.'));
  const load = (code: string) => JSON.parse(readFileSync(join(dir, code, 'translation.json'), 'utf-8'));
  const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort().join(',');
  const en = load('en');

  test.each(locales)('%s keeps the placeholders of the precipitation outlook', code => {
    const outlook = load(code).precipitation_outlook;
    if (!outlook) return;
    for (const key of ['start', 'soon', 'stop', 'continues']) {
      if (outlook[key] === undefined) continue;
      expect(placeholders(outlook[key])).toBe(placeholders(en.precipitation_outlook[key]));
    }
  });

  test.each(locales)('%s has no empty strings', code => {
    const empty: string[] = [];
    const walk = (node: unknown, path: string) => {
      if (typeof node === 'string') {
        if (!node.trim()) empty.push(path);
      } else if (node && typeof node === 'object') {
        Object.entries(node).forEach(([key, value]) => walk(value, path ? `${path}.${key}` : key));
      }
    };
    walk(load(code), '');
    expect(empty).toEqual([]);
  });
});
