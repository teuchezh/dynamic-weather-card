import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { DEFAULT_CONFIG, TEMPLOW_ATTRIBUTES } from '../constants.js';
import { i18n } from '../internationalization/index.js';
import { resolveLanguage } from '../internationalization/resolveLanguage.js';
import {
  getBackgroundGradient,
  getSunriseSunsetData,
  getTimeOfDayWithSunData
} from '../utils.js';
import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import { cardStyles } from './styles.js';
import './clock.js';
import './details.js';
import './hourly-forecast.js';
import './daily-forecast.js';
import type {
  HomeAssistant,
  HassEntity,
  TimeOfDay,
  WeatherForecast,
  BackgroundGradient,
  WeatherEntityAttributes,
  ForecastEvent,
  WeatherData,
  ActionConfig,
  SunData,
  ConfigInput,
  WeatherCardConfigInternal,
  DetailsConfig
} from '../types.js';

interface Animations {
  sunny: SunnyAnimation;
  rainy: RainyAnimation;
  snowy: SnowyAnimation;
  cloudy: CloudyAnimation;
  foggy: FoggyAnimation;
  hail: HailAnimation;
  thunderstorm: ThunderstormAnimation;
}

export class AnimatedWeatherCard extends LitElement {
  @property({ type: Object }) hass?: HomeAssistant;
  @property({ type: Object }) config!: WeatherCardConfigInternal;
  @state() private hourlyForecast: WeatherForecast[] = [];
  @state() private dailyForecast: WeatherForecast[] = [];

  private animationFrame: number | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private animations: Partial<Animations> = {};
  private holdTimer: number | null = null;
  private readonly holdDelay: number = 500;
  private resizeObserver: ResizeObserver | null = null;
  private lastTap: number | null = null;
  private holdFired: boolean = false;
  private hourlyForecastSubscription: Promise<(() => void)> | null = null;
  private dailyForecastSubscription: Promise<(() => void)> | null = null;
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
    this.unsubscribeForecastUpdates();
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      if (this.canvas && this.ctx) {
        this.resizeCanvas();
      }

      // Subscribe to forecast updates when hass or config changes
      if (this.hass && this.config.entity) {
        this.subscribeForecastUpdates();
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
      forecast: attrs.forecast || attrs.forecast_hourly || this.hourlyForecast || [],
      friendlyName: attrs.friendly_name || i18n.t('weather'),
      templow: templow
    };
  }

  /**
   * Subscribe to forecast updates using weather/subscribe_forecast
   * Used by integrations like DWD, Met.no, etc.
   */
  private async subscribeForecastUpdates(): Promise<void> {
    if (!this.hass || !this.config.entity) {
      return;
    }

    // Unsubscribe from previous subscriptions
    this.unsubscribeForecastUpdates();

    try {
      // Subscribe to hourly forecast updates
      this.hourlyForecastSubscription = this.hass.connection.subscribeMessage<ForecastEvent>(
        (event: ForecastEvent) => {
          if (event.forecast && event.forecast.length > 0) {
            this.hourlyForecast = event.forecast;
          }
        },
        {
          type: 'weather/subscribe_forecast',
          forecast_type: 'hourly',
          entity_id: this.config.entity
        }
      );

      // Subscribe to daily forecast updates if needed
      if (this.config.showDailyForecast) {
        this.dailyForecastSubscription = this.hass.connection.subscribeMessage<ForecastEvent>(
          (event: ForecastEvent) => {
            if (event.forecast && event.forecast.length > 0) {
              this.dailyForecast = event.forecast;
            }
          },
          {
            type: 'weather/subscribe_forecast',
            forecast_type: 'daily',
            entity_id: this.config.entity
          }
        );
      }
    } catch {
      // Silently fail - old integrations don't support this API
      // They will use forecast from attributes instead
    }
  }

  /**
   * Unsubscribe from forecast updates
   */
  private async unsubscribeForecastUpdates(): Promise<void> {
    if (this.hourlyForecastSubscription) {
      try {
        const unsubscribe = await this.hourlyForecastSubscription;
        unsubscribe();
      } catch {
        // Ignore unsubscribe errors
      }
      this.hourlyForecastSubscription = null;
    }

    if (this.dailyForecastSubscription) {
      try {
        const unsubscribe = await this.dailyForecastSubscription;
        unsubscribe();
      } catch {
        // Ignore unsubscribe errors
      }
      this.dailyForecastSubscription = null;
    }
  }

  private getTodayForecast(): WeatherForecast[] {
    if (!this.hass || !this.config) return [];

    const hours = Math.max(
      1,
      Math.floor(Number(this.config.hourlyForecastHours ?? DEFAULT_CONFIG.hourlyForecastHours))
    );

    // If we have hourly forecast from new API, use it directly
    if (this.hourlyForecast && this.hourlyForecast.length > 0) {
      return this.hourlyForecast.slice(0, hours);
    }

    // Otherwise fall back to attributes forecast
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
      .slice(0, hours);
  }

  private getWeekForecast(): WeatherForecast[] {
    if (!this.hass || !this.config) return [];

    // If we have daily forecast from new API, use it directly
    if (this.dailyForecast && this.dailyForecast.length > 0) {
      const days = Math.max(
        1,
        Math.floor(Number(this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays))
      );
      return this.dailyForecast.slice(0, days);
    }

    // Otherwise fall back to processing hourly forecast
    const weather = this.getWeatherData();
    if (!weather.forecast || weather.forecast.length === 0) return [];

    const days = Math.max(
      1,
      Math.floor(Number(this.config.dailyForecastDays ?? DEFAULT_CONFIG.dailyForecastDays))
    );
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const end = new Date(start);
    end.setDate(end.getDate() + days);

    const toDayKey = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const dayBuckets = new Map<string, { item: WeatherForecast; itemDate: Date; hourScore: number }>();

    weather.forecast.forEach(item => {
      if (!item.datetime) return;
      const itemDate = new Date(item.datetime);
      if (Number.isNaN(itemDate.getTime())) return;
      if (itemDate < start || itemDate >= end) return;

      const key = toDayKey(itemDate);
      const hourScore = Math.abs((itemDate.getHours() + itemDate.getMinutes() / 60) - 12);
      const existing = dayBuckets.get(key);

      if (!existing || hourScore < existing.hourScore) {
        dayBuckets.set(key, { item, itemDate, hourScore });
      }
    });

    return Array.from(dayBuckets.values())
      .sort((a, b) => a.itemDate.getTime() - b.itemDate.getTime())
      .map(entry => entry.item)
      .slice(0, days);
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
                .entityAttributes=${this.getAttributes(this.config.entity)}
              ></weather-details>
              <weather-clock
                .format=${this.config.showClock && this.config.clockPosition === 'details' ? this.config.clockFormat : null}
              ></weather-clock>
            </div>
            <hourly-forecast
              .forecast=${this.config.showHourlyForecast ? this.getTodayForecast() : []}
            ></hourly-forecast>
            <daily-forecast
              .forecast=${this.config.showDailyForecast ? this.getWeekForecast() : []}
              .lang=${i18n.lang}
            ></daily-forecast>
          </div>
        </div>
      </ha-card>
    `;
  }
}
