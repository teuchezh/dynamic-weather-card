/**
 * How fast the moving weather travels. 1 is today's pace.
 * Lower values slow rain, snow, hail, clouds, fog and wind.
 * They do not change the frame cap, particle counts, or the lightning clock.
 */

export const ANIMATION_SPEED_MIN = 0.25;
export const ANIMATION_SPEED_MAX = 1;

export function clampAnimationSpeed(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) return ANIMATION_SPEED_MAX;
  return Math.min(ANIMATION_SPEED_MAX, Math.max(ANIMATION_SPEED_MIN, value));
}

/**
 * Seconds to advance a position. At speed 1 this is `deltaTime`, unchanged.
 * Lifetimes (splashes, gusts, beads, bolts) stay on the wall clock.
 */
export function motionDelta(deltaTime: number, speed: number): number {
  if (speed === 1) return deltaTime;
  return deltaTime * speed;
}

/**
 * Absolute time for a drift or sway that is drawn from the wall clock.
 * At speed 1 this is `time`, so the picture matches today.
 */
export function motionTime(time: number, speed: number): number {
  if (speed === 1) return time;
  return time * speed;
}
