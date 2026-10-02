import { LitElement, html, svg, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getWeatherConditionIcon } from '../icons/svg-icons.js';
import { formatForecastTime, getDayStarts, setupHorizontalScroll } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import { forecastStyles } from './forecast-styles.js';
import { renderForecastWind, type ForecastWindOptions } from './forecast-wind-row.js';
import { chartPieces, type ChartPiece } from '../forecast-chart.js';
import { temperatureColor } from '../temperature-color.js';
import type { WeatherForecast } from '../types.js';

// Chart area in pixels: labels above the curve, the curve, then the precipitation bars
const CHART = { height: 84, top: 26, bottom: 60, barsTop: 66 };

export class HourlyForecast extends LitElement {
  @property({ type: Array }) forecast: WeatherForecast[] = [];
  // Custom section title: null = default (translated), '' = hidden
  @property({ type: String }) forecastTitle: string | null = null;
  @property({ type: String }) clockFormat: '12h' | '24h' = '24h';
  @property({ type: String }) lang: string = 'en';
  // Wind row under each item (null = off)
  @property({ attribute: false }) wind: ForecastWindOptions | null = null;
  // Temperatures as a curve instead of numbers under the icons
  @property({ type: Boolean }) chart = false;
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

  private getWeekday(datetime: string): string {
    try {
      return new Date(datetime).toLocaleDateString(this.lang, { weekday: 'short' });
    } catch {
      return new Date(datetime).toLocaleDateString(undefined, { weekday: 'short' });
    }
  }

  private renderItem(item: WeatherForecast, dayStart: boolean, multiDay: boolean, piece: ChartPiece | null, index: number): TemplateResult {
    const precipitation = item.precipitation_probability;
    return html`
      <div class="forecast-item ${dayStart ? 'day-start' : ''}">
        ${multiDay ? html`<div class="forecast-day">${dayStart ? this.getWeekday(item.datetime) : ''}</div>` : ''}
        <div class="forecast-time">${formatForecastTime(item.datetime, this.clockFormat, i18n.t('am'), i18n.t('pm'))}</div>
        <div class="forecast-icon">${getWeatherConditionIcon(item.condition || 'sunny')}</div>
        ${piece ? this.renderChartPiece(item, piece, index) : html`<div class="forecast-temp">${this.getTemperature(item)}°</div>`}
        ${renderForecastWind(item, this.wind)}
        ${precipitation != null && precipitation > 0 ? html`<div class="forecast-precipitation">${Math.round(precipitation)}%</div>` : ''}
      </div>
    `;
  }

  // This item's part of the temperature curve, its point and label, and its chance of precipitation as a bar
  private renderChartPiece(item: WeatherForecast, piece: ChartPiece, index: number): TemplateResult {
    const temperature = this.getTemperature(item);
    const precipitation = Math.max(0, Math.min(100, item.precipitation_probability ?? 0));
    const range = this.chartRange;
    const id = `chart-gradient-${index}`;
    // Colored by temperature from top to bottom, so the line takes the color of the temperature it is at
    const stops = [0, 0.25, 0.5, 0.75, 1].map(f => svg`<stop offset="${f}" stop-color="${temperatureColor(range.max - f * (range.max - range.min), this.temperatureUnit)}"></stop>`);

    return html`
      <div class="forecast-chart" style="height: ${CHART.height}px">
        <svg viewBox="0 0 100 ${CHART.height}" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="${CHART.top}" x2="0" y2="${CHART.bottom}">${stops}</linearGradient>
          </defs>
          ${piece.line ? svg`<path class="chart-line" d="${piece.line}" stroke="url(#${id})"></path>` : ''}
        </svg>
        <span class="chart-dot" style="top: ${piece.y}px; background: ${temperatureColor(temperature, this.temperatureUnit)}"></span>
        <span class="chart-label" style="top: ${piece.y - 22}px">${temperature}°</span>
        ${precipitation > 0 ? html`<span class="chart-bar" style="height: ${Math.max(2, (precipitation / 100) * (CHART.height - CHART.barsTop))}px"></span>` : ''}
      </div>
    `;
  }

  // Temperature range of the shown hours, for the line's colors (set in render)
  private chartRange = { min: 0, max: 0 };

  render(): TemplateResult {
    if (this.forecast.length === 0) return html``;

    // A forecast spanning several days marks where each new day starts
    const dayStarts = getDayStarts(this.forecast);
    const multiDay = dayStarts.some(Boolean);
    const temperatures = this.forecast.map(item => this.getTemperature(item));
    const minRange = this.temperatureUnit.includes('F') ? 10 : 6;
    const pieces = this.chart ? chartPieces(temperatures, { top: CHART.top, bottom: CHART.bottom, minRange }) : null;
    this.chartRange = { min: Math.min(...temperatures), max: Math.max(...temperatures) };

    return html`
      <div class="forecast-container">
        ${this.forecastTitle !== '' ? html`<div class="forecast-title">${this.forecastTitle ?? i18n.t(multiDay ? 'forecast_title_hourly' : 'forecast_title')}</div>` : ''}
        <div class="forecast-scroll">
          ${this.forecast.map((item, index) => this.renderItem(item, dayStarts[index], multiDay, pieces?.[index] ?? null, index))}
        </div>
      </div>
    `;
  }
}

customElements.define('hourly-forecast', HourlyForecast);
