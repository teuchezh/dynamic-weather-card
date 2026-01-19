import { BaseAnimation } from './base';
import { RainyAnimation } from './rainy';
import { TimeOfDay } from '../types';

/**
 * Thunderstorm weather animation
 */
export class ThunderstormAnimation extends BaseAnimation {
  private rainyAnimation: RainyAnimation;

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.rainyAnimation = new RainyAnimation(ctx);
  }

  /**
   * Draw thunderstorm weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   * @param withRain - Include rain flag
   */
  draw(time: number, width: number, height: number, timeOfDay: TimeOfDay, withRain: boolean = true): void {
    const currentTime = Date.now() * 0.001;

    // Dark clouds
    this.drawClouds(currentTime, width, height, 1.0);

    // Rain if specified
    if (withRain) {
      this.rainyAnimation.draw(time, width, height, timeOfDay, false);
    }

    // Lightning flash effect
    this.drawLightning(width, height, currentTime);
  }

  /**
   * Draw lightning flash effect
   * @param width - Canvas width
   * @param height - Canvas height
   * @param time - Animation time
   */
  private drawLightning(width: number, height: number, time: number): void {
    // Create unpredictable flash pattern
    const flashPattern = Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1);
    const flashIntensity = Math.max(0, flashPattern);

    // Flashes occur less frequently and more sharply
    if (flashIntensity > 0.4) {
      const normalizedIntensity = (flashIntensity - 0.4) / 0.6;
      const alpha = normalizedIntensity * 0.6;

      // Smooth fade for realistic effect
      const fadeAlpha = Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * 0.6);

      this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
      this.ctx.fillRect(0, 0, width, height);
    }
  }
}
