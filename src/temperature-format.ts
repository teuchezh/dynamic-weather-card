/** Decimal places for the current temperature. 0 keeps whole-degree rounding. */
export const TEMPERATURE_DECIMALS_MAX = 2;

/**
 * Whole degrees when the option is missing or not a finite number.
 * Values outside 0–2 are clamped; fractional places are rounded to an integer.
 */
export function clampTemperatureDecimals(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return 0;
  return Math.min(TEMPERATURE_DECIMALS_MAX, Math.max(0, Math.round(value)));
}

/**
 * Current temperature as shown on the card, with a degree sign.
 * Zero places uses Math.round, the historical whole-degree display.
 */
export function formatTemperature(value: number, decimals: number): string {
  const places = clampTemperatureDecimals(decimals);
  if (places === 0) return `${Math.round(value)}°`;
  return `${value.toFixed(places)}°`;
}
