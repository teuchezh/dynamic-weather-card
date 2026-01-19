import { BaseAnimation } from './base';
import { TimeOfDay } from '../types';

interface RainDrop {
  x: number;
  y: number;
  speed: number;
  windOffset: number;
  width: number;
  length: number;
  alpha: number;
  phase: number;
}

/**
 * Rainy weather animation
 */
export class RainyAnimation extends BaseAnimation {
  private rainDrops: RainDrop[] = [];
  private lastTime: number = 0;

  /**
   * Draw rainy weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   * @param heavy - Heavy rain flag
   */
  draw(time: number, width: number, height: number, timeOfDay: TimeOfDay, heavy: boolean = false): void {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, heavy ? 1.0 : 0.8);
    this.drawRain(width, height, heavy);
  }

  /**
   * Draw rain drops
   * @param width - Canvas width
   * @param height - Canvas height
   * @param heavy - Heavy rain flag
   */
  private drawRain(width: number, height: number, heavy: boolean): void {
    const dropCount = heavy ? 130 : 90;

    // Initialize rain drops
    if (this.rainDrops.length !== dropCount) {
      this.rainDrops = [];
      for (let i = 0; i < dropCount; i++) {
        this.rainDrops.push({
          x: Math.random() * width,
          y: Math.random() * height - Math.random() * 200,
          speed: heavy ? (80 + Math.random() * 100) : (60 + Math.random() * 80),
          windOffset: (Math.random() - 0.5) * 30,
          width: heavy ? (1.2 + Math.random() * 1.0) : (0.8 + Math.random() * 0.7),
          length: heavy ? (8 + Math.random() * 10) : (6 + Math.random() * 8),
          alpha: heavy ? (0.75 + Math.random() * 0.15) : (0.65 + Math.random() * 0.2),
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    // Calculate real delta time for smooth animation
    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;

    const currentAnimTime = currentTime;

    for (let i = 0; i < this.rainDrops.length; i++) {
      const drop = this.rainDrops[i];

      // Update drop position
      drop.y += drop.speed * deltaTime;

      // Reset drop when it goes off screen (smooth loop)
      if (drop.y > height + 50) {
        drop.y = -50 - Math.random() * 100;
        drop.x = Math.random() * width;
      }

      // Wind effect
      const wind = drop.windOffset * (1 + Math.sin(currentAnimTime * 0.5 + drop.phase) * 0.2);
      const dropX = drop.x + wind;

      // Wrap around horizontally
      if (dropX < -10) {
        drop.x = width + 10;
      } else if (dropX > width + 10) {
        drop.x = -10;
      }

      this.drawRainDrop(dropX, drop.y, drop);
    }
  }

  /**
   * Draw a single rain drop
   * @param dropX - Drop X position
   * @param dropY - Drop Y position
   * @param drop - Drop parameters
   */
  private drawRainDrop(dropX: number, dropY: number, drop: RainDrop): void {
    this.ctx.save();
    this.ctx.globalAlpha = drop.alpha;

    const topY = dropY - drop.length * 0.5;
    const bottomY = dropY + drop.length * 0.5;

    const fillAlpha = drop.alpha;
    const strokeAlpha = drop.alpha * 0.5;

    this.ctx.fillStyle = 'rgba(220, 240, 255, ' + fillAlpha + ')';
    this.ctx.strokeStyle = 'rgba(240, 250, 255, ' + strokeAlpha + ')';
    this.ctx.lineWidth = 0.4;

    this.ctx.beginPath();

    // Start at pointed top
    this.ctx.moveTo(dropX, topY);

    // Left side - expand from narrow top to wider bottom
    this.ctx.quadraticCurveTo(
      dropX - drop.width * 0.3, dropY,
      dropX - drop.width, bottomY - drop.width * 0.3
    );

    // Bottom rounded part (left to right)
    this.ctx.arc(dropX, bottomY, drop.width, Math.PI, 0, false);

    // Right side - from wider bottom back to narrow top
    this.ctx.quadraticCurveTo(
      dropX + drop.width * 0.3, dropY,
      dropX, topY
    );

    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.restore();
  }
}
