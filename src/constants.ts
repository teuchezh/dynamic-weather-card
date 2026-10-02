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
  // On unless set to false, matching the card (these used to differ, so the editor
  // turned them off for new cards while YAML without them showed them)
  showWind: true,
  showWindGust: true,
  showWindDirection: true,
  showHumidity: true,
  showPressure: false,
  showUvIndex: false,
  showDewPoint: false,
  showMinTemp: true,
  showPrecipitationOutlook: false,
  showTemperatureBars: false,
  showForecastWind: false,
  showAurora: false,
  showRaindrops: true,
  showWindEffects: true,
  showForecast: false,
  showHourlyForecast: false,
  showDailyForecast: false,
  hourlyForecastHours: 5,
  hourlyForecastStep: 1,
  hourlyForecastChart: false,
  showForecastDescription: false,
  dailyForecastDays: 5,
  hourlyForecastTitle: null as string | null,
  dailyForecastTitle: null as string | null,
  showSunriseSunset: true,
  showClock: false,
  showDate: false,
  clockPosition: 'top',
  clockFormat: '24h',
  overlayOpacity: 0.1,
  textShadow: 1,
  language: 'auto',
  height: null,
  borderRadius: null as number | null,
  sunPositionX: null as number | null,
  sunPositionY: null as number | null,
  textColor: null as string | null,
  windSpeedUnit: 'auto',
  showAnimations: true,
  layout: 'default' as 'default' | 'minimal',
  visualStyle: 'modern' as 'modern' | 'classic',
  animationQuality: 'high' as 'high' | 'medium' | 'low'
};
