import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_CONFIG, TEMPLOW_ATTRIBUTES } from '../constants.js';
import { i18n } from '../internalization/index';
import { resolveLanguage } from '../internalization/resolveLanguage';
import {
  getBackgroundGradient,
  formatForecastTime,
  getSunriseSunsetData,
  getTimeOfDayWithSunData,
  formatTime
} from '../utils.js';
import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import { cardStyles } from './styles.js';
import { getSVGIcon, getWeatherConditionIcon, windDirection } from '../icons/svg-icons.js';
import type {
  HomeAssistant,
  HassEntity,
  WeatherCardConfig,
  TimeOfDay,
  WeatherForecast,
  BackgroundGradient,
  WeatherEntityAttributes
} from '../types';

interface ForecastItemExtended extends WeatherForecast {
  temp?: number;
  native_temperature?: number;
}

interface WeatherCardConfigInternal extends WeatherCardConfig {
  name?: string;
  icons_path?: string;
  sunriseEntity?: string | null;
  sunsetEntity?: string | null;
  templowAttribute?: string | null;
  tapAction?: ActionConfig;
  holdAction?: ActionConfig;
  doubleTapAction?: ActionConfig;
}

interface ActionConfig {
  action: 'more-info' | 'toggle' | 'call-service' | 'navigate' | 'url' | 'none';
  entity?: string;
  service?: string;
  service_data?: Record<string, unknown>;
  navigation_path?: string;
  url_path?: string;
}

interface ConfigInput {
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
  show_sunrise_sunset?: boolean;
  show_clock?: boolean;
  overlay_opacity?: number;
  language?: 'auto' | 'en' | 'ru' | 'de' | 'nl' | 'fr';
  wind_speed_unit?: 'ms' | 'kmh';
  sunrise_entity?: string;
  sunset_entity?: string;
  templow_attribute?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

interface WeatherData {
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

interface Animations {
  sunny: SunnyAnimation;
  rainy: RainyAnimation;
  snowy: SnowyAnimation;
  cloudy: CloudyAnimation;
  foggy: FoggyAnimation;
  hail: HailAnimation;
  thunderstorm: ThunderstormAnimation;
}

interface SunData {
  sunrise: Date | null;
  sunset: Date | null;
  hasSunData: boolean;
}

export class AnimatedWeatherCard extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) config!: WeatherCardConfigInternal;
  @state() private currentTime: string = '';

  private animationFrame: number | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private animations: Partial<Animations> = {};
  private holdTimer: number | null = null;
  private readonly holdDelay: number = 500;
  private clockInterval: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private _wheelHandler: EventListener | null = null;
  private lastTap: number | null = null;
  private holdFired: boolean = false;
  _testTimeOfDay?: TimeOfDay;

  static get styles() {
    return cardStyles;
  }

  constructor() {
    super();
    this.config = {} as WeatherCardConfigInternal;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete.then(() => {
      setTimeout(() => {
        this.setupCanvas();
        if (this.canvas && this.ctx) {
          this.initializeAnimations();
          this.startAnimation();
          this.setupResizeObserver();
        }
        this.setupForecastScroll();
        this.startClock();
      }, 100);
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this._wheelHandler && this.shadowRoot) {
      const forecastScroll = this.shadowRoot.querySelector('.forecast-scroll');
      if (forecastScroll) {
        forecastScroll.removeEventListener('wheel', this._wheelHandler);
      }
      this._wheelHandler = null;
    }
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      if (this.canvas && this.ctx) {
        this.resizeCanvas();
      }
      this.setupForecastScroll();
    }

    const resolvedLang = resolveLanguage({
      configLang: this.config?.language,
      hassLang: this.hass?.language
    });

    if (i18n.lang !== resolvedLang) {
      i18n.setLanguage(resolvedLang);
    }
  }

  private initializeAnimations(): void {
    if (!this.ctx) return;

    this.animations = {
      sunny: new SunnyAnimation(this.ctx),
      rainy: new RainyAnimation(this.ctx),
      snowy: new SnowyAnimation(this.ctx),
      cloudy: new CloudyAnimation(this.ctx),
      foggy: new FoggyAnimation(this.ctx),
      hail: new HailAnimation(this.ctx),
      thunderstorm: new ThunderstormAnimation(this.ctx)
    };
  }

  private setupResizeObserver(): void {
    if (!this.shadowRoot) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(container);
  }

  private setupForecastScroll(): void {
    if (!this.shadowRoot) return;
    const forecastScroll = this.shadowRoot.querySelector('.forecast-scroll');
    if (!forecastScroll) return;

    if (this._wheelHandler) {
      forecastScroll.removeEventListener('wheel', this._wheelHandler as EventListener);
    }

    this._wheelHandler = ((e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (wheelEvent.deltaY !== 0) {
        e.preventDefault();
        (forecastScroll as HTMLElement).scrollLeft += wheelEvent.deltaY;
      }
    }) as EventListener;
    forecastScroll.addEventListener('wheel', this._wheelHandler, { passive: false });
  }

  private resizeCanvas(): void {
    if (!this.canvas || !this.shadowRoot) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 2;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    this.ctx = this.canvas.getContext('2d');
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }

    this.canvasWidth = rect.width;
    this.canvasHeight = rect.height;

    this.initializeAnimations();
  }

  private setupCanvas(): void {
    if (!this.shadowRoot) return;
    const container = this.shadowRoot.querySelector('.canvas-container');
    if (!container) return;

    const oldCanvas = container.querySelector('canvas');
    if (oldCanvas) {
      oldCanvas.remove();
    }

    this.canvas = document.createElement('canvas');
    container.appendChild(this.canvas);
    this.resizeCanvas();
  }

  private getState(entityId: string): string | null {
    if (!this.hass || !entityId) return null;
    const entity = this.hass.states[entityId];
    return entity ? entity.state : null;
  }

  private getAttributes(entityId: string): WeatherEntityAttributes {
    if (!this.hass || !entityId) return {} as WeatherEntityAttributes;
    const entity = this.hass.states[entityId];
    return entity ? entity.attributes : {} as WeatherEntityAttributes;
  }

  private getWeatherData(): WeatherData {
    const entityId = this.config.entity || 'weather.home';
    const state = this.getState(entityId);
    const attrs = this.getAttributes(entityId);

    const condition = attrs.condition || state || 'sunny';

    let templow: number | null = null;

    if (this.config.templowAttribute && attrs[this.config.templowAttribute] != null) {
      templow = attrs[this.config.templowAttribute] as number;
    } else {
      for (const attrName of TEMPLOW_ATTRIBUTES) {
        if (attrs[attrName] != null) {
          templow = attrs[attrName] as number;
          break;
        }
      }

      if (templow == null) {
        templow = (attrs.forecast && attrs.forecast[0] ? attrs.forecast[0].templow ?? null : null)
          || (attrs.forecast_hourly && attrs.forecast_hourly[0] ? attrs.forecast_hourly[0].native_templow ?? null : null);
      }
    }

    return {
      condition: condition,
      temperature: attrs.temperature != null ? attrs.temperature : null,
      apparentTemperature: attrs.apparent_temperature || null,
      humidity: attrs.humidity != null ? attrs.humidity : null,
      windSpeed: attrs.wind_speed != null ? attrs.wind_speed : null,
      windGust: attrs.wind_gust_speed || attrs.wind_gust || null,
      windBearing: attrs.wind_bearing != null ? attrs.wind_bearing : null,
      windDirection: attrs.wind_direction || null,
      pressure: attrs.pressure || null,
      forecast: attrs.forecast || attrs.forecast_hourly || [],
      friendlyName: attrs.friendly_name || i18n.t('weather'),
      templow: templow
    };
  }

  private getTodayForecast(): WeatherForecast[] {
    if (!this.hass || !this.config) return [];
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0) return [];

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayForecast = weather.forecast.filter(item => {
      if (!item.datetime) return false;
      const itemDate = new Date(item.datetime);
      const itemDay = new Date(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate());
      return itemDay.getTime() === today.getTime() ||
        (itemDay.getTime() === tomorrow.getTime() && itemDate.getHours() <= now.getHours());
    });

    return todayForecast
      .sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
      .slice(0, 8);
  }

  private startAnimation(): void {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  private draw(): void {
    if (!this.ctx || !this.canvas) return;
    if (!this.canvasWidth || !this.canvasHeight) {
      this.resizeCanvas();
      if (!this.canvasWidth || !this.canvasHeight) return;
    }

    const width = this.canvasWidth;
    const height = this.canvasHeight;

    this.ctx.clearRect(0, 0, width, height);

    const weather = this.getWeatherData();
    const weatherState = this.hass?.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState || {} as HassEntity, this.config.sunriseEntity, this.config.sunsetEntity, this.hass);

    const timeOfDay = this._testTimeOfDay || getTimeOfDayWithSunData(sunData);
    const condition = weather.condition.toLowerCase();

    switch (condition) {
      case 'sunny':
      case 'clear':
        this.animations.sunny?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'clear-night':
        this.animations.sunny?.draw(Date.now(), width, height, { type: 'night', progress: 0 });
        break;
      case 'rainy':
      case 'rain':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case 'pouring':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case 'snowy':
      case 'snow':
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'snowy-rainy':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'hail':
        this.animations.hail?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'foggy':
      case 'fog':
        this.animations.foggy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'lightning':
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case 'lightning-rainy':
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case 'cloudy':
      case 'partlycloudy':
      default:
        this.animations.cloudy?.draw(Date.now(), width, height, timeOfDay);
        break;
    }
  }

  private renderTodayForecast(): TemplateResult {
    const forecast = this.getTodayForecast();
    if (forecast.length === 0) {
      return html`<div style="opacity: 0.6; font-size: 14px;">${i18n.t('forecast_unavailable')}</div>`;
    }

    return html`
      <div class="forecast-scroll">
        ${forecast.map(item => html`
          <div class="forecast-item">
            <div class="forecast-time">${formatForecastTime(item.datetime)}</div>
            <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
            <div class="forecast-temp">${Math.round(item.temperature || (item as ForecastItemExtended).temp || (item as ForecastItemExtended).native_temperature || 0)}°</div>
          </div>
        `)}
      </div>
    `;
  }

  private convertWindSpeed(speed: number | null): number | null {
    if (speed == null) return null;
    if (this.config.windSpeedUnit === 'kmh') {
      return Math.round(speed * 3.6 * 10) / 10;
    }
    return speed;
  }

  private getWindSpeedUnit(): string {
    return this.config.windSpeedUnit === 'kmh' ? i18n.t('wind_unit_kmh') : i18n.t('wind_unit_ms');
  }

  private formatCurrentTime(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private startClock(): void {
    if (!this.config.showClock) return;

    this.currentTime = this.formatCurrentTime();

    this.clockInterval = window.setInterval(() => {
      this.currentTime = this.formatCurrentTime();
    }, 1000);
  }

  render(): TemplateResult {
    if (!this.hass) {
      return html`<div>No Home Assistant connection</div>`;
    }

    const weather = this.getWeatherData();
    const weatherState = this.hass.states[this.config.entity];
    const sunData = getSunriseSunsetData(weatherState, this.config.sunriseEntity, this.config.sunsetEntity, this.hass) as SunData;

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

    return html`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${cardClasses}" style="min-height: ${minHeight}; ${bgStyle}; ${overlayStyle} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name !== undefined ? html`
              <div class="header">
                <div class="location">${this.config.name || weather.friendlyName}</div>
              </div>
            ` : ''}
            <div>
<div class="condition">${i18n.t(weather.condition)}</div>
              <div class="temperature">${weather.temperature != null ? Math.round(weather.temperature) + '°' : i18n.t('no_data')}</div>
              ${this.config.showMinTemp && weather.templow ? html`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(weather.templow)}°</span>
                </div>
              ` : ''}
              ${this.config.showFeelsLike && weather.apparentTemperature ? html`
<div class="feels-like">${i18n.t('feels_like')} ${Math.round(weather.apparentTemperature)}°</div>
              ` : ''}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity && weather.humidity != null ? html`
                  <div class="info-item">
                    <span class="info-icon">${getSVGIcon('humidity')}</span>
                    <span>${weather.humidity} %</span>
                  </div>
                ` : ''}
                ${this.config.showSunriseSunset && sunData.hasSunData && sunData.sunrise ? html`
                  <div class="info-item">
                    <span class="info-icon">${getSVGIcon('sunrise')}</span>
                    <span>${formatTime(sunData.sunrise)}</span>
                  </div>
                ` : ''}
                ${this.config.showWind && weather.windSpeed != null ? html`
                  ${this.config.showWindDirection && weather.windBearing != null ? html`
                    <div class="info-item">
                      <span class="info-icon">${windDirection(weather.windBearing)}</span>
                      <span>${this.convertWindSpeed(weather.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust && weather.windGust ? ` / ${this.convertWindSpeed(weather.windGust)} ${this.getWindSpeedUnit()}` : ''}</span>
                    </div>
                  ` : html`
                    <div class="info-item">
                      <span class="info-icon">${getSVGIcon('wind')}</span>
                      <span>${this.convertWindSpeed(weather.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust && weather.windGust ? ` / ${this.convertWindSpeed(weather.windGust)} ${this.getWindSpeedUnit()}` : ''}</span>
                    </div>
                  `}
                ` : ''}
                ${this.config.showSunriseSunset && sunData.hasSunData && sunData.sunset ? html`
                  <div class="info-item">
                    <span class="info-icon">${getSVGIcon('sunset')}</span>
                    <span>${formatTime(sunData.sunset)}</span>
                  </div>
                ` : ''}
              </div>
            </div>
            ${this.config.showForecast ? html`
              <div class="forecast-container">
<div class="forecast-title">${i18n.t('forecast_title')}</div>
                ${this.renderTodayForecast()}
              </div>
            ` : ''}
          </div>
          ${this.config.showClock ? html`
            <div class="clock">${this.currentTime}</div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  setConfig(config: ConfigInput): void {
    if (!config.entity) {
      throw new Error('Please define a weather entity');
    }
    this.config = {
      type: 'custom:animated-weather-card',
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
      showSunriseSunset: config.show_sunrise_sunset !== false,
      showClock: config.show_clock === true,
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

  private handleAction(actionConfig: ActionConfig | undefined): void {
    if (!actionConfig || !this.hass) return;

    const action = actionConfig.action || 'more-info';

    switch (action) {
      case 'more-info':
        this.fireEvent('hass-more-info', { entityId: actionConfig.entity || this.config.entity });
        break;
      case 'toggle':
        this.hass.callService('homeassistant', 'toggle', {
          entity_id: actionConfig.entity || this.config.entity
        });
        break;
      case 'call-service':
        if (actionConfig.service) {
          const [domain, service] = actionConfig.service.split('.');
          this.hass.callService(domain, service, actionConfig.service_data || {});
        }
        break;
      case 'navigate':
        if (actionConfig.navigation_path) {
          window.history.pushState(null, '', actionConfig.navigation_path);
          this.fireEvent('location-changed', { replace: false });
        }
        break;
      case 'url':
        if (actionConfig.url_path) {
          window.open(actionConfig.url_path);
        }
        break;
      case 'none':
      default:
        break;
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

  private handleTap(e: MouseEvent): void {
    if ((e.target as HTMLElement).closest('.forecast-item') || (e.target as HTMLElement).closest('.info-item')) {
      return;
    }

    if (this.lastTap && (Date.now() - this.lastTap) < 300) {
      this.handleDoubleTap(e);
      this.lastTap = null;
      return;
    }

    this.lastTap = Date.now();

    setTimeout(() => {
      if (this.lastTap) {
        this.handleAction(this.config.tapAction);
        this.lastTap = null;
      }
    }, 300);
  }

  private handlePointerDown(e: PointerEvent): void {
    this.holdTimer = window.setTimeout(() => {
      this.handleHold(e);
      this.holdFired = true;
    }, this.holdDelay);
  }

  private handlePointerUp(e: PointerEvent): void {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
    }
    if (this.holdFired) {
      e.preventDefault();
      e.stopPropagation();
      this.holdFired = false;
    }
  }

  private handleHold(_e: PointerEvent): void {
    this.handleAction(this.config.holdAction);
  }

  private handleDoubleTap(_e: MouseEvent): void {
    this.handleAction(this.config.doubleTapAction);
  }

  getCardSize(): number {
    return 1;
  }
}
