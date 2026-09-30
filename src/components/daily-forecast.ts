import { LitElement, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getWeatherConditionIcon } from '../icons/svg-icons.js';
import { formatForecastDay, setupHorizontalScroll } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import { forecastStyles } from './forecast-styles.js';
import type { WeatherForecast } from '../types.js';

export class DailyForecast extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  // Custom section title: null = default (translated), '' = hidden
  @property({ type: String }) forecastTitle: string | null = null;
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

  private getLowTemperature(item: WeatherForecast): number | null {
    const low = item.templow ?? item.native_templow;
    return low != null ? Math.round(low) : null;
  }

  private getPrecipitationProbability(item: WeatherForecast): number | null {
    const probability = item.precipitation_probability;
    return probability != null && probability > 0 ? Math.round(probability) : null;
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

  render(): TemplateResult {
    if (this.forecast.length === 0) return html``;

    return html`
      <div class="forecast-container">
        ${this.forecastTitle !== '' ? html`<div class="forecast-title">${this.forecastTitle ?? i18n.t('daily_forecast_title')}</div>` : ''}
        <div class="forecast-scroll">
          ${this.forecast.map(item => this.renderItem(item))}
        </div>
      </div>
    `;
  }
}

customElements.define('daily-forecast', DailyForecast);
