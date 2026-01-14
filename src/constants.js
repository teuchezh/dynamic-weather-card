// Version is injected from package.json during build
export const VERSION = __VERSION__;

// Time of day thresholds (in minutes from midnight)
export const TIME_THRESHOLDS = {
  SUNRISE_START: 360, // 6:00
  SUNRISE_END: 480, // 8:00
  DAY_END: 1080, // 18:00
  SUNSET_END: 1200 // 20:00
};

// Known attribute names for minimum temperature from various weather providers
export const TEMPLOW_ATTRIBUTES = [
  'templow',
  'temperature_low',
  'temp_low',
  'min_temp',
  'yandex_pogoda_minimal_forecast_temperature'
];

// Default configuration
export const DEFAULT_CONFIG = {
  showFeelsLike: true,
  showWind: false,
  showWindGust: false,
  showWindDirection: false,
  showHumidity: false,
  showMinTemp: true,
  showForecast: false,
  showSunriseSunset: false,
  showClock: false,
  overlayOpacity: 0.1,
  language: 'auto',
  height: null,
  windSpeedUnit: 'ms' // 'ms' or 'kmh'
};
