/**
 * Animation quality presets: trade detail for CPU/GPU load on slower devices (e.g. wall tablets)
 */

export type { AnimationQuality } from '../types';
import type { AnimationQuality } from '../types';

export interface QualitySettings {
  // Frame rate cap
  fps: number;
  // Multiplier for rain/snow/hail/star counts
  particles: number;
  // How many cloud layers to draw, nearest first (max 3)
  cloudLayers: number;
  // Extras: splashes, star glow, shooting stars, sun rays
  details: boolean;
  // Canvas resolution cap (device pixel ratio)
  maxDpr: number;
}

export const QUALITY_PRESETS: Record<AnimationQuality, QualitySettings> = {
  high: { fps: 60, particles: 1, cloudLayers: 3, details: true, maxDpr: 3 },
  medium: { fps: 30, particles: 0.6, cloudLayers: 2, details: true, maxDpr: 2 },
  low: { fps: 20, particles: 0.35, cloudLayers: 1, details: false, maxDpr: 1 }
};

export function createQualitySettings(quality: AnimationQuality = 'high'): QualitySettings {
  return { ...QUALITY_PRESETS[quality] };
}
