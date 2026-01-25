import { TEMPLOW_ATTRIBUTES } from '../constants.js';
import { i18n } from '../internationalization/index.js';
import type {
  HomeAssistant,
  WeatherEntityAttributes,
  WeatherData,
  WeatherForecast
} from '../types.js';

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
  config: { templowAttribute?: string | null },
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

  return {
    condition: condition,
    temperature: attrs.temperature != null ? attrs.temperature : null,
    apparentTemperature: attrs.apparent_temperature || null,
    humidity: attrs.humidity != null ? attrs.humidity : null,
    windSpeed: attrs.wind_speed != null ? attrs.wind_speed : null,
    windGust: attrs.wind_gust_speed || attrs.wind_gust || null,
    windBearing: attrs.wind_bearing != null ? attrs.wind_bearing : null,
    windDirection: attrs.wind_direction || null,
    pressure: attrs.pressure || null,
    forecast: attrs.forecast || attrs.forecast_hourly || hourlyForecast || [],
    friendlyName: attrs.friendly_name || i18n.t('weather'),
    templow: templow
  };
}
