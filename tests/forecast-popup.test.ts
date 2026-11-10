import { describe, expect, test } from 'bun:test';
import { resolveForecastPopup } from '../src/forecast-popup';

const LONG = 'Rain this afternoon, then clearing overnight.\n\nTomorrow: mostly sunny.';
const SHORT = 'Partly sunny, high near 20°.';
const PROVIDER = 'Clear, low around 50.';

describe('resolveForecastPopup', () => {
  test('a detailed sensor is the dialog body and is not printed on the card', () => {
    expect(resolveForecastPopup({
      detailText: LONG,
      detailEntity: 'sensor.prognoz_podrobno'
    })).toEqual({
      summary: null,
      detail: LONG,
      source: 'sensor.prognoz_podrobno'
    });
  });

  test('one text-forecast sensor opens in the dialog and stays off the card', () => {
    expect(resolveForecastPopup({
      summaryText: LONG,
      summaryEntity: 'sensor.weather_summary',
      providerText: PROVIDER
    })).toEqual({
      summary: null,
      detail: LONG,
      source: 'sensor.weather_summary'
    });
  });

  test('the provider text opens in the dialog when no sensor is set', () => {
    expect(resolveForecastPopup({ providerText: `  ${PROVIDER}  ` })).toEqual({
      summary: null,
      detail: PROVIDER,
      source: null
    });
  });

  test('both sensors: short line on the card, detailed sensor only in the dialog', () => {
    expect(resolveForecastPopup({
      summaryText: SHORT,
      summaryEntity: 'sensor.weather_summary',
      detailText: LONG,
      detailEntity: 'sensor.prognoz_podrobno',
      providerText: PROVIDER
    })).toEqual({
      summary: SHORT,
      detail: LONG,
      source: 'sensor.prognoz_podrobno'
    });
  });

  test('an unavailable detailed sensor falls through without dumping the paragraph', () => {
    expect(resolveForecastPopup({
      summaryText: SHORT,
      summaryEntity: 'sensor.weather_summary',
      detailText: '  ',
      detailEntity: 'sensor.prognoz_podrobno',
      providerText: PROVIDER
    })).toEqual({
      summary: null,
      detail: SHORT,
      source: 'sensor.weather_summary'
    });
  });

  test('an unavailable summary sensor falls through to the provider', () => {
    expect(resolveForecastPopup({
      summaryText: null,
      summaryEntity: 'sensor.weather_summary',
      detailText: '',
      providerText: PROVIDER
    })).toEqual({
      summary: null,
      detail: PROVIDER,
      source: null
    });
  });

  test('the same text is not repeated as a short line next to the link', () => {
    expect(resolveForecastPopup({
      summaryText: SHORT,
      summaryEntity: 'sensor.weather_summary',
      detailText: SHORT,
      detailEntity: 'sensor.prognoz_podrobno'
    })).toEqual({
      summary: null,
      detail: SHORT,
      source: 'sensor.prognoz_podrobno'
    });
  });

  test('blank sources hide the forecast', () => {
    expect(resolveForecastPopup({})).toEqual({ summary: null, detail: null, source: null });
    expect(resolveForecastPopup({
      summaryText: '   ',
      detailText: null,
      providerText: '\n'
    })).toEqual({ summary: null, detail: null, source: null });
  });
});
