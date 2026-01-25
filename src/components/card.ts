import { LitElement, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { DEFAULT_CONFIG } from '../constants.js';
import { i18n } from '../internationalization/index.js';
import { resolveLanguage } from '../internationalization/resolveLanguage.js';
import {
  getBackgroundGradient,
  getSunriseSunsetData,
  getTimeOfDayWithSunData
} from '../utils.js';
import { cardStyles } from './styles.js';
import { AnimationManager } from './animation-manager.js';
import { ForecastService } from './forecast-service.js';
import { ActionHandler } from './action-handler.js';
import { getWeatherData, getWeatherAttributes } from './weather-data.js';
import './clock.js';
import './details.js';
import './hourly-forecast.js';
import './daily-forecast.js';
import type {
  HomeAssistant,
  HassEntity,
  TimeOfDay,
  BackgroundGradient,
  SunData,
  ConfigInput,
  WeatherCardConfigInternal,
  DetailsConfig
} from '../types.js';

export class AnimatedWeatherCard extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) config!: WeatherCardConfigInternal;

  private animationManager: AnimationManager;
  private forecastService: ForecastService;
  private actionHandler: ActionHandler;
  _testTimeOfDay?: TimeOfDay;

  static get styles() {
    return cardStyles;
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('dynamic-weather-card-editor');
  }

  static getStubConfig(): ConfigInput {
    return {
      type: 'custom:dynamic-weather-card',
      entity: 'weather.home',
      show_hourly_forecast: true,
      hourly_forecast_hours: DEFAULT_CONFIG.hourlyForecastHours,
      show_daily_forecast: true,
      daily_forecast_days: DEFAULT_CONFIG.dailyForecastDays
    };
  }

  constructor() {
    super();
    this.config = {} as WeatherCardConfigInternal;

    this.animationManager = new AnimationManager(() => this.getDrawParams());
    this.forecastService = new ForecastService(() => this.requestUpdate());
    this.actionHandler = new ActionHandler(
      () => this.hass,
      () => this.config,
      (type, detail) => this.fireEvent(type, detail)
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete.then(() => {
      setTimeout(() => {
        const container = this.shadowRoot?.querySelector('.canvas-container');
        if (container) {
          this.animationManager.setup(container);
        }
      }, 100);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.animationManager.destroy();
    this.forecastService.unsubscribe();
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      this.animationManager.resize();

      if (this.hass && this.config.entity) {
        this.forecastService.subscribe(
          this.hass,
          this.config.entity,
          this.config.showDailyForecast ?? false
        );
      }
    }

    const resolvedLang = resolveLanguage({
      configLang: this.config?.language,
      hassLang: this.hass?.language
    });

    if (i18n.lang !== resolvedLang) {
      i18n.setLanguage(resolvedLang);
    }
  }

  private getDrawParams(): { condition: string; timeOfDay: TimeOfDay } | null {
    if (!this.hass || !this.config.entity) return null;

    const weather = getWeatherData(
      this.hass,
      this.config.entity,
      this.config,
      this.forecastService.getHourlyData()
    );
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(
      weatherState || {} as HassEntity,
      this.config.sunriseEntity,
      this.config.sunsetEntity,
      this.hass
    );
    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);

    return {
      condition: weather.condition,
      timeOfDay
    };
  }

  private getDetailsConfig(): DetailsConfig {
    return {
      showHumidity: this.config.showHumidity ?? true,
      showWind: this.config.showWind ?? true,
      showWindGust: this.config.showWindGust ?? true,
      showWindDirection: this.config.showWindDirection ?? true,
      showSunriseSunset: this.config.showSunriseSunset ?? true,
      clockFormat: this.config.clockFormat ?? '24h',
      windSpeedUnit: this.config.windSpeedUnit ?? 'ms'
    };
  }

  setConfig(config: ConfigInput): void {
    if (!config.entity) {
      throw new Error('Please define a weather entity');
    }
    const showHourlyForecast = config.show_hourly_forecast ?? config.show_forecast;
    this.config = {
      type: 'custom:dynamic-weather-card',
      entity: config.entity,
      icons_path: config.icons_path,
      name: config.name,
      height: config.height || DEFAULT_CONFIG.height,
      showFeelsLike: config.show_feels_like !== false,
      showWind: config.show_wind !== false,
      showWindGust: config.show_wind_gust !== false,
      showWindDirection: config.show_wind_direction !== false,
      showHumidity: config.show_humidity !== false,
      showMinTemp: config.show_min_temp !== false,
      showForecast: config.show_forecast === true,
      showHourlyForecast: showHourlyForecast === true,
      showDailyForecast: config.show_daily_forecast === true,
      hourlyForecastHours: config.hourly_forecast_hours ?? DEFAULT_CONFIG.hourlyForecastHours,
      dailyForecastDays: config.daily_forecast_days ?? DEFAULT_CONFIG.dailyForecastDays,
      showSunriseSunset: config.show_sunrise_sunset !== false,
      showClock: config.show_clock === true,
      clockPosition: config.clock_position || DEFAULT_CONFIG.clockPosition,
      clockFormat: config.clock_format || DEFAULT_CONFIG.clockFormat,
      overlayOpacity: config.overlay_opacity !== undefined ? config.overlay_opacity : DEFAULT_CONFIG.overlayOpacity,
      language: config.language || DEFAULT_CONFIG.language,
      windSpeedUnit: config.wind_speed_unit || DEFAULT_CONFIG.windSpeedUnit,
      sunriseEntity: config.sunrise_entity || null,
      sunsetEntity: config.sunset_entity || null,
      templowAttribute: config.templow_attribute || null,
      tapAction: config.tap_action || { action: 'more-info' },
      holdAction: config.hold_action || { action: 'none' },
      doubleTapAction: config.double_tap_action || { action: 'none' }
    };

    if (this.config.language) {
      i18n.setLanguage(this.config.language);
    }
  }

  private fireEvent(type: string, detail: Record<string, unknown> = {}): void {
    const event = new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  getCardSize(): number {
    return 1;
  }

  render(): TemplateResult {
    if (!this.hass) {
      return html`<div>No Home Assistant connection</div>`;
    }

    const weather = getWeatherData(
      this.hass,
      this.config.entity,
      this.config,
      this.forecastService.getHourlyData()
    );
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(
      weatherState,
      this.config.sunriseEntity,
      this.config.sunsetEntity,
      this.hass
    ) as SunData;

    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const cardClasses = `weather-card ${timeOfDay.type}`;

    const minHeight = this.config.height ? `${this.config.height}px` : '200px';

    const bgGradient: BackgroundGradient | null = getBackgroundGradient(timeOfDay);
    const bgStyle = bgGradient
      ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));`
      : '';

    const overlayOpacity = this.config.overlayOpacity !== undefined
      ? this.config.overlayOpacity
      : DEFAULT_CONFIG.overlayOpacity;
    const overlayStyle = `--overlay-opacity: ${overlayOpacity};`;

    const hourlyForecast = this.config.showHourlyForecast
      ? this.forecastService.getHourlyForecast(
        this.config.hourlyForecastHours ?? DEFAULT_CONFIG.hourlyForecastHours,
        weather
      )
      : [];

    const dailyForecast = this.config.showDailyForecast
      ? this.forecastService.getDailyForecast(
        this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays,
        weather
      )
      : [];

    return html`
      <ha-card
        @click=${(e: MouseEvent) => this.actionHandler.handleTap(e)}
        @pointerdown=${() => this.actionHandler.handlePointerDown()}
        @pointerup=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
        @pointercancel=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
      >
        <div class="${cardClasses}" style="min-height: ${minHeight}; ${bgStyle}; ${overlayStyle} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name && this.config.name.trim() !== '' ? html`
              <div class="header">
                <div class="location">${this.config.name}</div>
              </div>
            ` : ''}
            <div class="primary">
              <div class="primary-left">
                <div class="condition">${i18n.t(weather.condition)}</div>
                <div class="temperature">${weather.temperature != null ? Math.round(weather.temperature) + '°' : i18n.t('no_data')}</div>
                ${this.config.showMinTemp ? html`
                  <div class="temp-range">
                    <span class="temp-min">↓ ${weather.templow != null ? `${Math.round(weather.templow)}°` : i18n.t('no_data')}</span>
                  </div>
                ` : ''}
                ${this.config.showFeelsLike ? html`
                  <div class="feels-like">${i18n.t('feels_like')} ${weather.apparentTemperature != null ? `${Math.round(weather.apparentTemperature)}°` : i18n.t('no_data')}</div>
                ` : ''}
              </div>
              <weather-clock
                .format=${this.config.showClock && this.config.clockPosition === 'top' ? this.config.clockFormat : null}
              ></weather-clock>
            </div>
            <div class="details ${this.config.showClock && this.config.clockPosition === 'details' ? 'details--clock' : ''}">
              <weather-details
                .weather=${weather}
                .sunData=${sunData}
                .config=${this.getDetailsConfig()}
                .entityAttributes=${getWeatherAttributes(this.hass, this.config.entity)}
              ></weather-details>
              <weather-clock
                .format=${this.config.showClock && this.config.clockPosition === 'details' ? this.config.clockFormat : null}
              ></weather-clock>
            </div>
            <hourly-forecast
              .forecast=${hourlyForecast}
            ></hourly-forecast>
            <daily-forecast
              .forecast=${dailyForecast}
              .lang=${i18n.lang}
            ></daily-forecast>
          </div>
        </div>
      </ha-card>
    `;
  }
}
