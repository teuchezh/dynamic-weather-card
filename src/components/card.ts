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
  private subscribedEntity: string | null = null;
  private subscribedShowDaily: boolean = false;
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

    if (changedProperties.has('config')) {
      const prev = changedProperties.get('config') as WeatherCardConfigInternal | undefined;
      const wasAnimating = prev ? prev.showAnimations !== false : true;
      const isAnimating = this.config.showAnimations !== false;
      if (wasAnimating && !isAnimating) {
        this.animationManager.destroy();
      } else if (!wasAnimating && isAnimating) {
        this.updateComplete.then(() => {
          const container = this.shadowRoot?.querySelector('.canvas-container');
          if (container) this.animationManager.setup(container);
        });
      }
    }

    if (changedProperties.has('hass') || changedProperties.has('config')) {
      const entity = this.config.entity;
      const showDaily = this.config.showDailyForecast ?? false;

      if (this.hass && entity && (entity !== this.subscribedEntity || showDaily !== this.subscribedShowDaily)) {
        this.subscribedEntity = entity;
        this.subscribedShowDaily = showDaily;
        this.forecastService.subscribe(this.hass, entity, showDaily);
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
      textShadow: config.text_shadow !== undefined ? config.text_shadow : DEFAULT_CONFIG.textShadow,
      language: config.language || DEFAULT_CONFIG.language,
      windSpeedUnit: config.wind_speed_unit || DEFAULT_CONFIG.windSpeedUnit,
      showAnimations: config.show_animations !== false,
      layout: config.layout || DEFAULT_CONFIG.layout,
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

    const isMinimal = this.config.layout === 'minimal';
    const defaultHeight = isMinimal ? '56px' : '200px';
    const minHeight = this.config.height ? `${this.config.height}px` : defaultHeight;

    const bgGradient: BackgroundGradient | null = getBackgroundGradient(timeOfDay);
    const bgStyle = bgGradient
      ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));`
      : '';

    const overlayOpacity = this.config.overlayOpacity !== undefined
      ? this.config.overlayOpacity
      : DEFAULT_CONFIG.overlayOpacity;
    const overlayStyle = `--overlay-opacity: ${overlayOpacity};`;

    const shadowStrength = this.config.textShadow ?? DEFAULT_CONFIG.textShadow;
    const textShadowValue = shadowStrength === 0
      ? 'none'
      : [
        `0 1px 2px rgba(0,0,0,${Math.min(1, 0.4 * shadowStrength).toFixed(2)})`,
        `0 2px 6px rgba(0,0,0,${Math.min(1, 0.3 * shadowStrength).toFixed(2)})`,
        `0 4px 12px rgba(0,0,0,${Math.min(1, 0.2 * shadowStrength).toFixed(2)})`
      ].join(', ');
    const iconFilterValue = shadowStrength === 0
      ? 'none'
      : `drop-shadow(0px 1px 3px rgba(0,0,0,${Math.min(1, 0.6 * shadowStrength).toFixed(2)}))`;
    const shadowStyle = `--card-text-shadow: ${textShadowValue}; --card-icon-filter: ${iconFilterValue};`;

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

    const cardStyle = `min-height: ${minHeight}; ${bgStyle}; ${overlayStyle} ${shadowStyle} cursor: pointer;`;
    const hass = this.hass;

    return html`
      <ha-card
        @click=${(e: MouseEvent) => this.actionHandler.handleTap(e)}
        @pointerdown=${() => this.actionHandler.handlePointerDown()}
        @pointerup=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
        @pointercancel=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
      >
        ${isMinimal ? this.renderMinimal(weather, sunData, hass, cardClasses, cardStyle) : this.renderDefault(weather, sunData, hourlyForecast, dailyForecast, hass, cardClasses, cardStyle)}
      </ha-card>
    `;
  }

  private renderDefault(
    weather: ReturnType<typeof getWeatherData>,
    sunData: SunData,
    hourlyForecast: import('../types.js').WeatherForecast[],
    dailyForecast: import('../types.js').WeatherForecast[],
    hass: HomeAssistant,
    cardClasses: string,
    cardStyle: string
  ): TemplateResult {
    return html`
      <div class="${cardClasses}" style="${cardStyle}">
        ${this.config.showAnimations !== false ? html`<div class="canvas-container"></div>` : ''}
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
              .entityAttributes=${getWeatherAttributes(hass, this.config.entity)}
            ></weather-details>
            <weather-clock
              .format=${this.config.showClock && this.config.clockPosition === 'details' ? this.config.clockFormat : null}
            ></weather-clock>
          </div>
          <hourly-forecast
            .forecast=${hourlyForecast}
            .clockFormat=${this.config.clockFormat ?? '24h'}
          ></hourly-forecast>
          <daily-forecast
            .forecast=${dailyForecast}
            .lang=${i18n.lang}
          ></daily-forecast>
        </div>
      </div>
    `;
  }

  private renderMinimal(
    weather: ReturnType<typeof getWeatherData>,
    sunData: SunData,
    hass: HomeAssistant,
    cardClasses: string,
    cardStyle: string
  ): TemplateResult {
    const tempStr = weather.temperature != null ? Math.round(weather.temperature) + '°' : i18n.t('no_data');
    const templowStr = weather.templow != null ? `↓ ${Math.round(weather.templow)}°` : null;

    return html`
      <div class="${cardClasses} layout--minimal" style="${cardStyle}">
        ${this.config.showAnimations !== false ? html`<div class="canvas-container"></div>` : ''}
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${tempStr}</div>
            ${this.config.showMinTemp && templowStr ? html`<div class="mini-temp-low">${templowStr}</div>` : ''}
          </div>
          <div class="mini-details">
            <div class="mini-condition">${i18n.t(weather.condition)}</div>
            <weather-details
              .weather=${weather}
              .sunData=${sunData}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${getWeatherAttributes(hass, this.config.entity)}
              .compact=${true}
            ></weather-details>
          </div>
          ${this.config.showClock ? html`
            <weather-clock .format=${this.config.clockFormat} .compact=${true}></weather-clock>
          ` : ''}
        </div>
      </div>
    `;
  }
}
