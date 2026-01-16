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
  showSunriseSunset?: boolean;
  showClock?: boolean;
  overlayOpacity?: number;
  language?: 'auto' | 'en' | 'ru' | 'de' | 'nl' | 'fr';
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
