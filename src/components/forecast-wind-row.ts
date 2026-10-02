import { html, TemplateResult } from 'lit';
import { windDirection } from '../icons/svg-icons.js';
import { getForecastWind } from '../forecast-wind.js';
import type { WeatherForecast } from '../types.js';

export interface ForecastWindOptions {
  // Unit the forecast values come in, and the unit they are shown in
  fromUnit: string;
  toUnit: string;
  // Translated label of toUnit
  unit: string;
}

// Compact wind row for a forecast item: direction arrow, speed and gusts ("↗ 5/9 m/s")
export function renderForecastWind(item: WeatherForecast, options: ForecastWindOptions | null): TemplateResult | string {
  if (!options) return '';
  const wind = getForecastWind(item, options.fromUnit, options.toUnit);
  if (!wind) return '';
  return html`
    <div class="forecast-wind">
      ${wind.bearing !== null ? html`<span class="forecast-wind-arrow">${windDirection(wind.bearing)}</span>` : ''}
      <span>${wind.speed}${wind.gust !== null ? html`<span class="forecast-wind-gust">/${wind.gust}</span>` : ''}</span>
      <span class="forecast-wind-unit">${options.unit}</span>
    </div>
  `;
}
