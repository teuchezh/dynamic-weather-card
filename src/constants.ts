import type { WeatherCardConfig } from './types';

// Version is injected from package.json during build
declare const __VERSION__: string;
export const VERSION = __VERSION__;

// Time of day thresholds (in minutes from midnight)
export const TIME_THRESHOLDS = {
  SUNRISE_START: 360, // 6:00
  SUNRISE_END: 480, // 8:00
  DAY_END: 1080, // 18:00
  SUNSET_END: 1200 // 20:00
} as const;

// Known attribute names for minimum temperature from various weather providers
export const TEMPLOW_ATTRIBUTES: readonly string[] = [
  'templow',
  'temperature_low',
  'temp_low',
  'min_temp',
  'yandex_pogoda_minimal_forecast_temperature'
] as const;

// Default configuration
export const DEFAULT_CONFIG: Required<Omit<WeatherCardConfig, 'entity' | 'type'>> = {
  showFeelsLike: true,
  showWind: false,
  showWindGust: false,
  showWindDirection: false,
  showHumidity: false,
  showMinTemp: true,
  showForecast: false,
  showHourlyForecast: false,
  showDailyForecast: false,
  hourlyForecastHours: 5,
  dailyForecastDays: 5,
  showSunriseSunset: false,
  showClock: false,
  clockPosition: 'top',
  overlayOpacity: 0.1,
  language: 'auto',
  height: null,
  windSpeedUnit: 'ms'
};
