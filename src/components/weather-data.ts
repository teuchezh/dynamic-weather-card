import { TEMPLOW_ATTRIBUTES } from '../constants.js';
import { i18n } from '../internationalization/index.js';
import { convertSpeedUnit } from '../utils.js';
import type {
  HomeAssistant,
  SensorEntities,
  WeatherEntityAttributes,
  WeatherData,
  WeatherForecast
} from '../types.js';

interface SensorReading {
  value: number;
  unit: string | null;
}

/**
 * Read a numeric sensor state. Returns null when the entity is missing,
 * unavailable/unknown or not numeric, so callers fall back to the weather entity.
 */
export function readSensor(hass: HomeAssistant | undefined, entityId?: string | null): SensorReading | null {
  if (!hass || !entityId) return null;
  const entity = hass.states[entityId];
  if (!entity) return null;
  const value = parseFloat(entity.state);
  if (!Number.isFinite(value)) return null;
  const unit = entity.attributes?.unit_of_measurement;
  return { value, unit: typeof unit === 'string' ? unit : null };
}

export function getWeatherState(hass: HomeAssistant | undefined, entityId: string): string | null {
  if (!hass || !entityId) return null;
  const entity = hass.states[entityId];
  return entity ? entity.state : null;
}

export function getWeatherAttributes(hass: HomeAssistant | undefined, entityId: string): WeatherEntityAttributes {
  if (!hass || !entityId) return {} as WeatherEntityAttributes;
  const entity = hass.states[entityId];
  return entity ? entity.attributes : {} as WeatherEntityAttributes;
}

export function getWeatherData(
  hass: HomeAssistant | undefined,
  entityId: string,
  config: { templowAttribute?: string | null; sensorEntities?: SensorEntities },
  hourlyForecast: WeatherForecast[]
): WeatherData {
  const state = getWeatherState(hass, entityId);
  const attrs = getWeatherAttributes(hass, entityId);

  const condition = attrs.condition || state || 'sunny';

  let templow: number | null = null;

  if (config.templowAttribute && attrs[config.templowAttribute] != null) {
    templow = attrs[config.templowAttribute] as number;
  } else {
    for (const attrName of TEMPLOW_ATTRIBUTES) {
      if (attrs[attrName] != null) {
        templow = attrs[attrName] as number;
        break;
      }
    }

    if (templow == null) {
      templow = (attrs.forecast && attrs.forecast[0] ? attrs.forecast[0].templow ?? null : null)
        || (attrs.forecast_hourly && attrs.forecast_hourly[0] ? attrs.forecast_hourly[0].native_templow ?? null : null);
    }
  }

  const sensors = config.sensorEntities || {};
  const temperatureSensor = readSensor(hass, sensors.temperature);
  const feelsLikeSensor = readSensor(hass, sensors.feelsLike);
  const humiditySensor = readSensor(hass, sensors.humidity);
  const windSpeedSensor = readSensor(hass, sensors.windSpeed);
  const windGustSensor = readSensor(hass, sensors.windGust);
  const windBearingSensor = readSensor(hass, sensors.windBearing);
  const precipitationSensor = readSensor(hass, sensors.precipitation);
  const pressureSensor = readSensor(hass, sensors.pressure);
  const uvIndexSensor = readSensor(hass, sensors.uvIndex);
  const dewPointSensor = readSensor(hass, sensors.dewPoint);
  const aqiSensor = readSensor(hass, sensors.aqi);

  // Weather entity wind unit; legacy providers without wind_speed_unit report m/s
  const entityWindUnit = typeof attrs.wind_speed_unit === 'string' ? attrs.wind_speed_unit : 'm/s';
  const entityGust = attrs.wind_gust_speed || attrs.wind_gust || null;

  // When wind speed comes from a sensor, its unit becomes the display unit;
  // gust values from another source are converted into it
  const windSpeedUnit = windSpeedSensor?.unit ?? (windSpeedSensor ? entityWindUnit : windGustSensor?.unit ?? null);
  const displayWindUnit = windSpeedUnit ?? entityWindUnit;
  const windSpeed = windSpeedSensor
    ? windSpeedSensor.value
    : windSpeedUnit && attrs.wind_speed != null
      ? convertSpeedUnit(attrs.wind_speed, entityWindUnit, displayWindUnit)
      : attrs.wind_speed ?? null;
  const windGust = windGustSensor
    ? convertSpeedUnit(windGustSensor.value, windGustSensor.unit ?? displayWindUnit, displayWindUnit)
    : entityGust != null && windSpeedUnit
      ? convertSpeedUnit(entityGust, entityWindUnit, displayWindUnit)
      : entityGust;

  return {
    condition: condition,
    temperature: temperatureSensor?.value ?? (attrs.temperature != null ? attrs.temperature : null),
    apparentTemperature: feelsLikeSensor?.value ?? (attrs.apparent_temperature || null),
    humidity: humiditySensor ? Math.round(humiditySensor.value) : (attrs.humidity != null ? attrs.humidity : null),
    windSpeed,
    windGust,
    windBearing: windBearingSensor?.value ?? (attrs.wind_bearing != null ? attrs.wind_bearing : null),
    windDirection: attrs.wind_direction || null,
    pressure: pressureSensor?.value ?? (attrs.pressure != null ? attrs.pressure : null),
    pressureUnit: pressureSensor ? pressureSensor.unit : (typeof attrs.pressure_unit === 'string' ? attrs.pressure_unit : null),
    uvIndex: uvIndexSensor?.value ?? (attrs.uv_index != null ? attrs.uv_index : null),
    dewPoint: dewPointSensor?.value ?? (attrs.dew_point != null ? attrs.dew_point : null),
    aqi: aqiSensor?.value ?? null,
    forecast: attrs.forecast || attrs.forecast_hourly || hourlyForecast || [],
    friendlyName: attrs.friendly_name || i18n.t('weather'),
    templow: templow,
    windSpeedUnit,
    precipitation: precipitationSensor?.value ?? null,
    precipitationUnit: precipitationSensor?.unit ?? null
  };
}
