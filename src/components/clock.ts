import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { formatClockTime } from '../utils.js';
import { i18n } from '../internationalization';

export class WeatherClock extends LitElement {
  @property({ type: String }) format: '12h' | '24h' | null = null;
  @state() private currentTime: string = '';

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
      color: white;
      text-align: right;
      text-shadow:
        0 1px 2px rgba(0, 0, 0, 0.4),
        0 2px 6px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.2);
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
  `;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.format) {
      this.updateTime();
      this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }
  }

  updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('format')) {
      if (this.clockInterval) {
        clearInterval(this.clockInterval);
        this.clockInterval = null;
      }
      if (this.format) {
        this.updateTime();
        this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
      }
    }
  }

  private updateTime(): void {
    if (!this.format) return;
    this.currentTime = formatClockTime(
      new Date(),
      this.format,
      i18n.t('am'),
      i18n.t('pm')
    );
  }

  render(): TemplateResult {
    if (!this.format) return html``;
    return html`<div class="clock">${this.currentTime}</div>`;
  }
}

customElements.define('weather-clock', WeatherClock);
