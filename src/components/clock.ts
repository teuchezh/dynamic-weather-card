import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { formatClockTime, formatDate } from '../utils.js';
import { i18n } from '../internationalization';

export class WeatherClock extends LitElement {
  @property({ type: String }) format: '12h' | '24h' | null = null;
  @property({ type: Boolean, reflect: true }) compact = false;
  @property({ type: Boolean }) showDate = false;
  @property({ type: String }) lang = 'en';
  @state() private currentTime: string = '';
  @state() private currentDate: string = '';

  private clockInterval: number | null = null;

  static styles = css`
    :host {
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .clock {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 48px;
      font-weight: 200;
      line-height: 1;
      color: var(--dwc-text-color, white);
      text-align: right;
      text-shadow: var(--card-text-shadow);
      z-index: 2;
      pointer-events: none;
    }

    @media (max-width: 600px) {
      .clock {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .date {
      margin-top: 4px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      opacity: 0.85;
      color: var(--dwc-text-color, white);
      text-align: right;
      text-shadow: var(--card-text-shadow);
      white-space: nowrap;
      pointer-events: none;
    }

    :host([compact]) .clock {
      font-size: 26px;
    }

    :host([compact]) .date {
      margin-top: 2px;
      font-size: 13px;
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.restartTimer();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopTimer();
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('format') || changedProperties.has('showDate') || changedProperties.has('lang')) {
      this.restartTimer();
    }
  }

  private restartTimer(): void {
    this.stopTimer();
    if (this.format || this.showDate) {
      this.updateTime();
      this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
    }
  }

  private stopTimer(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }

  private updateTime(): void {
    const now = new Date();
    if (this.format) {
      this.currentTime = formatClockTime(now, this.format, i18n.t('am'), i18n.t('pm'));
    }
    if (this.showDate) {
      this.currentDate = formatDate(now, this.lang);
    }
  }

  render(): TemplateResult {
    if (!this.format && !this.showDate) return html``;
    return html`
      ${this.format ? html`<div class="clock">${this.currentTime}</div>` : ''}
      ${this.showDate ? html`<div class="date">${this.currentDate}</div>` : ''}
    `;
  }
}

customElements.define('weather-clock', WeatherClock);
