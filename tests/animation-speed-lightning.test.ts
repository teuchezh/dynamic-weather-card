import { describe, expect, test } from 'bun:test';
import {
  LIGHTNING_PEAK_ALPHA,
  lightningOverlayAlpha,
  lightningPeakAlpha,
  lightningVisibilityThreshold
} from '../src/animations/intensity';
import {
  clampLightningBrightness,
  clampLightningFrequency,
  LightningGate,
  LIGHTNING_BRIGHTNESS_MAX,
  LIGHTNING_FREQUENCY_MAX,
  lightningEnabled,
  lightningFlashIntensity,
  nextLightningPeak
} from '../src/animations/lightning';
import {
  ANIMATION_SPEED_MAX,
  clampAnimationSpeed,
  motionDelta,
  motionTime
} from '../src/animations/speed';

const STEP = 0.005;
const SECONDS = 40;

/** Length, in samples, of each run above the threshold on the unscaled clock. */
function rawRuns(threshold: number, timeOf: (time: number) => number = time => time): number[] {
  const lengths: number[] = [];
  let current = 0;
  for (let i = 0; i <= SECONDS / STEP; i++) {
    const above = lightningFlashIntensity(timeOf(i * STEP)) > threshold;
    if (above) current += 1;
    else if (current) {
      lengths.push(current);
      current = 0;
    }
  }
  if (current) lengths.push(current);
  return lengths;
}

/** Length of each flash the gate actually shows. */
function shownRuns(frequency: number, threshold: number, enabled = true): number[] {
  const gate = new LightningGate();
  const lengths: number[] = [];
  let current = 0;
  for (let i = 0; i <= SECONDS / STEP; i++) {
    const shown = gate.frame(lightningFlashIntensity(i * STEP), threshold, frequency, enabled);
    if (shown) current += 1;
    else if (current) {
      lengths.push(current);
      current = 0;
    }
  }
  if (current) lengths.push(current);
  return lengths;
}

describe('animation speed', () => {
  test('missing or out-of-range values stay at today\'s pace, clamped to 0.25–1', () => {
    expect(clampAnimationSpeed(undefined)).toBe(1);
    expect(clampAnimationSpeed(null)).toBe(1);
    expect(clampAnimationSpeed('0.5')).toBe(1);
    expect(clampAnimationSpeed(Number.NaN)).toBe(1);
    expect(clampAnimationSpeed(Number.POSITIVE_INFINITY)).toBe(1);
    expect(clampAnimationSpeed(1)).toBe(ANIMATION_SPEED_MAX);
    expect(clampAnimationSpeed(0.5)).toBe(0.5);
    expect(clampAnimationSpeed(0.25)).toBe(0.25);
    expect(clampAnimationSpeed(0)).toBe(0.25);
    expect(clampAnimationSpeed(2)).toBe(1);
  });

  test('speed 1 leaves motion steps and sway clocks unchanged', () => {
    expect(motionDelta(1 / 60, 1)).toBe(1 / 60);
    expect(motionDelta(0.1, 1)).toBe(0.1);
    expect(motionTime(12.5, 1)).toBe(12.5);
  });

  test('a lower speed slows travel and does not touch the lightning clock', () => {
    expect(motionDelta(0.1, 0.5)).toBe(0.05);
    expect(motionDelta(0.1, 0.25)).toBe(0.025);
    expect(motionTime(8, 0.5)).toBe(4);
    expect(motionTime(8, 0.25)).toBe(2);
    // The flash curve is a function of wall time only.
    const time = 9.5;
    expect(lightningFlashIntensity(time)).toBe(lightningFlashIntensity(motionTime(time, 1)));
    expect(lightningFlashIntensity(motionTime(time, 0.5))).not.toBe(lightningFlashIntensity(time));
  });
});

describe('lightning controls', () => {
  test('missing or out-of-range frequency and brightness stay at today\'s lightning', () => {
    expect(clampLightningFrequency(undefined)).toBe(1);
    expect(clampLightningFrequency(null)).toBe(1);
    expect(clampLightningFrequency('0.5')).toBe(1);
    expect(clampLightningFrequency(Number.NaN)).toBe(1);
    expect(clampLightningFrequency(1)).toBe(LIGHTNING_FREQUENCY_MAX);
    expect(clampLightningFrequency(0.5)).toBe(0.5);
    expect(clampLightningFrequency(0.25)).toBe(0.25);
    expect(clampLightningFrequency(0)).toBe(0.25);
    expect(clampLightningFrequency(3)).toBe(1);

    expect(clampLightningBrightness(undefined)).toBe(1);
    expect(clampLightningBrightness(null)).toBe(1);
    expect(clampLightningBrightness('0.5')).toBe(1);
    expect(clampLightningBrightness(Number.NaN)).toBe(1);
    expect(clampLightningBrightness(1)).toBe(LIGHTNING_BRIGHTNESS_MAX);
    expect(clampLightningBrightness(0.5)).toBe(0.5);
    expect(clampLightningBrightness(0.25)).toBe(0.25);
    expect(clampLightningBrightness(0)).toBe(0.25);
    expect(clampLightningBrightness(2)).toBe(1);
  });

  test('lightning stays on unless it is explicitly turned off', () => {
    expect(lightningEnabled(undefined)).toBe(true);
    expect(lightningEnabled(null)).toBe(true);
    expect(lightningEnabled(true)).toBe(true);
    expect(lightningEnabled(false)).toBe(false);
  });

  test('frequency 1 admits every peak and lower frequency skips whole peaks', () => {
    expect(nextLightningPeak(0.4, 1)).toEqual({ credit: 0, admitted: true });

    let credit = 0;
    const half: boolean[] = [];
    for (let i = 0; i < 8; i++) {
      const decision = nextLightningPeak(credit, 0.5);
      credit = decision.credit;
      half.push(decision.admitted);
    }
    expect(half).toEqual([false, true, false, true, false, true, false, true]);

    credit = 0;
    const quarter: boolean[] = [];
    for (let i = 0; i < 8; i++) {
      const decision = nextLightningPeak(credit, 0.25);
      credit = decision.credit;
      quarter.push(decision.admitted);
    }
    expect(quarter).toEqual([false, false, false, true, false, false, false, true]);
  });

  test('frequency 1 matches today\'s flashes, and a lower frequency does not stretch them', () => {
    const today = rawRuns(0.4);
    expect(today.length).toBeGreaterThan(4);
    expect(shownRuns(1, 0.4)).toEqual(today);

    // A slower clock would make each flash longer. Speed must not be fed in.
    const slowed = rawRuns(0.4, time => motionTime(time, 0.5));
    expect(Math.max(...slowed)).toBeGreaterThan(Math.max(...today) * 1.5);

    const half = shownRuns(0.5, 0.4);
    expect(half.length).toBeGreaterThan(0);
    expect(half.length).toBeLessThan(today.length);
    // Each shown flash is one of today's flashes, in order, not a stretched one.
    let index = 0;
    for (const length of half) {
      while (index < today.length && today[index] !== length) index += 1;
      expect(index).toBeLessThan(today.length);
      index += 1;
    }
    expect(Math.max(...half)).toBeLessThanOrEqual(Math.max(...today));
  });

  test('turning lightning off hides every flash, including the strong ones', () => {
    expect(shownRuns(1, 0.4, false)).toEqual([]);
    const gate = new LightningGate();
    expect(gate.frame(1, 0.4, 1, false)).toBe(false);
    expect(gate.frame(0.95, lightningVisibilityThreshold(0.25), 1, false)).toBe(false);
  });

  test('brightness 1 keeps today\'s overlay, and lower brightness only dims it', () => {
    expect(lightningPeakAlpha(1, 1)).toBe(LIGHTNING_PEAK_ALPHA);
    expect(lightningPeakAlpha(1)).toBe(0.6);
    expect(lightningVisibilityThreshold(1)).toBe(0.4);

    for (let step = 0; step <= 20; step++) {
      const flash = step / 20;
      expect(lightningOverlayAlpha(flash, 1, 1)).toBe(lightningOverlayAlpha(flash, 1));
      expect(lightningOverlayAlpha(flash, 0.5, 1)).toBe(lightningOverlayAlpha(flash, 0.5));
    }

    // A peak that intensity already hides stays hidden. Brightness does not bring it back.
    expect(lightningOverlayAlpha(0.5, 0.5, 1)).toBe(0);
    expect(lightningOverlayAlpha(0.5, 0.5, 0.5)).toBe(0);

    const full = lightningOverlayAlpha(0.9, 1, 1);
    const dim = lightningOverlayAlpha(0.9, 1, 0.5);
    const dimmer = lightningOverlayAlpha(0.9, 1, 0.25);
    expect(full).toBeGreaterThan(0);
    expect(dim).toBeCloseTo(full * 0.5);
    expect(dimmer).toBeCloseTo(full * 0.25);
    expect(dimmer).toBeGreaterThan(0);

    // Intensity and brightness multiply. The threshold still comes from intensity alone.
    expect(lightningPeakAlpha(0.5, 0.5)).toBeCloseTo(0.15);
    expect(lightningVisibilityThreshold(0.5)).toBeCloseTo(0.7);
    expect(lightningOverlayAlpha(0.9, 0.5, 0.5)).toBeGreaterThan(0);
    expect(lightningOverlayAlpha(0.9, 0.5, 0.5)).toBeLessThan(lightningOverlayAlpha(0.9, 0.5, 1));
  });
});
