import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
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
    this._config = { ...config };
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
      { name: 'show_clock', selector: { boolean: {} } },
      {
        name: 'clock_position',
        selector: {
          select: {
            options: [
              { label: 'Top', value: 'top' },
              { label: 'Details', value: 'details' }
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
              { label: 'Auto', value: 'auto' },
              { label: 'English', value: 'en' },
              { label: 'Russian', value: 'ru' },
              { label: 'German', value: 'de' },
              { label: 'Dutch', value: 'nl' },
              { label: 'French', value: 'fr' },
              { label: 'Spanish', value: 'es' }
            ]
          }
        }
      },
      {
        name: 'wind_speed_unit',
        selector: {
          select: {
            options: [
              { label: 'm/s', value: 'ms' },
              { label: 'km/h', value: 'kmh' }
            ]
          }
        }
      },
      { name: 'sunrise_entity', selector: { entity: { domain: ['sensor'] } } },
      { name: 'sunset_entity', selector: { entity: { domain: ['sensor'] } } },
      { name: 'templow_attribute', selector: { text: {} } }
    ];
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      entity: 'Weather Entity',
      name: 'Card Title',
      height: 'Card Height',
      show_feels_like: 'Show Feels Like',
      show_wind: 'Show Wind Speed',
      show_wind_gust: 'Show Wind Gust',
      show_wind_direction: 'Show Wind Direction',
      show_humidity: 'Show Humidity',
      show_min_temp: 'Show Min Temperature',
      show_hourly_forecast: 'Show Hourly Forecast',
      hourly_forecast_hours: 'Hourly Forecast Hours',
      show_daily_forecast: 'Show Daily Forecast',
      daily_forecast_days: 'Daily Forecast Days',
      show_sunrise_sunset: 'Show Sunrise/Sunset',
      show_clock: 'Show Clock',
      clock_position: 'Clock Position',
      overlay_opacity: 'Overlay Opacity',
      language: 'Language',
      wind_speed_unit: 'Wind Speed Unit',
      sunrise_entity: 'Sunrise Entity',
      sunset_entity: 'Sunset Entity',
      templow_attribute: 'Min Temp Attribute'
    };

    return labels[schema.name] ?? schema.name;
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
