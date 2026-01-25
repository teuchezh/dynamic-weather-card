import { LitElement, html, css, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { getSVGIcon, windDirection } from '../icons/svg-icons.js';
import { formatTime, convertWindSpeed, getWindSpeedUnit } from '../utils.js';
import { i18n } from '../internationalization/index.js';
import type { WeatherData, SunData, DetailsConfig, WeatherEntityAttributes } from '../types.js';

export class WeatherDetails extends LitElement {
  @property({ type: Object }) weather: WeatherData | null = null;
  @property({ type: Object }) sunData: SunData | null = null;
  @property({ type: Object }) config: DetailsConfig | null = null;
  @property({ type: Object }) entityAttributes: WeatherEntityAttributes | null = null;

  static styles = css`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px 12px;
      font-size: 13px;
      opacity: 0.9;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .info-item span:last-child {
      white-space: nowrap;
    }

    .info-icon {
      font-size: 16px;
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .info-icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }
  `;

  private hasContent(): boolean {
    if (!this.weather || !this.config) return false;

    return (
      (this.config.showHumidity && this.weather.humidity != null) ||
      (this.config.showWind && this.weather.windSpeed != null) ||
      (this.config.showSunriseSunset && this.sunData?.hasSunData === true)
    );
  }

  private renderHumidity(): TemplateResult {
    if (!this.config?.showHumidity || this.weather?.humidity == null) return html``;

    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon('humidity')}</span>
        <span>${this.weather.humidity} %</span>
      </div>
    `;
  }

  private renderSunrise(): TemplateResult {
    if (!this.config?.showSunriseSunset || !this.sunData?.hasSunData || !this.sunData.sunrise) {
      return html``;
    }

    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon('sunrise')}</span>
        <span>${formatTime(this.sunData.sunrise, this.config.clockFormat, i18n.t('am'), i18n.t('pm'))}</span>
      </div>
    `;
  }

  private renderWind(): TemplateResult {
    if (!this.config?.showWind || this.weather?.windSpeed == null) return html``;

    const attrs = this.entityAttributes || {};
    const speed = convertWindSpeed(this.weather.windSpeed, attrs, this.config.windSpeedUnit);
    const unit = getWindSpeedUnit(attrs, this.config.windSpeedUnit, i18n.t.bind(i18n));

    let gustText = '';
    if (this.config.showWindGust && this.weather.windGust) {
      const gustSpeed = convertWindSpeed(this.weather.windGust, attrs, this.config.windSpeedUnit);
      gustText = ` / ${gustSpeed} ${unit}`;
    }

    const icon = this.config.showWindDirection && this.weather.windBearing != null
      ? windDirection(this.weather.windBearing)
      : getSVGIcon('wind');

    return html`
      <div class="info-item">
        <span class="info-icon">${icon}</span>
        <span>${speed} ${unit}${gustText}</span>
      </div>
    `;
  }

  private renderSunset(): TemplateResult {
    if (!this.config?.showSunriseSunset || !this.sunData?.hasSunData || !this.sunData.sunset) {
      return html``;
    }

    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon('sunset')}</span>
        <span>${formatTime(this.sunData.sunset, this.config.clockFormat, i18n.t('am'), i18n.t('pm'))}</span>
      </div>
    `;
  }

  render(): TemplateResult {
    if (!this.hasContent()) return html``;

    return html`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderSunrise()}
        ${this.renderWind()}
        ${this.renderSunset()}
      </div>
    `;
  }
}

customElements.define('weather-details', WeatherDetails);
