/**
 * Lightning controls that sit beside animation intensity.
 * Frequency skips whole peaks. It does not slow the flash curve, so a strike
 * does not last longer. Brightness only scales the white overlay and the bolt.
 * The clock is the wall clock: animation speed does not enter it.
 */

export const LIGHTNING_FREQUENCY_MIN = 0.25;
export const LIGHTNING_FREQUENCY_MAX = 1;
export const LIGHTNING_BRIGHTNESS_MIN = 0.25;
export const LIGHTNING_BRIGHTNESS_MAX = 1;

export function clampLightningFrequency(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return LIGHTNING_FREQUENCY_MAX;
  return Math.min(LIGHTNING_FREQUENCY_MAX, Math.max(LIGHTNING_FREQUENCY_MIN, value));
}

export function clampLightningBrightness(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return LIGHTNING_BRIGHTNESS_MAX;
  return Math.min(LIGHTNING_BRIGHTNESS_MAX, Math.max(LIGHTNING_BRIGHTNESS_MIN, value));
}

/** Flashes are on unless the option is explicitly false. */
export function lightningEnabled(value: unknown): boolean {
  return value !== false;
}

/**
 * The thunderstorm flash curve, 0..1. `time` is wall-clock seconds.
 * Slowing this clock would stretch each flash, so animation speed must not be passed in.
 */
export function lightningFlashIntensity(time: number): number {
  return Math.max(0, Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1));
}

/**
 * Whether the next peak is shown.
 * Frequency 1 admits every peak. Lower frequency keeps a fraction of them
 * and leaves each shown peak at its own length.
 * `credit` is the leftover fraction from earlier peaks.
 */
export function nextLightningPeak(credit: number, frequency: number): { credit: number; admitted: boolean } {
  if (frequency >= 1) return { credit: 0, admitted: true };
  const next = credit + frequency;
  if (next >= 1 - 1e-9) return { credit: next - 1, admitted: true };
  return { credit: next, admitted: false };
}

/**
 * Per-animation memory for which peaks are shown.
 * Call once per frame with the unscaled curve.
 */
export class LightningGate {
  private credit = 0;
  private above = false;
  private admitted = false;

  frame(flashIntensity: number, threshold: number, frequency: number, enabled: boolean): boolean {
    if (!enabled) {
      this.above = false;
      this.admitted = false;
      return false;
    }

    const above = flashIntensity > threshold;
    if (above && !this.above) {
      const decision = nextLightningPeak(this.credit, frequency);
      this.credit = decision.credit;
      this.admitted = decision.admitted;
    } else if (!above) {
      this.admitted = false;
    }
    this.above = above;
    return above && this.admitted;
  }
}
