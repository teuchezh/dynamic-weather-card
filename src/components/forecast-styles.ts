import { css } from 'lit';

export const forecastStyles = css`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .forecast-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .forecast-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Items share the width when they fit (e.g. a provider with only two days), and scroll when they don't */
  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1 0 auto;
    min-width: 60px;
  }

  /* Hourly forecast spanning several days: the first hour of each new day */
  .forecast-day {
    min-height: 14px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    opacity: 0.85;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-item.day-start {
    position: relative;
  }

  .forecast-item.day-start::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.25);
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-icon {
    line-height: 1;
    filter: var(--card-icon-filter);
  }

  .forecast-icon svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-temp-low {
    margin-left: 4px;
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
  }

  .temp-bar {
    position: relative;
    width: 6px;
    height: 48px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.18);
  }

  .temp-bar-fill {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 6px;
    border-radius: 3px;
  }

  .temp-bar-now {
    position: absolute;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: 0 0 -4px -4px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0 1.5px rgba(0, 0, 0, 0.35);
  }

  .forecast-temp-low-bar {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.6;
  }

  /* Text in the card's own color, readable on any sky; the blue drop marks it as precipitation */
  .forecast-precipitation {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 11px;
    font-weight: 500;
    opacity: 0.9;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-precipitation::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 0 50% 50% 50%;
    transform: rotate(45deg);
    background: #4fb3ff;
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);
  }

  .forecast-wind {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 11px;
    white-space: nowrap;
    opacity: 0.85;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-wind-arrow {
    display: inline-flex;
    filter: var(--card-icon-filter);
  }

  .forecast-wind-arrow svg {
    width: 11px;
    height: 11px;
  }

  .forecast-wind-gust,
  .forecast-wind-unit {
    opacity: 0.7;
  }

  .forecast-wind-unit {
    margin-left: 1px;
    font-size: 10px;
  }

  /* Hourly temperature chart: each item draws its part of the curve, across half the gap on each side */
  .forecast-chart {
    position: relative;
    align-self: stretch;
    margin: 0 -8px;
  }

  .forecast-chart svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .chart-line {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
  }

  .chart-dot {
    position: absolute;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.9);
  }

  .chart-label {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    text-shadow: var(--card-text-shadow);
  }

  .chart-bar {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 18px;
    margin-left: -9px;
    border-radius: 3px 3px 0 0;
    background: rgba(79, 179, 255, 0.55);
  }

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;
