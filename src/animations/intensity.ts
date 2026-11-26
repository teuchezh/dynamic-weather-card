/**
 * How full the moving weather looks. 1 is today's picture.
 * Lower values draw fewer rain, snow, hail and wind particles, and dimmer, rarer lightning.
 * Time steps, cloud drift, frame rate and bolt length are not scaled.
 */

export const ANIMATION_INTENSITY_MIN = 0.25;
export const ANIMATION_INTENSITY_MAX = 1;

// The white flash is drawn when the curve rises above this. Unchanged at intensity 1.
export const LIGHTNING_FLASH_THRESHOLD = 0.4;
// Coefficient of that overlay. The formula peaks at this value.
export const LIGHTNING_PEAK_ALPHA = 0.6;

export function clampAnimationIntensity(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return ANIMATION_INTENSITY_MAX;
  return Math.min(ANIMATION_INTENSITY_MAX, Math.max(ANIMATION_INTENSITY_MIN, value));
}

/**
 * Scale a particle budget that quality (and the effect's own cap) already decided.
 * At intensity 1 the count is that budget, unchanged.
 */
export function scaleParticleCount(base: number, intensity: number): number {
  if (intensity === 1) return base;
  return Math.max(0, Math.round(base * intensity));
}

/**
 * Weaker peaks stay hidden as intensity drops, so strikes are rarer.
 * The flash curve is not slowed, so a strike does not last longer.
 * At intensity 1 this is 0.4.
 */
export function lightningVisibilityThreshold(intensity: number): number {
  if (intensity === 1) return LIGHTNING_FLASH_THRESHOLD;
  return 1 - (1 - LIGHTNING_FLASH_THRESHOLD) * intensity;
}

/**
 * White-overlay coefficient. At intensity 1 and brightness 1 this is 0.6.
 * Brightness is the separate lightning control. It dims the flash and does not
 * change how long the flash lasts.
 */
export function lightningPeakAlpha(intensity: number, brightness = 1): number {
  if (intensity === 1 && brightness === 1) return LIGHTNING_PEAK_ALPHA;
  return LIGHTNING_PEAK_ALPHA * intensity * brightness;
}

/**
 * Alpha of the full-canvas lightning overlay, or 0 when this peak stays hidden.
 * At intensity 1 and brightness 1 this is the historical formula.
 */
export function lightningOverlayAlpha(flashIntensity: number, intensity: number, brightness = 1): number {
  const threshold = lightningVisibilityThreshold(intensity);
  if (!(flashIntensity > threshold)) return 0;
  const normalizedIntensity = (flashIntensity - threshold) / (1 - threshold);
  const peak = lightningPeakAlpha(intensity, brightness);
  const alpha = normalizedIntensity * peak;
  return Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * peak);
}
