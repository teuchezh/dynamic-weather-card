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

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
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

  .forecast-precipitation {
    font-size: 11px;
    opacity: 0.75;
    color: #8ecbff;
    text-shadow: var(--card-text-shadow);
  }

  .forecast-unavailable {
    opacity: 0.6;
    font-size: 14px;
  }
`;
