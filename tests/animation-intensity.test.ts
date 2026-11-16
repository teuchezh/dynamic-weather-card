import { describe, expect, test } from 'bun:test';
import { QUALITY_PRESETS } from '../src/animations/quality';
import {
  ANIMATION_INTENSITY_MAX,
  clampAnimationIntensity,
  LIGHTNING_FLASH_THRESHOLD,
  LIGHTNING_PEAK_ALPHA,
  lightningOverlayAlpha,
  lightningPeakAlpha,
  lightningVisibilityThreshold,
  scaleParticleCount
} from '../src/animations/intensity';

// The overlay formula as it stood before animation_intensity existed.
const legacyOverlayAlpha = (flashIntensity: number): number => {
  if (!(flashIntensity > LIGHTNING_FLASH_THRESHOLD)) return 0;
  const normalizedIntensity = (flashIntensity - LIGHTNING_FLASH_THRESHOLD) / (1 - LIGHTNING_FLASH_THRESHOLD);
  const alpha = normalizedIntensity * LIGHTNING_PEAK_ALPHA;
  return Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * LIGHTNING_PEAK_ALPHA);
};

describe('animation intensity', () => {
  test('missing or out-of-range values fall back to the full picture, clamped to 0.25–1', () => {
    expect(clampAnimationIntensity(undefined)).toBe(1);
    expect(clampAnimationIntensity(null)).toBe(1);
    expect(clampAnimationIntensity('0.5')).toBe(1);
    expect(clampAnimationIntensity(Number.NaN)).toBe(1);
    expect(clampAnimationIntensity(Number.POSITIVE_INFINITY)).toBe(1);
    expect(clampAnimationIntensity(1)).toBe(ANIMATION_INTENSITY_MAX);
    expect(clampAnimationIntensity(0.5)).toBe(0.5);
    expect(clampAnimationIntensity(0.25)).toBe(0.25);
    expect(clampAnimationIntensity(0)).toBe(0.25);
    expect(clampAnimationIntensity(2)).toBe(1);
  });

  test('intensity 1 keeps the particle budget at every quality', () => {
    const budgets = [0, 1, 2, 30, 60, 90, 130, 250, 400];
    for (const quality of ['high', 'medium', 'low'] as const) {
      const particles = QUALITY_PRESETS[quality].particles;
      // Same caps the animations apply, then intensity. At 1 the cap is the result.
      const rain = Math.min(400, Math.round(18.5 * 3.5 * particles));
      const snow = Math.min(250, Math.round(18.5 * 2.5 * particles));
      const hail = Math.min(200, Math.round(18.5 * 0.9 * particles));
      const gusts = Math.max(2, Math.round(480 / 60 * Math.max(0.5, particles)));
      for (const base of [...budgets, rain, snow, hail, gusts]) {
        expect(scaleParticleCount(base, 1)).toBe(base);
      }
      expect(scaleParticleCount(rain, 0.5)).toBe(Math.round(rain * 0.5));
      expect(scaleParticleCount(rain, 0.5)).toBeLessThan(rain);
    }
  });

  test('a lower intensity draws fewer particles and never more', () => {
    expect(scaleParticleCount(100, 0.5)).toBe(50);
    expect(scaleParticleCount(90, 0.25)).toBe(23);
    expect(scaleParticleCount(80, 0.25)).toBe(20);
    expect(scaleParticleCount(2, 0.25)).toBe(1);
    expect(scaleParticleCount(1, 0.25)).toBe(0);
  });

  test('lightning at intensity 1 matches the historical overlay', () => {
    expect(lightningVisibilityThreshold(1)).toBe(0.4);
    expect(lightningPeakAlpha(1)).toBe(0.6);
    for (let step = 0; step <= 200; step++) {
      const flash = step / 200;
      expect(lightningOverlayAlpha(flash, 1)).toBe(legacyOverlayAlpha(flash));
    }
  });

  test('lower intensity dims the overlay and hides the weaker flashes', () => {
    expect(lightningVisibilityThreshold(0.5)).toBeCloseTo(0.7);
    expect(lightningVisibilityThreshold(0.25)).toBeCloseTo(0.85);
    expect(lightningPeakAlpha(0.5)).toBeCloseTo(0.3);
    expect(lightningPeakAlpha(0.25)).toBeCloseTo(0.15);

    // Visible today, below the calmer threshold.
    expect(legacyOverlayAlpha(0.5)).toBeGreaterThan(0);
    expect(lightningOverlayAlpha(0.5, 0.5)).toBe(0);
    expect(lightningOverlayAlpha(0.5, 0.25)).toBe(0);

    // A strong peak still flashes, and the white overlay is dimmer.
    const full = lightningOverlayAlpha(0.9, 1);
    const half = lightningOverlayAlpha(0.9, 0.5);
    const quarter = lightningOverlayAlpha(0.9, 0.25);
    expect(full).toBeGreaterThan(half);
    expect(half).toBeGreaterThan(quarter);
    expect(quarter).toBeGreaterThan(0);
  });
});
