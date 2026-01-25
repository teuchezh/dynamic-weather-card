/**
 * Type definitions for Home Assistant and Weather Card
 */

// Home Assistant Entity State
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: WeatherEntityAttributes;
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id?: string;
    user_id?: string;
  };
}

// Weather Entity Attributes
export interface WeatherEntityAttributes {
  temperature?: number;
  temperature_unit?: string;
  humidity?: number;
  pressure?: number;
  wind_speed?: number;
  wind_speed_unit?: string;
  wind_bearing?: number;
  wind_gust_speed?: number;
  wind_gust?: number;
  visibility?: number;
  forecast?: WeatherForecast[];
  forecast_hourly?: WeatherForecast[];
  attribution?: string;
  friendly_name?: string;
  condition?: string;
  apparent_temperature?: number;
  wind_direction?: string;
  // Additional attributes for minimum temperature
  templow?: number;
  temperature_low?: number;
  temp_low?: number;
  min_temp?: number;
  yandex_pogoda_minimal_forecast_temperature?: number;
  // Sun data
  next_rising?: string;
  next_setting?: string;
  // Index signature for dynamic attributes
  [key: string]: unknown;
}

// Weather Forecast
export interface WeatherForecast {
  datetime: string;
  temperature?: number;
  templow?: number;
  native_templow?: number;
  condition?: string;
  precipitation?: number;
  precipitation_probability?: number;
  wind_speed?: number;
  wind_bearing?: number;
  // Alternative temperature property names from various providers
  temp?: number;
  native_temperature?: number;
}

// Forecast Event from subscription
export interface ForecastEvent {
  type: 'hourly' | 'daily' | 'twice_daily';
  forecast: WeatherForecast[];
}

// Home Assistant Interface
export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  language: string;
  locale: {
    language: string;
    number_format: string;
    time_format: string;
  };
  themes: Record<string, unknown>;
  selectedTheme: Record<string, unknown> | null;
  config: {
    latitude: number;
    longitude: number;
    elevation: number;
    unit_system: {
      length: string;
      mass: string;
      temperature: string;
      volume: string;
    };
    location_name: string;
    time_zone: string;
    version: string;
  };
  callService: (_domain: string, _service: string, _data?: Record<string, unknown>) => Promise<void>;
  callWS: (_msg: Record<string, unknown>) => Promise<unknown>;
  connection: {
    subscribeMessage: <T>(
      callback: (event: T) => void,
      subscribeMessage: Record<string, unknown>
    ) => Promise<() => void>;
  };
}

// Weather Card Configuration
export interface WeatherCardConfig {
  type: string;
  entity: string;
  showFeelsLike?: boolean;
  showWind?: boolean;
  showWindGust?: boolean;
  showWindDirection?: boolean;
  showHumidity?: boolean;
  showMinTemp?: boolean;
  showForecast?: boolean;
  showHourlyForecast?: boolean;
  showDailyForecast?: boolean;
  hourlyForecastHours?: number;
  dailyForecastDays?: number;
  showSunriseSunset?: boolean;
  showClock?: boolean;
  clockPosition?: 'top' | 'details';
  clockFormat?: '12h' | '24h';
  overlayOpacity?: number;
  language?: 'auto' | 'en' | 'ru' | 'de' | 'nl' | 'fr' | 'es' | 'it';
  height?: number | null;
  windSpeedUnit?: 'ms' | 'kmh';
}

// Time of Day
export interface TimeOfDay {
  type: 'sunrise' | 'day' | 'sunset' | 'night';
  progress: number;
}

// Position
export interface Position {
  x: number;
  y: number;
}

// RGB Color
export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

// Background Gradient
export interface BackgroundGradient {
  start: RGBColor;
  end: RGBColor;
}

// Sun/Moon Data
export interface SunMoonData {
  sunrise: Date | null;
  sunset: Date | null;
}

// Sun Data with hasSunData flag (used by components)
export interface SunData {
  sunrise: Date | null;
  sunset: Date | null;
  hasSunData: boolean;
}

// Weather Data (processed from entity)
export interface WeatherData {
  condition: string;
  temperature: number | null;
  apparentTemperature: number | null;
  humidity: number | null;
  windSpeed: number | null;
  windGust: number | null;
  windBearing: number | null;
  windDirection: string | null;
  pressure: number | null;
  forecast: WeatherForecast[];
  friendlyName: string;
  templow: number | null;
}

// Action Configuration
export interface ActionConfig {
  action: 'more-info' | 'toggle' | 'call-service' | 'navigate' | 'url' | 'none';
  entity?: string;
  service?: string;
  service_data?: Record<string, unknown>;
  navigation_path?: string;
  url_path?: string;
}

// Config Input (from user YAML)
export interface ConfigInput {
  type?: string;
  entity: string;
  icons_path?: string;
  name?: string;
  height?: number;
  show_feels_like?: boolean;
  show_wind?: boolean;
  show_wind_gust?: boolean;
  show_wind_direction?: boolean;
  show_humidity?: boolean;
  show_min_temp?: boolean;
  show_forecast?: boolean;
  show_hourly_forecast?: boolean;
  show_daily_forecast?: boolean;
  hourly_forecast_hours?: number;
  daily_forecast_days?: number;
  show_sunrise_sunset?: boolean;
  show_clock?: boolean;
  clock_position?: 'top' | 'details';
  clock_format?: '12h' | '24h';
  overlay_opacity?: number;
  language?: 'auto' | 'en' | 'ru' | 'de' | 'nl' | 'fr' | 'es' | 'it';
  wind_speed_unit?: 'ms' | 'kmh';
  sunrise_entity?: string;
  sunset_entity?: string;
  templow_attribute?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

// Internal Card Configuration (normalized)
export interface WeatherCardConfigInternal extends WeatherCardConfig {
  name?: string;
  icons_path?: string;
  sunriseEntity?: string | null;
  sunsetEntity?: string | null;
  templowAttribute?: string | null;
  tapAction?: ActionConfig;
  holdAction?: ActionConfig;
  doubleTapAction?: ActionConfig;
}

// Details Component Configuration
export interface DetailsConfig {
  showHumidity: boolean;
  showWind: boolean;
  showWindGust: boolean;
  showWindDirection: boolean;
  showSunriseSunset: boolean;
  clockFormat: '12h' | '24h';
  windSpeedUnit: 'ms' | 'kmh';
}

// Custom Card Registration
export interface CustomCardRegistration {
  type: string;
  name: string;
  description: string;
  preview: boolean;
  documentationURL: string;
}

declare global {
  interface Window {
    customCards?: CustomCardRegistration[];
  }
}
