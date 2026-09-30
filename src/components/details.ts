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
  @property({ type: Boolean, reflect: true }) compact = false;

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
      text-shadow: var(--card-text-shadow);
    }

    :host([compact]) .info-grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 4px 12px;
      font-size: 12px;
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
      color: var(--dwc-text-color, white);
      filter: var(--card-icon-filter);
    }

    .info-icon svg {
      width: 20px;
      height: 20px;
      display: block;
    }

    :host([compact]) .sun-group {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  `;

  private hasContent(): boolean {
    if (!this.weather || !this.config) return false;

    return (
      (this.config.showHumidity && this.weather.humidity != null) ||
      (this.config.showWind && this.weather.windSpeed != null) ||
      this.weather.precipitation != null ||
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

    // Sensor-provided wind values carry their own unit, which overrides the weather entity's
    const attrs = this.weather.windSpeedUnit
      ? { ...(this.entityAttributes || {}), wind_speed_unit: this.weather.windSpeedUnit }
      : this.entityAttributes || {};
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

  private renderPrecipitation(): TemplateResult {
    if (this.weather?.precipitation == null) return html``;

    const value = Math.round(this.weather.precipitation * 10) / 10;
    const unit = this.weather.precipitationUnit ? ` ${this.weather.precipitationUnit}` : '';
    return html`
      <div class="info-item">
        <span class="info-icon">${getSVGIcon('precipitation')}</span>
        <span>${value}${unit}</span>
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

    const hasSun = this.config?.showSunriseSunset && this.sunData?.hasSunData;
    const sunItems = hasSun ? html`
      <div class="sun-group">
        ${this.renderSunrise()}
        ${this.renderSunset()}
      </div>
    ` : html``;

    return html`
      <div class="info-grid">
        ${this.renderHumidity()}
        ${this.renderWind()}
        ${this.compact ? sunItems : html`${this.renderSunrise()}${this.renderSunset()}`}
        ${this.renderPrecipitation()}
      </div>
    `;
  }
}

customElements.define('weather-details', WeatherDetails);
