import { LitElement, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getWeatherConditionIcon } from '../icons/svg-icons.js';
import { formatForecastDay, setupHorizontalScroll } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import { forecastStyles } from './forecast-styles.js';
import type { WeatherForecast } from '../types.js';

export class DailyForecast extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
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

  render(): TemplateResult {
    if (this.forecast.length === 0) return html``;

    return html`
      <div class="forecast-container">
        <div class="forecast-title">${i18n.t('daily_forecast_title')}</div>
        <div class="forecast-scroll">
          ${this.forecast.map(item => html`
            <div class="forecast-item">
              <div class="forecast-time">${formatForecastDay(item.datetime, this.lang)}</div>
              <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
              <div class="forecast-temp">${this.getTemperature(item)}°</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('daily-forecast', DailyForecast);
