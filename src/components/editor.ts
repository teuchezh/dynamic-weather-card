import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_CONFIG } from '../constants';
import { i18n } from '../internationalization/index';
import { resolveLanguage } from '../internationalization/resolveLanguage';
import type { HomeAssistant } from '../types';

type HaFormSchema = Array<{
  name: string;
  required?: boolean;
  selector?: Record<string, unknown>;
}>;

type WeatherCardEditorConfig = Record<string, unknown>;

export class DynamicWeatherCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config: WeatherCardEditorConfig = {};

  setConfig(config: WeatherCardEditorConfig): void {
    this._config = {
      name: '',
      height: DEFAULT_CONFIG.height,
      show_feels_like: DEFAULT_CONFIG.showFeelsLike,
      show_wind: DEFAULT_CONFIG.showWind,
      show_wind_gust: DEFAULT_CONFIG.showWindGust,
      show_wind_direction: DEFAULT_CONFIG.showWindDirection,
      show_humidity: DEFAULT_CONFIG.showHumidity,
      show_min_temp: DEFAULT_CONFIG.showMinTemp,
      show_hourly_forecast: DEFAULT_CONFIG.showHourlyForecast,
      hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
      show_daily_forecast: DEFAULT_CONFIG.showDailyForecast,
      daily_forecast_days: DEFAULT_CONFIG.dailyForecastDays,
      show_sunrise_sunset: DEFAULT_CONFIG.showSunriseSunset,
      show_clock: DEFAULT_CONFIG.showClock,
      clock_position: DEFAULT_CONFIG.clockPosition,
      overlay_opacity: DEFAULT_CONFIG.overlayOpacity,
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
      { name: 'height', selector: { number: { min: 200, max: 800, step: 10, mode: 'box' } } },
      { name: 'show_feels_like', selector: { boolean: {} } },
      { name: 'show_wind', selector: { boolean: {} } },
      { name: 'show_wind_gust', selector: { boolean: {} } },
      { name: 'show_wind_direction', selector: { boolean: {} } },
      { name: 'show_humidity', selector: { boolean: {} } },
      { name: 'show_min_temp', selector: { boolean: {} } },
      { name: 'show_hourly_forecast', selector: { boolean: {} } },
      { name: 'hourly_forecast_hours', selector: { number: { min: 1, max: 24, step: 1, mode: 'box' } } },
      { name: 'show_daily_forecast', selector: { boolean: {} } },
      { name: 'daily_forecast_days', selector: { number: { min: 1, max: 14, step: 1, mode: 'box' } } },
      { name: 'show_sunrise_sunset', selector: { boolean: {} } },
      { name: 'sunrise_entity', selector: { entity: { domain: ['sensor'] } } },
      { name: 'sunset_entity', selector: { entity: { domain: ['sensor'] } } },
      { name: 'show_clock', selector: { boolean: {} } },
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
      { name: 'overlay_opacity', selector: { number: { min: 0, max: 1, step: 0.05, mode: 'box' } } },
      {
        name: 'language',
        selector: {
          select: {
            options: [
              { label: i18n.t('editor.language_auto'), value: 'auto' },
              { label: i18n.t('editor.language_en'), value: 'en' },
              { label: i18n.t('editor.language_ru'), value: 'ru' },
              { label: i18n.t('editor.language_de'), value: 'de' },
              { label: i18n.t('editor.language_nl'), value: 'nl' },
              { label: i18n.t('editor.language_fr'), value: 'fr' },
              { label: i18n.t('editor.language_es'), value: 'es' }
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
