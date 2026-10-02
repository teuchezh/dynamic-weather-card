import { describe, expect, test } from 'bun:test';
import { convertSpeedUnit, convertWindSpeed, getWindSpeedUnit } from '../src/utils';
import { getWeatherData, readSensor } from '../src/components/weather-data';
import { temperatureColor } from '../src/temperature-color';
import type { HomeAssistant, WeatherEntityAttributes } from '../src/types';

function mockHass(attributes: WeatherEntityAttributes, sensors: Record<string, [string, string?]> = {}): HomeAssistant {
  const states: Record<string, unknown> = {
    'weather.home': { entity_id: 'weather.home', state: attributes.condition ?? 'sunny', attributes }
  };
  for (const [id, [state, unit]] of Object.entries(sensors)) {
    states[id] = { entity_id: id, state, attributes: unit ? { unit_of_measurement: unit } : {} };
  }
  return { states } as unknown as HomeAssistant;
}

describe('speed units', () => {
  test('converts between units, ignoring how the unit is written', () => {
    expect(convertSpeedUnit(36, 'km/h', 'm/s')).toBeCloseTo(10);
    expect(convertSpeedUnit(10, 'm/s', 'km/h')).toBeCloseTo(36);
    expect(convertSpeedUnit(10, 'mph', 'm/s')).toBeCloseTo(4.4704);
    expect(convertSpeedUnit(10, 'kn', 'km/h')).toBeCloseTo(18.52);
    expect(convertSpeedUnit(10, 'KM/H', 'kmh')).toBe(10);
  });

  test('leaves unknown units unchanged', () => {
    expect(convertSpeedUnit(5, 'furlongs', 'm/s')).toBe(5);
  });

  test('legacy providers without a unit use wind_speed_unit', () => {
    expect(convertWindSpeed(10, {}, 'kmh')).toBe(36);
    expect(convertWindSpeed(10, {}, 'ms')).toBe(10);
    // A provider that reports a unit is shown as is
    expect(convertWindSpeed(12.34, { wind_speed_unit: 'km/h' }, 'ms')).toBe(12.3);
  });

  test('unit label comes from the provider when it has one', () => {
    const t = (key: string) => key;
    expect(getWindSpeedUnit({ wind_speed_unit: 'km/h' }, 'ms', t)).toBe('wind_unit_kmh');
    expect(getWindSpeedUnit({}, 'kmh', t)).toBe('wind_unit_kmh');
  });
});

describe('readSensor', () => {
  test('reads a numeric state with its unit', () => {
    const hass = mockHass({}, { 'sensor.t': ['21.5', '°C'] });
    expect(readSensor(hass, 'sensor.t')).toEqual({ value: 21.5, unit: '°C' });
  });

  test('returns null for missing, unavailable or non-numeric sensors', () => {
    const hass = mockHass({}, { 'sensor.off': ['unavailable'], 'sensor.text': ['high'] });
    expect(readSensor(hass, 'sensor.missing')).toBeNull();
    expect(readSensor(hass, 'sensor.off')).toBeNull();
    expect(readSensor(hass, 'sensor.text')).toBeNull();
    expect(readSensor(hass, null)).toBeNull();
  });
});

describe('getWeatherData', () => {
  const attributes: WeatherEntityAttributes = {
    condition: 'rainy',
    temperature: 12,
    humidity: 80,
    pressure: 1013,
    pressure_unit: 'hPa',
    uv_index: 3,
    dew_point: 8,
    wind_speed: 5,
    wind_speed_unit: 'm/s',
    wind_gust_speed: 9,
    templow: 7
  };

  test('reads values from the weather entity', () => {
    const data = getWeatherData(mockHass(attributes), 'weather.home', {}, []);
    expect(data).toMatchObject({
      condition: 'rainy',
      temperature: 12,
      humidity: 80,
      pressure: 1013,
      pressureUnit: 'hPa',
      uvIndex: 3,
      dewPoint: 8,
      windSpeed: 5,
      windGust: 9,
      templow: 7,
      aqi: null
    });
  });

  test('sensors override the weather entity', () => {
    const hass = mockHass(attributes, {
      'sensor.temp': ['14.2', '°C'],
      'sensor.pressure': ['750', 'mmHg'],
      'sensor.aqi': ['42']
    });
    const data = getWeatherData(hass, 'weather.home', {
      sensorEntities: { temperature: 'sensor.temp', pressure: 'sensor.pressure', aqi: 'sensor.aqi' }
    }, []);
    expect(data.temperature).toBe(14.2);
    expect(data.pressure).toBe(750);
    expect(data.pressureUnit).toBe('mmHg');
    expect(data.aqi).toBe(42);
  });

  test('an unavailable sensor falls back to the weather entity', () => {
    const hass = mockHass(attributes, { 'sensor.temp': ['unavailable'] });
    const data = getWeatherData(hass, 'weather.home', { sensorEntities: { temperature: 'sensor.temp' } }, []);
    expect(data.temperature).toBe(12);
  });

  test('a wind speed sensor sets the display unit and gusts are converted to it', () => {
    const hass = mockHass(attributes, { 'sensor.wind': ['18', 'km/h'] });
    const data = getWeatherData(hass, 'weather.home', { sensorEntities: { windSpeed: 'sensor.wind' } }, []);
    expect(data.windSpeed).toBe(18);
    expect(data.windSpeedUnit).toBe('km/h');
    // 9 m/s from the entity, shown in km/h
    expect(data.windGust).toBeCloseTo(32.4);
  });
});

describe('temperatureColor', () => {
  test('cold is blue, mild is green, hot is red', () => {
    expect(temperatureColor(-5)).toBe('rgb(10, 132, 255)');
    expect(temperatureColor(15)).toBe('rgb(48, 209, 88)');
    expect(temperatureColor(40)).toBe('rgb(255, 69, 58)');
    expect(temperatureColor(-40)).toBe('rgb(94, 92, 230)');
  });

  test('converts Fahrenheit before picking the color', () => {
    expect(temperatureColor(59, '°F')).toBe(temperatureColor(15, '°C'));
  });
});
