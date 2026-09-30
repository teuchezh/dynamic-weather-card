/**
 * "Rain expected around 15:00" / "Snow ending around 18:00": when precipitation starts or stops,
 * derived from the hourly forecast
 */

import type { WeatherForecast } from './types';

export type PrecipitationKind = 'rain' | 'snow' | 'sleet' | 'hail' | 'storm';

export interface PrecipitationOutlook {
  kind: PrecipitationKind;
  // start: dry now, precipitation later; stop: precipitating now, dry later;
  // continues: precipitating for the whole look-ahead window
  type: 'start' | 'stop' | 'continues';
  // Start/stop time; null for a start within the current hour ("soon")
  time: Date | null;
  // Look-ahead window, for the "continues" text
  hours: number;
}

const HOUR = 3600000;
// A dry-condition hour still counts as wet at this chance of precipitation
const WET_PROBABILITY = 50;

export function getPrecipitationKind(condition: string | undefined): PrecipitationKind | null {
  switch ((condition || '').toLowerCase()) {
    case 'rainy':
    case 'rain':
    case 'pouring':
      return 'rain';
    case 'snowy':
    case 'snow':
      return 'snow';
    case 'snowy-rainy':
      return 'sleet';
    case 'hail':
      return 'hail';
    case 'lightning':
    case 'lightning-rainy':
      return 'storm';
    default:
      return null;
  }
}

function getEntryKind(entry: WeatherForecast): PrecipitationKind | null {
  const kind = getPrecipitationKind(entry.condition);
  if (kind) return kind;
  return (entry.precipitation_probability ?? 0) >= WET_PROBABILITY ? 'rain' : null;
}

/**
 * Hourly entries covering now .. now + hours, sorted by time.
 * Returns [] when the forecast isn't hourly (e.g. a legacy daily `forecast` attribute).
 */
function getUpcomingHours(forecast: WeatherForecast[], now: Date, hours: number): Array<{ time: Date; entry: WeatherForecast }> {
  const entries = forecast
    .map(entry => ({ time: new Date(entry.datetime), entry }))
    .filter(({ time }) => !Number.isNaN(time.getTime()))
    .sort((a, b) => a.time.getTime() - b.time.getTime());

  if (entries.length < 2 || entries[1].time.getTime() - entries[0].time.getTime() > 3 * HOUR) return [];

  const from = now.getTime() - HOUR;
  const to = now.getTime() + hours * HOUR;
  return entries.filter(({ time }) => time.getTime() > from && time.getTime() <= to);
}

export function getPrecipitationOutlook(
  condition: string,
  forecast: WeatherForecast[],
  now: Date = new Date(),
  hours = 12
): PrecipitationOutlook | null {
  const upcoming = getUpcomingHours(forecast, now, hours);
  if (upcoming.length === 0) return null;

  const currentKind = getPrecipitationKind(condition);
  if (currentKind) {
    // The hour in progress still counts as now
    const dry = upcoming.find(({ time, entry }) => time.getTime() > now.getTime() && !getEntryKind(entry));
    return dry
      ? { kind: currentKind, type: 'stop', time: dry.time, hours }
      : { kind: currentKind, type: 'continues', time: null, hours };
  }

  for (const { time, entry } of upcoming) {
    const kind = getEntryKind(entry);
    if (!kind) continue;
    // Wet entry for the hour in progress: it may start any minute
    return { kind, type: 'start', time: time.getTime() > now.getTime() ? time : null, hours };
  }
  return null;
}
