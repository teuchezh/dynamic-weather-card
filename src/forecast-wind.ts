import { convertWindSpeed } from './utils.js';
import type { WeatherForecast } from './types.js';

export interface DayWind {
  wind_speed?: number;
  wind_gust_speed?: number;
  wind_bearing?: number;
}

const toNumber = (value: unknown): number | null => {
  const number = typeof value === 'string' ? parseFloat(value) : value;
  return typeof number === 'number' && Number.isFinite(number) ? number : null;
};

/**
 * Wind for a day built from several (hourly) entries: the strongest speed and gust,
 * and the prevailing direction (bearings averaged as vectors weighted by speed, so 350° and 10° give 0°).
 */
export function aggregateWind(entries: WeatherForecast[]): DayWind {
  const speeds: number[] = [];
  const gusts: number[] = [];
  let x = 0;
  let y = 0;
  let bearings = 0;

  for (const entry of entries) {
    const speed = toNumber(entry.wind_speed);
    const gust = toNumber(entry.wind_gust_speed);
    const bearing = toNumber(entry.wind_bearing);
    if (speed !== null) speeds.push(speed);
    if (gust !== null) gusts.push(gust);
    if (bearing !== null) {
      const weight = speed !== null && speed > 0 ? speed : 1;
      x += Math.sin((bearing * Math.PI) / 180) * weight;
      y += Math.cos((bearing * Math.PI) / 180) * weight;
      bearings++;
    }
  }

  const wind: DayWind = {};
  if (speeds.length > 0) wind.wind_speed = Math.max(...speeds);
  if (gusts.length > 0) wind.wind_gust_speed = Math.max(...gusts);
  if (bearings > 0 && (Math.abs(x) > 1e-9 || Math.abs(y) > 1e-9)) {
    wind.wind_bearing = Math.round(((Math.atan2(x, y) * 180) / Math.PI + 360) % 360);
  }
  return wind;
}

export interface ForecastWind {
  speed: number;
  gust: number | null;
  bearing: number | null;
}

/**
 * A forecast entry's wind in the card's display unit, or null when the provider reports no wind speed.
 * Gusts are shown only when they are stronger than the speed.
 */
export function getForecastWind(
  item: WeatherForecast,
  attrs: { wind_speed_unit?: string },
  configUnit: 'ms' | 'kmh'
): ForecastWind | null {
  const speed = convertWindSpeed(toNumber(item.wind_speed), attrs, configUnit);
  if (speed === null) return null;
  const gust = convertWindSpeed(toNumber(item.wind_gust_speed), attrs, configUnit);
  return {
    speed: Math.round(speed),
    gust: gust !== null && Math.round(gust) > Math.round(speed) ? Math.round(gust) : null,
    bearing: toNumber(item.wind_bearing)
  };
}
