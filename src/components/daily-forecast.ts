import { LitElement, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getWeatherConditionIcon } from '../icons/svg-icons.js';
import { formatForecastDay, setupHorizontalScroll } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import { forecastStyles } from './forecast-styles.js';
import { temperatureColor } from '../temperature-color.js';
import type { WeatherForecast } from '../types.js';

function isToday(datetime: string): boolean {
  const date = new Date(datetime);
  return date.toDateString() === new Date().toDateString();
}

export class DailyForecast extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  // Custom section title: null = default (translated), '' = hidden
  @property({ type: String }) forecastTitle: string | null = null;
  @property({ type: String }) lang: string = 'en';
  // Temperature range bars: each day's low..high on a scale shared by all shown days
  @property({ type: Boolean }) showBars = false;
  // Current temperature, marked on today's bar
  @property({ type: Number }) currentTemperature: number | null = null;
  @property({ type: String }) temperatureUnit: string = '°C';

  static styles = forecastStyles;

  private _cleanup: (() => void) | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete.then(() => {
      this._cleanup = setupHorizontalScroll(this.shadowRoot, '.forecast-scroll');
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._cleanup?.();
    this._cleanup = null;
  }

  private getTemperature(item: WeatherForecast): number {
    return Math.round(item.temperature ?? item.temp ?? item.native_temperature ?? 0);
  }

  private getLowTemperature(item: WeatherForecast): number | null {
    const low = item.templow ?? item.native_templow;
    return low != null ? Math.round(low) : null;
  }

  private getPrecipitationProbability(item: WeatherForecast): number | null {
    const probability = item.precipitation_probability;
    return probability != null && probability > 0 ? Math.round(probability) : null;
  }

  private renderBarItem(item: WeatherForecast, scale: { min: number; max: number }): TemplateResult {
    const high = this.getTemperature(item);
    const low = this.getLowTemperature(item) ?? high;
    const precipitation = this.getPrecipitationProbability(item);
    const range = Math.max(1, scale.max - scale.min);
    // Distance from the top/bottom of the track, in %
    const top = ((scale.max - high) / range) * 100;
    const bottom = ((low - scale.min) / range) * 100;
    const fill = `top: ${top}%; bottom: ${bottom}%; background: linear-gradient(to top, ${temperatureColor(low, this.temperatureUnit)}, ${temperatureColor(high, this.temperatureUnit)});`;

    let marker: TemplateResult | string = '';
    if (this.currentTemperature != null && isToday(item.datetime)) {
      const current = Math.max(scale.min, Math.min(scale.max, this.currentTemperature));
      marker = html`<div class="temp-bar-now" style="bottom: ${((current - scale.min) / range) * 100}%"></div>`;
    }

    return html`
      <div class="forecast-item">
        <div class="forecast-time">${formatForecastDay(item.datetime, this.lang)}</div>
        <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
        <div class="forecast-temp">${high}°</div>
        <div class="temp-bar">
          <div class="temp-bar-fill" style="${fill}"></div>
          ${marker}
        </div>
        <div class="forecast-temp forecast-temp-low-bar">${low}°</div>
        ${precipitation !== null ? html`<div class="forecast-precipitation">${precipitation}%</div>` : ''}
      </div>
    `;
  }

  private renderItem(item: WeatherForecast): TemplateResult {
    const low = this.getLowTemperature(item);
    const precipitation = this.getPrecipitationProbability(item);

    return html`
      <div class="forecast-item">
        <div class="forecast-time">${formatForecastDay(item.datetime, this.lang)}</div>
        <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
        <div class="forecast-temp">
          ${this.getTemperature(item)}°${low !== null ? html`<span class="forecast-temp-low">${low}°</span>` : ''}
        </div>
        ${precipitation !== null ? html`<div class="forecast-precipitation">${precipitation}%</div>` : ''}
      </div>
    `;
  }

  private renderItems(): TemplateResult[] {
    if (!this.showBars) return this.forecast.map(item => this.renderItem(item));

    const temperatures = this.forecast.flatMap(item => {
      const low = this.getLowTemperature(item);
      return low !== null ? [this.getTemperature(item), low] : [this.getTemperature(item)];
    });
    if (this.currentTemperature != null && this.forecast.some(item => isToday(item.datetime))) {
      temperatures.push(Math.round(this.currentTemperature));
    }
    const scale = { min: Math.min(...temperatures), max: Math.max(...temperatures) };
    return this.forecast.map(item => this.renderBarItem(item, scale));
  }

  render(): TemplateResult {
    if (this.forecast.length === 0) return html``;

    return html`
      <div class="forecast-container">
        ${this.forecastTitle !== '' ? html`<div class="forecast-title">${this.forecastTitle ?? i18n.t('daily_forecast_title')}</div>` : ''}
        <div class="forecast-scroll">
          ${this.renderItems()}
        </div>
      </div>
    `;
  }
}

customElements.define('daily-forecast', DailyForecast);
