import type { WeatherForecast } from './types.js';

/** Local calendar day, the same grouping the daily forecast uses. */
function localDayKey(datetime: string): string | null {
  const date = new Date(datetime);
  if (Number.isNaN(date.getTime())) return null;
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * Rainfall over several entries: the sum of the amounts that are present.
 * Undefined when none of them report precipitation. A reported zero still counts,
 * so a dry day stays zero instead of looking like missing data.
 */
export function sumPrecipitation(entries: WeatherForecast[]): number | undefined {
  let sum = 0;
  let found = false;
  for (const entry of entries) {
    const value = entry.precipitation;
    if (typeof value !== 'number' || !Number.isFinite(value)) continue;
    sum += value;
    found = true;
  }
  return found ? sum : undefined;
}

/**
 * Daily rows keep their own precipitation. A row without one takes the sum of
 * that local day's hourly amounts, when the integration only provides those.
 * Returns the same array when nothing is filled in.
 */
export function withHourlyPrecipitation(days: WeatherForecast[], hourly: WeatherForecast[]): WeatherForecast[] {
  if (hourly.length === 0 || days.every(day => day.precipitation != null)) return days;

  const buckets = new Map<string, WeatherForecast[]>();
  for (const entry of hourly) {
    if (!entry.datetime) continue;
    const key = localDayKey(entry.datetime);
    if (!key) continue;
    const bucket = buckets.get(key);
    if (bucket) bucket.push(entry);
    else buckets.set(key, [entry]);
  }

  const sums = new Map<string, number>();
  for (const [key, bucket] of buckets) {
    const sum = sumPrecipitation(bucket);
    if (sum != null) sums.set(key, sum);
  }

  let changed = false;
  const next = days.map(day => {
    if (day.precipitation != null || !day.datetime) return day;
    const key = localDayKey(day.datetime);
    const sum = key != null ? sums.get(key) : undefined;
    if (sum == null) return day;
    changed = true;
    return { ...day, precipitation: sum };
  });
  return changed ? next : days;
}

/**
 * Rainfall label for one daily item, or null when the amount should stay hidden:
 * missing, not a number, or zero once rounded to a tenth (the same precision as
 * the current precipitation in the details row).
 */
export function formatDailyPrecipitation(value: number | null | undefined, unit?: string | null): string | null {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) return null;
  const rounded = Math.round(value * 10) / 10;
  if (rounded <= 0) return null;
  const label = String(rounded);
  const trimmed = unit?.trim();
  return trimmed ? `${label} ${trimmed}` : label;
}
