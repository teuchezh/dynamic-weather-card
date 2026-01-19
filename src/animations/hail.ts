import { BaseAnimation } from './base';
import { TimeOfDay } from '../types';

interface HailStone {
  startX: number;
  startY: number;
  speed: number;
  windOffset: number;
  size: number;
  alpha: number;
  phase: number;
}

/**
 * Hail weather animation
 */
export class HailAnimation extends BaseAnimation {
  private hailStones: HailStone[] = [];

  /**
   * Draw hail weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   */
  draw(time: number, width: number, height: number, _timeOfDay: TimeOfDay): void {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 1.0);
    this.drawHailStones(width, height);
  }

  /**
   * Draw hail stones
   * @param width - Canvas width
   * @param height - Canvas height
   */
  private drawHailStones(width: number, height: number): void {
    const stoneCount = 60;

    // Initialize hail stones
    if (this.hailStones.length !== stoneCount) {
      this.hailStones = [];
      for (let i = 0; i < stoneCount; i++) {
        this.hailStones.push({
          startX: Math.random() * width,
          startY: Math.random() * (height + 150) - 75,
          speed: 120 + Math.random() * 80,
          windOffset: (Math.random() - 0.5) * 20,
          size: 2 + Math.random() * 3,
          alpha: 0.8 + Math.random() * 0.15,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    const time = Date.now() * 0.002;

    this.ctx.fillStyle = 'rgba(240, 250, 255, 1)';
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.lineWidth = 0.5;

    for (let i = 0; i < this.hailStones.length; i++) {
      const hail = this.hailStones[i];
      const hailY = (hail.startY + time * hail.speed) % (height + 150);

      // Reset stone position when it goes off screen
      if (hailY > height + 30) {
        hail.startY = -30 - Math.random() * 30;
        hail.startX = Math.random() * width;
      }

      // Wind effect
      const wind = hail.windOffset * (1 + Math.sin(time * 0.6 + hail.phase) * 0.15);
      const hailX = (hail.startX + wind + (time * 20) % width) % width;

      // Wrap around horizontally
      if (hailX < -5) {
        hail.startX = width + 5;
      } else if (hailX > width + 5) {
        hail.startX = -5;
      }

      this.drawHailStone(hailX, hailY, hail);
    }
  }

  /**
   * Draw a single hail stone
   * @param hailX - Stone X position
   * @param hailY - Stone Y position
   * @param hail - Stone parameters
   */
  private drawHailStone(hailX: number, hailY: number, hail: HailStone): void {
    this.ctx.save();
    this.ctx.globalAlpha = hail.alpha;

    // Main stone (slightly flattened circle)
    this.ctx.beginPath();
    this.ctx.ellipse(hailX, hailY, hail.size, hail.size * 0.9, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Highlight
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    this.ctx.beginPath();
    this.ctx.ellipse(
      hailX - hail.size * 0.3,
      hailY - hail.size * 0.3,
      hail.size * 0.3,
      hail.size * 0.25,
      0, 0, Math.PI * 2
    );
    this.ctx.fill();

    this.ctx.fillStyle = 'rgba(240, 250, 255, 1)';
    this.ctx.restore();
  }
}
