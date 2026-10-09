import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_CONFIG } from '../constants';
import { i18n } from '../internationalization/index';
import { resolveLanguage } from '../internationalization/resolveLanguage';
import { translations } from '../internationalization/locales.generated';
import type { HomeAssistant } from '../types';
import { WIND_UNIT_SETTINGS } from '../utils';
import { cleanEditorConfig } from '../editor-config';

type HaFormSchema = Array<{
  name: string;
  required?: boolean;
  selector?: Record<string, unknown>;
  // expandable: collapsible section; grid: fields side by side.
  // `flatten` (or an empty name) keeps their fields at the top level of the config
  type?: 'expandable' | 'grid';
  title?: string;
  icon?: string;
  flatten?: boolean;
  schema?: HaFormSchema;
}>;

const toggle = (name: string): HaFormSchema[number] => ({ name, selector: { boolean: {} } });
const grid = (...schema: HaFormSchema): HaFormSchema[number] => ({ name: '', type: 'grid', schema });
const select = (name: string, values: string[]): HaFormSchema[number] => ({
  name,
  selector: {
    select: {
      mode: 'dropdown',
      options: values.map(value => ({ label: i18n.t(`editor.${name}_${value}`), value }))
    }
  }
});

type WeatherCardEditorConfig = Record<string, unknown>;

const languageLabel = (code: string): string => {
  const key = `editor.language_${code}`;
  const translated = i18n.t(key);
  if (translated !== key) return translated;
  try {
    const name = new Intl.DisplayNames([i18n.lang], { type: 'language' }).of(code) ?? code;
    return name.charAt(0).toLocaleUpperCase(i18n.lang) + name.slice(1);
  } catch {
    return code;
  }
};

// What the card does when an option is left out (keys as in YAML)
const editorDefaults = (): WeatherCardEditorConfig => ({
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
  show_forecast_wind: DEFAULT_CONFIG.showForecastWind,
  show_forecast_description: DEFAULT_CONFIG.showForecastDescription,
  show_aurora: DEFAULT_CONFIG.showAurora,
  show_raindrops: DEFAULT_CONFIG.showRaindrops,
  show_wind_effects: DEFAULT_CONFIG.showWindEffects,
  show_hourly_forecast: DEFAULT_CONFIG.showHourlyForecast,
  hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
  hourly_forecast_step: DEFAULT_CONFIG.hourlyForecastStep,
  hourly_forecast_chart: DEFAULT_CONFIG.hourlyForecastChart,
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
  clock_size: DEFAULT_CONFIG.clockSize,
  clock_weight: DEFAULT_CONFIG.clockWeight,
  overlay_opacity: DEFAULT_CONFIG.overlayOpacity,
  text_shadow: DEFAULT_CONFIG.textShadow,
  language: DEFAULT_CONFIG.language,
  wind_speed_unit: DEFAULT_CONFIG.windSpeedUnit
});

export class DynamicWeatherCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config: WeatherCardEditorConfig = {};

  setConfig(config: WeatherCardEditorConfig): void {
    // show_forecast is the old name of show_hourly_forecast, which wins when both are set
    const { show_forecast: legacyForecast, ...rest } = config;
    this._config = rest.show_hourly_forecast === undefined && legacyForecast !== undefined
      ? { ...rest, show_hourly_forecast: legacyForecast }
      : rest;
  }

  // The form shows each option's default when the YAML leaves it out
  private get _formData(): WeatherCardEditorConfig {
    return { ...editorDefaults(), ...this._config };
  }

  // Before rendering, so section titles and labels use the HA language from the first render
  willUpdate(changedProperties: Map<string, unknown>): void {
    super.willUpdate(changedProperties);
    if (changedProperties.has('hass')) {
      const resolvedLang = resolveLanguage({ hassLang: this.hass?.language });
      if (i18n.lang !== resolvedLang) i18n.setLanguage(resolvedLang);
    }
  }

  private get _schema(): HaFormSchema {
    const config = this._formData;
    const isOn = (name: string): boolean => config[name] === true;
    const section = (name: string, icon: string, schema: HaFormSchema): HaFormSchema[number] => ({
      name,
      type: 'expandable',
      flatten: true,
      title: i18n.t(`editor.section_${name}`),
      icon,
      schema
    });

    return [
      { name: 'entity', required: true, selector: { entity: { domain: ['weather'] } } },
      { name: 'name', selector: { text: {} } },
      grid(
        select('layout', ['default', 'minimal']),
        { name: 'height', selector: { number: { min: 50, max: 800, step: 10, mode: 'box', unit_of_measurement: 'px' } } }
      ),
      section('appearance', 'mdi:palette-outline', [
        grid(
          select('visual_style', ['modern', 'classic']),
          select('animation_quality', ['high', 'medium', 'low'])
        ),
        grid(toggle('show_animations'), toggle('show_aurora')),
        grid(toggle('show_raindrops'), toggle('show_wind_effects')),
        grid(
          { name: 'overlay_opacity', selector: { number: { min: 0, max: 1, step: 0.05, mode: 'box' } } },
          { name: 'text_shadow', selector: { number: { min: 0, max: 3, step: 1, mode: 'box' } } }
        ),
        grid(
          { name: 'text_color', selector: { text: {} } },
          { name: 'border_radius', selector: { number: { min: 0, max: 50, step: 1, mode: 'box', unit_of_measurement: 'px' } } }
        ),
        { name: 'sun_position_x', selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
        { name: 'sun_position_y', selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
        { name: 'styles', selector: { text: { multiline: true } } }
      ]),
      section('details', 'mdi:thermometer', [
        grid(
          toggle('show_feels_like'),
          toggle('show_min_temp'),
          toggle('show_humidity'),
          toggle('show_pressure'),
          toggle('show_uv_index'),
          toggle('show_dew_point'),
          toggle('show_sunrise_sunset'),
          toggle('show_precipitation_outlook')
        ),
        toggle('show_wind'),
        ...(isOn('show_wind')
          ? [
            grid(toggle('show_wind_gust'), toggle('show_wind_direction')),
            select('wind_speed_unit', [...WIND_UNIT_SETTINGS])
          ]
          : [])
      ]),
      section('forecast', 'mdi:calendar-clock', [
        toggle('show_hourly_forecast'),
        ...(isOn('show_hourly_forecast')
          ? [
            grid(
              { name: 'hourly_forecast_hours', selector: { number: { min: 1, step: 1, mode: 'box' } } },
              { name: 'hourly_forecast_step', selector: { number: { min: 1, max: 12, step: 1, mode: 'box', unit_of_measurement: 'h' } } }
            ),
            { name: 'hourly_forecast_title', selector: { text: {} } },
            toggle('hourly_forecast_chart')
          ]
          : []),
        toggle('show_daily_forecast'),
        ...(isOn('show_daily_forecast')
          ? [
            grid(
              { name: 'daily_forecast_days', selector: { number: { min: 1, max: 14, step: 1, mode: 'box' } } },
              { name: 'daily_forecast_title', selector: { text: {} } }
            ),
            toggle('show_temperature_bars')
          ]
          : []),
        ...(isOn('show_hourly_forecast') || isOn('show_daily_forecast') ? [toggle('show_forecast_wind')] : []),
        toggle('show_forecast_description')
      ]),
      section('clock', 'mdi:clock-outline', [
        {
          name: 'language',
          selector: {
            select: {
              mode: 'dropdown',
              options: [
                { label: i18n.t('editor.language_auto'), value: 'auto' },
                ...Object.keys(translations).map((code) => ({ label: languageLabel(code), value: code }))
              ]
            }
          }
        },
        grid(toggle('show_clock'), toggle('show_date')),
        ...(isOn('show_clock') || isOn('show_date')
          ? [
            grid(select('clock_position', ['top', 'details']), select('clock_format', ['24h', '12h'])),
            grid(select('clock_size', ['small', 'medium', 'large']), select('clock_weight', ['thin', 'regular', 'bold']))
          ]
          : [])
      ]),
      section('sensors', 'mdi:access-point', [
        ...[
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
          'aqi_entity',
          'sunrise_entity',
          'sunset_entity'
        ].map((name) => ({ name, selector: { entity: { domain: ['sensor'] } } }))
      ])
    ];
  }

  // Optional hint under a field, from editor.<name>_helper
  private _computeHelper = (schema: { name: string }): string | undefined => {
    const key = `editor.${schema.name}_helper`;
    const helper = i18n.t(key);
    return helper === key ? undefined : helper;
  };

  private _computeLabel = (schema: { name: string }): string => {
    const key = `editor.${schema.name}`;
    const label = i18n.t(key);
    return label === key ? schema.name : label;
  };

  private _valueChanged(ev: CustomEvent): void {
    const value = ev.detail?.value;
    if (!value) return;

    this._config = cleanEditorConfig(value, editorDefaults());
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
        .data=${this._formData}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
