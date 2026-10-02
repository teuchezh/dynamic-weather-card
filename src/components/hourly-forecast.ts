import { LitElement, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getWeatherConditionIcon } from '../icons/svg-icons.js';
import { formatForecastTime, getDayStarts, setupHorizontalScroll } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import { forecastStyles } from './forecast-styles.js';
import type { WeatherForecast } from '../types.js';

export class HourlyForecast extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  // Custom section title: null = default (translated), '' = hidden
  @property({ type: String }) forecastTitle: string | null = null;
  @property({ type: String }) clockFormat: '12h' | '24h' = '24h';
  @property({ type: String }) lang: string = 'en';

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

  private getWeekday(datetime: string): string {
    try {
      return new Date(datetime).toLocaleDateString(this.lang, { weekday: 'short' });
    } catch {
      return new Date(datetime).toLocaleDateString(undefined, { weekday: 'short' });
    }
  }

  private renderItem(item: WeatherForecast, dayStart: boolean, multiDay: boolean): TemplateResult {
    const precipitation = item.precipitation_probability;
    return html`
      <div class="forecast-item ${dayStart ? 'day-start' : ''}">
        ${multiDay ? html`<div class="forecast-day">${dayStart ? this.getWeekday(item.datetime) : ''}</div>` : ''}
        <div class="forecast-time">${formatForecastTime(item.datetime, this.clockFormat, i18n.t('am'), i18n.t('pm'))}</div>
        <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
        <div class="forecast-temp">${this.getTemperature(item)}°</div>
        ${precipitation != null && precipitation > 0 ? html`<div class="forecast-precipitation">${Math.round(precipitation)}%</div>` : ''}
      </div>
    `;
  }

  render(): TemplateResult {
    if (this.forecast.length === 0) return html``;

    // A forecast spanning several days marks where each new day starts
    const dayStarts = getDayStarts(this.forecast);
    const multiDay = dayStarts.some(Boolean);

    return html`
      <div class="forecast-container">
        ${this.forecastTitle !== '' ? html`<div class="forecast-title">${this.forecastTitle ?? i18n.t(multiDay ? 'forecast_title_hourly' : 'forecast_title')}</div>` : ''}
        <div class="forecast-scroll">
          ${this.forecast.map((item, index) => this.renderItem(item, dayStarts[index], multiDay))}
        </div>
      </div>
    `;
  }
}

customElements.define('hourly-forecast', HourlyForecast);
