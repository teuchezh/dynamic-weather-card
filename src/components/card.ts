import { LitElement, html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { CLOCK_SCALE, CLOCK_WEIGHT, DEFAULT_CONFIG } from '../constants.js';
import { i18n } from '../internationalization/index.js';
import { resolveLanguage } from '../internationalization/resolveLanguage.js';
import {
  getSunriseSunsetData,
  getTimeOfDayWithSunData,
  getBackgroundGradient
} from '../utils.js';
import { cardStyles } from './styles.js';
import { getSkyColors, rgb } from '../sky.js';
import { AnimationManager, type DrawParams } from './animation-manager.js';
import { ForecastService } from './forecast-service.js';
import { ActionHandler } from './action-handler.js';
import { getWeatherData, getWeatherAttributes, readTextSensor } from './weather-data.js';
import { getPrecipitationOutlook } from '../precipitation-outlook.js';
import { resolveForecastPopup, type ForecastPopup } from '../forecast-popup.js';
import { getSVGIcon } from '../icons/svg-icons.js';
import { applyUserStyles } from '../user-styles.js';
import {
  formatTime,
  convertSpeedUnit,
  windDisplayUnit,
  windUnitLabel,
  WIND_UNIT_SETTINGS,
  DAILY_FORECAST_LABEL_SETTINGS,
  type WindUnitSetting
} from '../utils.js';
import type { ForecastWindOptions } from './forecast-wind-row.js';
import './clock.js';
import './details.js';
import './hourly-forecast.js';
import './daily-forecast.js';
import type {
  HomeAssistant,
  HassEntity,
  TimeOfDay,
  SunData,
  BackgroundGradient,
  ConfigInput,
  WeatherCardConfigInternal,
  DetailsConfig,
  DailyForecastLabel
} from '../types.js';

export class AnimatedWeatherCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) config!: WeatherCardConfigInternal;

  private animationManager: AnimationManager;
  private forecastService: ForecastService;
  private actionHandler: ActionHandler;
  // Entity and forecast types of the current forecast subscription
  private subscriptionKey: string | null = null;
  // Stable wind options object so forecast strips skip Lit updates when units are unchanged
  private forecastWindOptions: ForecastWindOptions | null = null;
  _testTimeOfDay?: TimeOfDay;
  // Demo/testing override of the moon phase (0..1); null = real phase
  _testMoonPhase?: number | null;
  // Demo/testing override of the current time for the precipitation outlook
  _testNow?: Date | null;
  @state() private forecastDialogOpen = false;
  private focusForecastClose = false;

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
    // Subscribe again when the card is attached again (e.g. switching dashboard views)
    this.subscriptionKey = null;
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    applyUserStyles(this.shadowRoot, this.config?.styles);

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
      // Daily forecast also feeds min temperature when show_min_temp is on
      const options = {
        daily: !!(this.config.showDailyForecast || this.config.showMinTemp),
        twiceDaily: this.config.showForecastDescription ?? false
      };
      const key = `${entity}|${options.daily}|${options.twiceDaily}`;

      if (this.hass && entity && key !== this.subscriptionKey) {
        this.subscriptionKey = key;
        this.forecastService.subscribe(this.hass, entity, options);
      }
    }

    const resolvedLang = resolveLanguage({
      configLang: this.config?.language,
      hassLang: this.hass?.language
    });

    if (i18n.lang !== resolvedLang) {
      i18n.setLanguage(resolvedLang);
    }

    if (this.forecastDialogOpen && !this.renderRoot.querySelector('.forecast-dialog')) {
      this.forecastDialogOpen = false;
    } else if (this.focusForecastClose) {
      this.focusForecastClose = false;
      this.renderRoot.querySelector<HTMLElement>('.forecast-dialog-close')?.focus();
    }
  }

  private getDrawParams(): DrawParams | null {
    if (!this.hass || !this.config.entity) return null;

    const weather = getWeatherData(
      this.hass,
      this.config.entity,
      this.config,
      this.forecastService.getHourlyData(),
      this.forecastService.getDailyData()
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
      timeOfDay,
      sunPosition: { x: this.config.sunPositionX, y: this.config.sunPositionY },
      moonPhase: this._testMoonPhase ?? undefined,
      visualStyle: this.config.visualStyle,
      quality: this.config.animationQuality,
      windSpeed: this.getWindSpeedMs(weather),
      aurora: this.config.showAurora === true,
      raindrops: this.config.showRaindrops !== false,
      windEffects: this.config.showWindEffects !== false
    };
  }

  /**
   * Wind speed in m/s for the wind animation; legacy providers without a unit report m/s
   */
  private getWindSpeedMs(weather: ReturnType<typeof getWeatherData>): number | null {
    if (weather.windSpeed == null || !this.hass) return null;
    const attrs = getWeatherAttributes(this.hass, this.config.entity);
    const unit = weather.windSpeedUnit ?? (typeof attrs.wind_speed_unit === 'string' ? attrs.wind_speed_unit : 'm/s');
    return convertSpeedUnit(weather.windSpeed, unit, 'm/s');
  }

  private precipitationOutlookText(weather: ReturnType<typeof getWeatherData>): string | null {
    if (!this.config.showPrecipitationOutlook) return null;

    const hourly = this.forecastService.getHourlyData();
    const outlook = getPrecipitationOutlook(weather.condition, hourly.length > 0 ? hourly : weather.forecast, this._testNow ?? new Date());
    if (!outlook) return null;

    const time = outlook.time
      ? formatTime(outlook.time, this.config.clockFormat ?? '24h', i18n.t('am'), i18n.t('pm'))
      : '';
    const template = i18n.t(`precipitation_outlook.${outlook.type === 'start' && !outlook.time ? 'soon' : outlook.type}`);
    const text = template
      .replace('{kind}', i18n.t(`precipitation_outlook.${outlook.kind}`))
      .replace('{time}', time)
      .replace('{hours}', String(outlook.hours))
      .trim();
    return text || null;
  }

  private renderPrecipitationOutlook(weather: ReturnType<typeof getWeatherData>): TemplateResult | typeof nothing {
    const text = this.precipitationOutlookText(weather);
    if (!text) return nothing;

    return html`
      <div class="precipitation-outlook">
        <span class="info-icon">${getSVGIcon('precipitation')}</span>
        <span>${text}</span>
      </div>
    `;
  }

  private getForecastPopup(weather: ReturnType<typeof getWeatherData>): ForecastPopup | null {
    if (!this.config.showForecastDescription) return null;
    const summaryEntity = this.config.sensorEntities?.forecastDescription ?? null;
    const detailEntity = this.config.sensorEntities?.forecastDescriptionDetail ?? null;
    const popup = resolveForecastPopup({
      summaryText: readTextSensor(this.hass, summaryEntity),
      summaryEntity,
      detailText: readTextSensor(this.hass, detailEntity),
      detailEntity,
      providerText: this.forecastService.getForecastDescription(weather, this._testNow ?? new Date())
    });
    return popup.detail ? popup : null;
  }

  private stopCardPointer(event: Event): void {
    event.stopPropagation();
  }

  private openForecastDialog(event: Event): void {
    event.stopPropagation();
    this.focusForecastClose = true;
    this.forecastDialogOpen = true;
  }

  private closeForecastDialog(event: Event): void {
    event.stopPropagation();
    this.forecastDialogOpen = false;
  }

  private onForecastDialogKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    this.forecastDialogOpen = false;
  }

  private onForecastDialogBackdropClick(event: Event): void {
    if (event.target !== event.currentTarget) return;
    this.forecastDialogOpen = false;
  }

  private renderForecastDescription(popup: ForecastPopup): TemplateResult {
    return html`
      <div class="forecast-extra">
        ${popup.summary ? html`<div class="forecast-description" title=${popup.summary}>${popup.summary}</div>` : ''}
        <button
          type="button"
          class="forecast-more"
          aria-haspopup="dialog"
          aria-expanded=${String(this.forecastDialogOpen)}
          @click=${this.openForecastDialog}
          @pointerdown=${this.stopCardPointer}
          @pointerup=${this.stopCardPointer}
        >
          ${i18n.t('forecast_more')}<span class="forecast-more-mark" aria-hidden="true"> ›</span>
        </button>
      </div>
    `;
  }

  private renderForecastDialog(popup: ForecastPopup): TemplateResult {
    return html`
      <div
        class="forecast-dialog"
        @click=${this.onForecastDialogBackdropClick}
        @keydown=${this.onForecastDialogKeydown}
      >
        <div
          class="forecast-dialog-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forecast-dialog-title"
          @pointerdown=${this.stopCardPointer}
        >
          <div class="forecast-dialog-header">
            <div class="forecast-dialog-heading">
              <h2 id="forecast-dialog-title" class="forecast-dialog-title">${i18n.t('forecast_detail_title')}</h2>
              ${popup.source ? html`<div class="forecast-dialog-source">${popup.source}</div>` : ''}
            </div>
            <button
              type="button"
              class="forecast-dialog-close"
              aria-label=${i18n.t('forecast_detail_close')}
              @click=${this.closeForecastDialog}
            >×</button>
          </div>
          <div class="forecast-dialog-body">${popup.detail}</div>
        </div>
      </div>
    `;
  }

  private getDetailsConfig(): DetailsConfig {
    return {
      showHumidity: this.config.showHumidity ?? true,
      showPressure: this.config.showPressure ?? false,
      showUvIndex: this.config.showUvIndex ?? false,
      showDewPoint: this.config.showDewPoint ?? false,
      showWind: this.config.showWind ?? true,
      showWindGust: this.config.showWindGust ?? true,
      showWindDirection: this.config.showWindDirection ?? true,
      showSunriseSunset: this.config.showSunriseSunset ?? true,
      clockFormat: this.config.clockFormat ?? '24h',
      windSpeedUnit: this.config.windSpeedUnit ?? DEFAULT_CONFIG.windSpeedUnit
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
      name: config.name,
      height: config.height || DEFAULT_CONFIG.height,
      showFeelsLike: config.show_feels_like !== false,
      showWind: config.show_wind !== false,
      showWindGust: config.show_wind_gust !== false,
      showWindDirection: config.show_wind_direction !== false,
      showHumidity: config.show_humidity !== false,
      showPressure: config.show_pressure === true,
      showUvIndex: config.show_uv_index === true,
      showDewPoint: config.show_dew_point === true,
      showMinTemp: config.show_min_temp !== false,
      showPrecipitationOutlook: config.show_precipitation_outlook === true,
      showAurora: config.show_aurora === true,
      showRaindrops: config.show_raindrops !== false,
      showWindEffects: config.show_wind_effects !== false,
      showTemperatureBars: config.show_temperature_bars === true,
      showForecastDescription: config.show_forecast_description === true,
      styles: typeof config.styles === 'string' ? config.styles : null,
      showForecastWind: config.show_forecast_wind === true,
      showForecast: config.show_forecast === true,
      showHourlyForecast: showHourlyForecast === true,
      showDailyForecast: config.show_daily_forecast === true,
      hourlyForecastHours: config.hourly_forecast_hours ?? DEFAULT_CONFIG.hourlyForecastHours,
      hourlyForecastStep: config.hourly_forecast_step ?? DEFAULT_CONFIG.hourlyForecastStep,
      hourlyForecastChart: config.hourly_forecast_chart === true,
      dailyForecastDays: config.daily_forecast_days ?? DEFAULT_CONFIG.dailyForecastDays,
      dailyForecastLabel: DAILY_FORECAST_LABEL_SETTINGS.includes(config.daily_forecast_label as DailyForecastLabel)
        ? config.daily_forecast_label as DailyForecastLabel
        : DEFAULT_CONFIG.dailyForecastLabel,
      hourlyForecastTitle: config.hourly_forecast_title ?? DEFAULT_CONFIG.hourlyForecastTitle,
      dailyForecastTitle: config.daily_forecast_title ?? DEFAULT_CONFIG.dailyForecastTitle,
      showSunriseSunset: config.show_sunrise_sunset !== false,
      showClock: config.show_clock === true,
      showClockSeconds: config.show_clock_seconds === true,
      showDate: config.show_date === true,
      clockPosition: config.clock_position || DEFAULT_CONFIG.clockPosition,
      clockFormat: config.clock_format || DEFAULT_CONFIG.clockFormat,
      clockSize: config.clock_size && config.clock_size in CLOCK_SCALE ? config.clock_size : DEFAULT_CONFIG.clockSize,
      clockWeight: config.clock_weight && config.clock_weight in CLOCK_WEIGHT ? config.clock_weight : DEFAULT_CONFIG.clockWeight,
      overlayOpacity: config.overlay_opacity !== undefined ? config.overlay_opacity : DEFAULT_CONFIG.overlayOpacity,
      textShadow: config.text_shadow !== undefined ? config.text_shadow : DEFAULT_CONFIG.textShadow,
      borderRadius: config.border_radius ?? DEFAULT_CONFIG.borderRadius,
      sunPositionX: config.sun_position_x ?? DEFAULT_CONFIG.sunPositionX,
      sunPositionY: config.sun_position_y ?? DEFAULT_CONFIG.sunPositionY,
      textColor: config.text_color?.trim() || DEFAULT_CONFIG.textColor,
      language: config.language || DEFAULT_CONFIG.language,
      windSpeedUnit: WIND_UNIT_SETTINGS.includes(config.wind_speed_unit as WindUnitSetting) ? config.wind_speed_unit as WindUnitSetting : DEFAULT_CONFIG.windSpeedUnit,
      showAnimations: config.show_animations !== false,
      layout: config.layout || DEFAULT_CONFIG.layout,
      visualStyle: config.visual_style === 'classic' ? 'classic' : 'modern',
      animationQuality: config.animation_quality === 'medium' || config.animation_quality === 'low' ? config.animation_quality : DEFAULT_CONFIG.animationQuality,
      sunriseEntity: config.sunrise_entity || null,
      sunsetEntity: config.sunset_entity || null,
      templowAttribute: config.templow_attribute || null,
      sensorEntities: {
        temperature: config.temperature_entity || null,
        feelsLike: config.feels_like_entity || null,
        humidity: config.humidity_entity || null,
        windSpeed: config.wind_speed_entity || null,
        windGust: config.wind_gust_entity || null,
        windBearing: config.wind_bearing_entity || null,
        precipitation: config.precipitation_entity || null,
        pressure: config.pressure_entity || null,
        uvIndex: config.uv_index_entity || null,
        dewPoint: config.dew_point_entity || null,
        aqi: config.aqi_entity || null,
        forecastDescription: config.forecast_description_entity || null,
        forecastDescriptionDetail: config.forecast_description_detail_entity || null
      },
      tapAction: config.tap_action || { action: 'more-info' },
      holdAction: config.hold_action || { action: 'none' },
      doubleTapAction: config.double_tap_action || { action: 'none' }
    };

    if (this.config.language) {
      i18n.setLanguage(this.config.language);
    }
    // Object config is attribute:false; ensure config-only changes (e.g. daily_forecast_label) re-render
    this.requestUpdate();
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
      this.forecastService.getHourlyData(),
      this.forecastService.getDailyData()
    );
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(
      weatherState,
      this.config.sunriseEntity,
      this.config.sunsetEntity,
      this.hass
    ) as SunData;

    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const cardClasses = `weather-card ${timeOfDay.type}${this.config.visualStyle === 'classic' ? ' classic' : ''}`;

    const isMinimal = this.config.layout === 'minimal';
    const defaultHeight = isMinimal ? '56px' : '200px';
    const minHeight = this.config.height ? `${this.config.height}px` : defaultHeight;

    const isClassic = this.config.visualStyle === 'classic';
    let skyStyle: string;
    if (isClassic) {
      // Original look: time-of-day gradients from the stylesheet, computed ones during sunrise/sunset
      const bgGradient: BackgroundGradient | null = getBackgroundGradient(timeOfDay);
      skyStyle = bgGradient
        ? `background: linear-gradient(135deg, rgb(${bgGradient.start.r}, ${bgGradient.start.g}, ${bgGradient.start.b}), rgb(${bgGradient.end.r}, ${bgGradient.end.g}, ${bgGradient.end.b}));`
        : '';
    } else {
      const sky = getSkyColors(weather.condition, timeOfDay);
      skyStyle = `--dwc-sky-top: ${rgb(sky.top)}; --dwc-sky-bottom: ${rgb(sky.bottom)};`;
    }

    const overlayOpacity = this.config.overlayOpacity !== undefined
      ? this.config.overlayOpacity
      : DEFAULT_CONFIG.overlayOpacity;
    const overlayStyle = `--overlay-opacity: ${overlayOpacity};`;

    const shadowStrength = this.config.textShadow ?? DEFAULT_CONFIG.textShadow;
    const shadowLayers = [[1, 2, 0.4], [2, 6, 0.3], [4, 12, 0.2]] as const;
    const shadowColor = (alpha: number): string => `rgba(0,0,0,${Math.min(1, alpha * shadowStrength).toFixed(2)})`;
    const textShadowValue = shadowStrength === 0
      ? 'none'
      : shadowLayers.map(([y, blur, alpha]) => `0 ${y}px ${blur}px ${shadowColor(alpha)}`).join(', ');
    // Icons get the text's layers so both darken alike. drop-shadow's blur is a standard deviation
    // (half of text-shadow's), and chained drop-shadows also shade each other, hence the lighter alpha.
    const iconFilterValue = shadowStrength === 0
      ? 'none'
      : shadowLayers.map(([y, blur, alpha]) => `drop-shadow(0 ${y}px ${blur / 2}px ${shadowColor(alpha * 0.7)})`).join(' ');
    const shadowStyle = `--card-text-shadow: ${textShadowValue}; --card-icon-filter: ${iconFilterValue};`;

    const hourlyForecast = this.config.showHourlyForecast
      ? this.forecastService.getHourlyForecast(
        this.config.hourlyForecastHours ?? DEFAULT_CONFIG.hourlyForecastHours,
        weather,
        this.config.hourlyForecastStep ?? DEFAULT_CONFIG.hourlyForecastStep
      )
      : [];

    const dailyForecast = this.config.showDailyForecast
      ? this.forecastService.getDailyForecast(
        this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays,
        weather
      )
      : [];

    const clockStyle = `--dwc-clock-scale: ${CLOCK_SCALE[this.config.clockSize ?? DEFAULT_CONFIG.clockSize]}; `
      + `--dwc-clock-weight: ${CLOCK_WEIGHT[this.config.clockWeight ?? DEFAULT_CONFIG.clockWeight]}; `
      + `--dwc-date-weight: ${this.config.clockWeight === 'bold' ? 600 : 400};`;

    const cardStyle = `min-height: ${minHeight}; ${skyStyle} ${overlayStyle} ${shadowStyle} ${clockStyle} cursor: pointer;`;
    const borderRadius = this.config.borderRadius;
    // Accept only values the browser parses as a color, so the option can't inject other declarations
    const textColor = this.config.textColor && CSS.supports('color', this.config.textColor)
      ? this.config.textColor
      : null;
    const haCardStyle = [
      typeof borderRadius === 'number' && borderRadius >= 0 ? `--dwc-border-radius: ${borderRadius}px;` : '',
      textColor ? `--dwc-text-color: ${textColor};` : ''
    ].join(' ');
    const hass = this.hass;
    const forecastPopup = isMinimal ? null : this.getForecastPopup(weather);

    return html`
      <ha-card
        style="${haCardStyle}"
        @click=${(e: MouseEvent) => this.actionHandler.handleTap(e)}
        @pointerdown=${(e: PointerEvent) => this.actionHandler.handlePointerDown(e)}
        @pointerup=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
        @pointercancel=${(e: PointerEvent) => this.actionHandler.handlePointerUp(e)}
      >
        ${isMinimal ? this.renderMinimal(weather, sunData, hass, cardClasses, cardStyle) : this.renderDefault(weather, sunData, hourlyForecast, dailyForecast, hass, cardClasses, cardStyle, forecastPopup)}
      </ha-card>
      ${forecastPopup && this.forecastDialogOpen ? this.renderForecastDialog(forecastPopup) : ''}
    `;
  }

  private renderDefault(
    weather: ReturnType<typeof getWeatherData>,
    sunData: SunData,
    hourlyForecast: import('../types.js').WeatherForecast[],
    dailyForecast: import('../types.js').WeatherForecast[],
    hass: HomeAssistant,
    cardClasses: string,
    cardStyle: string,
    forecastPopup: ForecastPopup | null
  ): TemplateResult {
    const windOptions = this.getForecastWindOptions(hass, weather);
    const precipitationUnit = getWeatherAttributes(hass, this.config.entity).precipitation_unit;
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
              ${this.renderPrecipitationOutlook(weather)}
            </div>
            <weather-clock
              .userStyles=${this.config.styles ?? null}
              .format=${this.config.showClock && this.config.clockPosition === 'top' ? this.config.clockFormat : null}
              .showSeconds=${this.config.showClockSeconds === true}
              .showDate=${!!this.config.showDate && this.config.clockPosition === 'top'}
              .lang=${i18n.lang}
            ></weather-clock>
          </div>
          <div class="details ${(this.config.showClock || this.config.showDate) && this.config.clockPosition === 'details' ? 'details--clock' : ''}">
            <weather-details
              .userStyles=${this.config.styles ?? null}
              .weather=${weather}
              .sunData=${sunData}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${getWeatherAttributes(hass, this.config.entity)}
            ></weather-details>
            <weather-clock
              .userStyles=${this.config.styles ?? null}
              .format=${this.config.showClock && this.config.clockPosition === 'details' ? this.config.clockFormat : null}
              .showSeconds=${this.config.showClockSeconds === true}
              .showDate=${!!this.config.showDate && this.config.clockPosition === 'details'}
              .lang=${i18n.lang}
            ></weather-clock>
          </div>
          ${forecastPopup ? this.renderForecastDescription(forecastPopup) : ''}
          <hourly-forecast
            .userStyles=${this.config.styles ?? null}
            .forecast=${hourlyForecast}
            .wind=${windOptions}
            .chart=${this.config.hourlyForecastChart === true}
            .temperatureUnit=${getWeatherAttributes(hass, this.config.entity).temperature_unit ?? hass.config?.unit_system?.temperature ?? '°C'}
            .lang=${i18n.lang}
            .clockFormat=${this.config.clockFormat ?? '24h'}
            .forecastTitle=${this.config.hourlyForecastTitle ?? null}
          ></hourly-forecast>
          <daily-forecast
            .userStyles=${this.config.styles ?? null}
            .forecast=${dailyForecast}
            .wind=${windOptions}
            .lang=${i18n.lang}
            .labelFormat=${this.config.dailyForecastLabel ?? DEFAULT_CONFIG.dailyForecastLabel}
            .forecastTitle=${this.config.dailyForecastTitle ?? null}
            .showBars=${this.config.showTemperatureBars === true}
            .currentTemperature=${weather.temperature}
            .temperatureUnit=${getWeatherAttributes(hass, this.config.entity).temperature_unit ?? hass.config?.unit_system?.temperature ?? '°C'}
            .precipitationUnit=${typeof precipitationUnit === 'string' ? precipitationUnit : null}
          ></daily-forecast>
        </div>
      </div>
    `;
  }

  // Wind in the forecasts: forecast values come in the weather entity's unit and are shown in the same unit
  // as the current wind (a wind speed sensor's unit with 'auto'), so the card never mixes units
  private getForecastWindOptions(hass: HomeAssistant, weather: ReturnType<typeof getWeatherData>): ForecastWindOptions | null {
    if (!this.config.showForecastWind) {
      this.forecastWindOptions = null;
      return null;
    }
    const entityUnit = getWeatherAttributes(hass, this.config.entity).wind_speed_unit;
    const fromUnit = typeof entityUnit === 'string' && entityUnit ? entityUnit : 'm/s';
    const toUnit = windDisplayUnit(weather.windSpeedUnit ?? fromUnit, this.config.windSpeedUnit ?? DEFAULT_CONFIG.windSpeedUnit);
    const unit = windUnitLabel(toUnit, i18n.t.bind(i18n));
    const prev = this.forecastWindOptions;
    if (prev && prev.fromUnit === fromUnit && prev.toUnit === toUnit && prev.unit === unit) return prev;
    this.forecastWindOptions = { fromUnit, toUnit, unit };
    return this.forecastWindOptions;
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
    const templow = this.config.showMinTemp && templowStr
      ? html`<span class="mini-temp-low">${templowStr}</span>`
      : '';
    const feelsLike = this.config.showFeelsLike && weather.apparentTemperature != null
      ? html`<div class="feels-like">${i18n.t('feels_like')} ${Math.round(weather.apparentTemperature)}°</div>`
      : nothing;
    const outlook = this.renderPrecipitationOutlook(weather);
    // Omit the block entirely when both lines are off or have nothing to say
    const notes = feelsLike !== nothing || outlook !== nothing
      ? html`<div class="mini-notes">${feelsLike}${outlook}</div>`
      : nothing;

    // Reading order is the left column first (temperature, condition, details,
    // feels-like, precipitation outlook), then the clock.
    // The clock is placed on the right in CSS so it stays last here without looking secondary.
    return html`
      <div class="${cardClasses} layout--minimal" style="${cardStyle}">
        ${this.config.showAnimations !== false ? html`<div class="canvas-container"></div>` : ''}
        <div class="content">
          <div class="mini-primary">
            <div class="mini-temp">${tempStr}</div>
            <div class="mini-condition">${i18n.t(weather.condition)}${templow}</div>
          </div>
          <div class="mini-details">
            <weather-details
              .userStyles=${this.config.styles ?? null}
              .weather=${weather}
              .sunData=${sunData}
              .config=${this.getDetailsConfig()}
              .entityAttributes=${getWeatherAttributes(hass, this.config.entity)}
              .compact=${true}
            ></weather-details>
            ${notes}
          </div>
          ${this.config.showClock || this.config.showDate ? html`
            <weather-clock
              .userStyles=${this.config.styles ?? null}
              .format=${this.config.showClock ? this.config.clockFormat : null}
              .showSeconds=${this.config.showClockSeconds === true}
              .showDate=${!!this.config.showDate}
              .lang=${i18n.lang}
              .compact=${true}
            ></weather-clock>
          ` : ''}
        </div>
      </div>
    `;
  }
}
