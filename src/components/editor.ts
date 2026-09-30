import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_CONFIG } from '../constants';
import { i18n } from '../internationalization/index';
import { resolveLanguage } from '../internationalization/resolveLanguage';
import { translations } from '../internationalization/locales.generated';
import type { HomeAssistant } from '../types';

type HaFormSchema = Array<{
  name: string;
  required?: boolean;
  selector?: Record<string, unknown>;
  // Collapsible group; `flatten` keeps its fields at the top level of the config
  type?: 'expandable';
  title?: string;
  flatten?: boolean;
  schema?: HaFormSchema;
}>;

type WeatherCardEditorConfig = Record<string, unknown>;

const languageLabel = (code: string): string => {
  const key = `editor.language_${code}`;
  const translated = i18n.t(key);
  if (translated !== key) return translated;
  try {
    return new Intl.DisplayNames([i18n.lang], { type: 'language' }).of(code) ?? code;
  } catch {
    return code;
  }
};

export class DynamicWeatherCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config: WeatherCardEditorConfig = {};

  setConfig(config: WeatherCardEditorConfig): void {
    this._config = {
      name: '',
      layout: DEFAULT_CONFIG.layout,
      height: DEFAULT_CONFIG.height,
      show_feels_like: DEFAULT_CONFIG.showFeelsLike,
      show_wind: DEFAULT_CONFIG.showWind,
      show_wind_gust: DEFAULT_CONFIG.showWindGust,
      show_wind_direction: DEFAULT_CONFIG.showWindDirection,
      show_humidity: DEFAULT_CONFIG.showHumidity,
      show_pressure: DEFAULT_CONFIG.showPressure,
      show_uv_index: DEFAULT_CONFIG.showUvIndex,
      show_dew_point: DEFAULT_CONFIG.showDewPoint,
      show_min_temp: DEFAULT_CONFIG.showMinTemp,
      show_precipitation_outlook: DEFAULT_CONFIG.showPrecipitationOutlook,
      show_temperature_bars: DEFAULT_CONFIG.showTemperatureBars,
      show_hourly_forecast: DEFAULT_CONFIG.showHourlyForecast,
      hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
      show_daily_forecast: DEFAULT_CONFIG.showDailyForecast,
      daily_forecast_days: DEFAULT_CONFIG.dailyForecastDays,
      show_sunrise_sunset: DEFAULT_CONFIG.showSunriseSunset,
      show_animations: DEFAULT_CONFIG.showAnimations,
      visual_style: DEFAULT_CONFIG.visualStyle,
      animation_quality: DEFAULT_CONFIG.animationQuality,
      show_clock: DEFAULT_CONFIG.showClock,
      show_date: DEFAULT_CONFIG.showDate,
      clock_position: DEFAULT_CONFIG.clockPosition,
      clock_format: DEFAULT_CONFIG.clockFormat,
      overlay_opacity: DEFAULT_CONFIG.overlayOpacity,
      text_shadow: DEFAULT_CONFIG.textShadow,
      language: DEFAULT_CONFIG.language,
      wind_speed_unit: DEFAULT_CONFIG.windSpeedUnit,
      sunrise_entity: '',
      sunset_entity: '',
      ...config
    };
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('hass')) {
      const resolvedLang = resolveLanguage({ hassLang: this.hass?.language });
      if (i18n.lang !== resolvedLang) {
        i18n.setLanguage(resolvedLang);
        this.requestUpdate();
      }
    }
  }

  private get _schema(): HaFormSchema {
    return [
      { name: 'entity', required: true, selector: { entity: { domain: ['weather'] } } },
      { name: 'name', selector: { text: {} } },
      {
        name: 'layout',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.layout_default'), value: 'default' },
              { label: i18n.t('editor.layout_minimal'), value: 'minimal' }
            ]
          }
        }
      },
      { name: 'height', selector: { number: { min: 50, max: 800, step: 10, mode: 'box' } } },
      { name: 'show_feels_like', selector: { boolean: {} } },
      { name: 'show_wind', selector: { boolean: {} } },
      { name: 'show_wind_gust', selector: { boolean: {} } },
      { name: 'show_wind_direction', selector: { boolean: {} } },
      { name: 'show_humidity', selector: { boolean: {} } },
      { name: 'show_pressure', selector: { boolean: {} } },
      { name: 'show_uv_index', selector: { boolean: {} } },
      { name: 'show_dew_point', selector: { boolean: {} } },
      { name: 'show_min_temp', selector: { boolean: {} } },
      { name: 'show_precipitation_outlook', selector: { boolean: {} } },
      { name: 'show_hourly_forecast', selector: { boolean: {} } },
      { name: 'hourly_forecast_hours', selector: { number: { min: 1, max: 24, step: 1, mode: 'box' } } },
      { name: 'hourly_forecast_title', selector: { text: {} } },
      { name: 'show_daily_forecast', selector: { boolean: {} } },
      { name: 'daily_forecast_days', selector: { number: { min: 1, max: 14, step: 1, mode: 'box' } } },
      { name: 'daily_forecast_title', selector: { text: {} } },
      { name: 'show_temperature_bars', selector: { boolean: {} } },
      { name: 'show_sunrise_sunset', selector: { boolean: {} } },
      { name: 'sunrise_entity', selector: { entity: { domain: ['sensor'] } } },
      { name: 'sunset_entity', selector: { entity: { domain: ['sensor'] } } },
      {
        name: 'sensors',
        type: 'expandable',
        flatten: true,
        title: i18n.t('editor.sensors'),
        schema: [
          'temperature_entity',
          'feels_like_entity',
          'humidity_entity',
          'wind_speed_entity',
          'wind_gust_entity',
          'wind_bearing_entity',
          'precipitation_entity',
          'pressure_entity',
          'uv_index_entity',
          'dew_point_entity',
          'aqi_entity'
        ].map((name) => ({ name, selector: { entity: { domain: ['sensor'] } } }))
      },
      { name: 'show_clock', selector: { boolean: {} } },
      { name: 'show_date', selector: { boolean: {} } },
      {
        name: 'clock_position',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.clock_position_top'), value: 'top' },
              { label: i18n.t('editor.clock_position_details'), value: 'details' }
            ]
          }
        }
      },
      {
        name: 'clock_format',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.clock_format_24h'), value: '24h' },
              { label: i18n.t('editor.clock_format_12h'), value: '12h' }
            ]
          }
        }
      },
      { name: 'show_animations', selector: { boolean: {} } },
      {
        name: 'visual_style',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.visual_style_modern'), value: 'modern' },
              { label: i18n.t('editor.visual_style_classic'), value: 'classic' }
            ]
          }
        }
      },
      {
        name: 'animation_quality',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.animation_quality_high'), value: 'high' },
              { label: i18n.t('editor.animation_quality_medium'), value: 'medium' },
              { label: i18n.t('editor.animation_quality_low'), value: 'low' }
            ]
          }
        }
      },
      { name: 'overlay_opacity', selector: { number: { min: 0, max: 1, step: 0.05, mode: 'box' } } },
      { name: 'text_shadow', selector: { number: { min: 0, max: 3, step: 1, mode: 'box' } } },
      { name: 'text_color', selector: { text: {} } },
      { name: 'border_radius', selector: { number: { min: 0, max: 50, step: 1, mode: 'box', unit_of_measurement: 'px' } } },
      { name: 'sun_position_x', selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
      { name: 'sun_position_y', selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
      {
        name: 'language',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.language_auto'), value: 'auto' },
              ...Object.keys(translations).map((code) => ({ label: languageLabel(code), value: code }))
            ]
          }
        }
      },
      {
        name: 'wind_speed_unit',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.wind_speed_unit_ms'), value: 'ms' },
              { label: i18n.t('editor.wind_speed_unit_kmh'), value: 'kmh' }
            ]
          }
        }
      }
    ];
  }

  private _computeLabel = (schema: { name: string }): string => {
    const key = `editor.${schema.name}`;
    const label = i18n.t(key);
    return label === key ? schema.name : label;
  };

  private _valueChanged(ev: CustomEvent): void {
    const value = ev.detail?.value;
    if (!value) return;

    this._config = value;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true
    }));
  }

  protected render(): TemplateResult {
    if (!this.hass) {
      return html``;
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
