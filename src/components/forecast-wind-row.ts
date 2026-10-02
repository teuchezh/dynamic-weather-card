import { html, TemplateResult } from 'lit';
import { windDirection } from '../icons/svg-icons.js';
import { getForecastWind } from '../forecast-wind.js';
import type { WeatherForecast } from '../types.js';

export interface ForecastWindOptions {
  attrs: { wind_speed_unit?: string };
  configUnit: 'ms' | 'kmh';
  // Translated unit label
  unit: string;
}

// Compact wind row for a forecast item: direction arrow, speed and gusts ("↗ 5/9 m/s")
export function renderForecastWind(item: WeatherForecast, options: ForecastWindOptions | null): TemplateResult | string {
  if (!options) return '';
  const wind = getForecastWind(item, options.attrs, options.configUnit);
  if (!wind) return '';
  return html`
    <div class="forecast-wind">
      ${wind.bearing !== null ? html`<span class="forecast-wind-arrow">${windDirection(wind.bearing)}</span>` : ''}
      <span>${wind.speed}${wind.gust !== null ? html`<span class="forecast-wind-gust">/${wind.gust}</span>` : ''}</span>
      <span class="forecast-wind-unit">${options.unit}</span>
    </div>
  `;
}
