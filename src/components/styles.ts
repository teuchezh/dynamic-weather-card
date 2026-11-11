import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    /* Classic style backgrounds */
    --day-gradient-start: #87CEEB;
    --day-gradient-end: #E0F6FF;
    --night-gradient-start: #1a1a2e;
    --night-gradient-end: #16213e;
    --sunset-gradient-start: #FF6B6B;
    --sunset-gradient-end: #FFA07A;
    --sunrise-gradient-start: #FFA07A;
    --sunrise-gradient-end: #FFD700;
    --overlay-opacity: 0.1;
  }

  ha-card {
    border-radius: var(--dwc-border-radius, var(--ha-card-border-radius, 12px));
    overflow: hidden;
    background: transparent;
    box-shadow: none;
    position: relative;
    z-index: 0;
    isolation: isolate;
  }

  .weather-card {
    position: relative;
    width: var(--card-width);
    min-height: var(--card-height, 200px);
    border-radius: var(--dwc-border-radius, 16px);
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    /* Sky colors come from the condition and time of day (see sky.ts) */
    background: linear-gradient(to bottom, var(--dwc-sky-top, #2E6FC7), var(--dwc-sky-bottom, #8CC2EC));
    transition: --dwc-sky-top 2s ease-in-out, --dwc-sky-bottom 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.classic {
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.classic.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.classic.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.classic.sunrise {
    background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
  }

  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Dark overlay for better text contrast */
  .weather-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 0.8)) 0%,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 1.2)) 100%
    );
    z-index: 1;
    border-radius: var(--dwc-border-radius, 16px);
  }

  .content {
    position: relative;
    z-index: 2;
    padding: var(--dwc-padding, 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--dwc-text-color, white);
    text-shadow: var(--card-text-shadow);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .location {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  .temperature {
    font-size: var(--dwc-temperature-size, 64px);
    font-weight: 100;
    line-height: 1;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .details--clock {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .condition {
    font-size: var(--dwc-condition-size, 20px);
    font-weight: 400;
    opacity: 0.9;
  }

  .primary {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .primary-left {
    display: flex;
    flex-direction: column;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  /* Short summary only when a separate detailed forecast fills the dialog */
  .forecast-extra {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-top: 12px;
  }

  .forecast-description {
    align-self: stretch;
    font-size: var(--dwc-details-size, 13px);
    line-height: 1.3;
    opacity: 0.85;
    text-shadow: var(--card-text-shadow);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Text link, same size as the detail labels. Not a button pill. */
  .forecast-more {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    appearance: none;
    color: inherit;
    font: inherit;
    font-size: var(--dwc-details-size, 13px);
    line-height: 1.2;
    font-weight: 400;
    opacity: 0.85;
    cursor: pointer;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-more:hover,
  .forecast-more:focus-visible {
    opacity: 1;
    text-decoration: underline;
  }

  .forecast-more:focus-visible {
    outline: 1px solid currentColor;
    outline-offset: 3px;
  }

  .forecast-dialog {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.45);
    color: #f5f5f7;
    text-shadow: none;
  }

  .forecast-dialog-panel {
    width: min(440px, 100%);
    max-height: min(70vh, 560px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 16px 18px;
    border-radius: 18px;
    background: rgba(28, 28, 30, 0.96);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
    color: #f5f5f7;
    text-shadow: none;
  }

  .forecast-dialog-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .forecast-dialog-title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }

  .forecast-dialog-source {
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.2;
    opacity: 0.55;
    font-weight: 400;
  }

  .forecast-dialog-close {
    flex: none;
    margin: -4px -4px 0 0;
    padding: 4px 8px;
    border: 0;
    background: none;
    color: inherit;
    font: inherit;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    opacity: 0.85;
  }

  .forecast-dialog-close:hover,
  .forecast-dialog-close:focus-visible {
    opacity: 1;
  }

  .forecast-dialog-body {
    overflow: auto;
    font-size: 15px;
    line-height: 1.45;
    font-weight: 400;
    white-space: pre-wrap;
  }

  .precipitation-outlook {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 0 12px;
    font-size: 14px;
    opacity: 0.95;
  }

  .temp-range {
    font-size: 18px;
    opacity: 0.9;
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .temp-min {
    font-size: 14px;
    opacity: 0.7;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--dwc-text-color, white);
  }

  .info-icon svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  /* ---- Minimal layout ---- */
  .weather-card.layout--minimal {
    min-height: 72px;
  }

  .weather-card.layout--minimal .content {
    display: grid;
    /* The clock column collapses when the clock is off, so the gap lives on the clock itself */
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      "lead clock"
      "details clock";
    align-items: center;
    column-gap: 0;
    row-gap: 6px;
    padding: var(--dwc-padding, 8px 16px);
    min-height: inherit;
  }

  .mini-primary {
    grid-area: lead;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    min-width: 0;
    max-width: 100%;
  }

  .mini-condition {
    max-width: 100%;
    font-size: var(--dwc-condition-size, 15px);
    font-weight: 500;
    line-height: 1.25;
    opacity: 0.9;
    overflow-wrap: break-word;
  }

  .mini-temp {
    font-size: var(--dwc-temperature-size, 52px);
    font-weight: 200;
    line-height: 1;
  }

  /* On the condition line, smaller than the condition, so it does not compete with the temperature */
  .mini-temp-low {
    margin-left: 8px;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    white-space: nowrap;
    opacity: 0.85;
  }

  .mini-details {
    grid-area: details;
    min-width: 0;
    max-width: 100%;
  }

  /* Under the details, in the left column. Same scale as those details, not the temperature */
  .mini-notes {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    margin-top: 4px;
    min-width: 0;
    max-width: 100%;
  }

  .weather-card.layout--minimal .mini-notes .feels-like,
  .weather-card.layout--minimal .mini-notes .precipitation-outlook {
    margin: 0;
    max-width: 100%;
    font-size: var(--dwc-details-size, 14px);
    font-weight: 400;
    line-height: 1.25;
  }

  .weather-card.layout--minimal .mini-notes .feels-like {
    opacity: 0.9;
    overflow-wrap: break-word;
  }

  .weather-card.layout--minimal .mini-notes .precipitation-outlook {
    min-width: 0;
    align-items: flex-start;
  }

  .weather-card.layout--minimal .mini-notes .precipitation-outlook > span:last-child {
    min-width: 0;
    overflow-wrap: break-word;
  }

  .weather-card.layout--minimal .mini-notes .precipitation-outlook .info-icon {
    flex: none;
    margin-top: 1px;
  }

  .weather-card.layout--minimal weather-clock {
    grid-area: clock;
    align-self: center;
    justify-self: end;
    margin-left: 16px;
    opacity: 1;
  }

`;
