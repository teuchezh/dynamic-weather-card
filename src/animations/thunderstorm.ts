import { BaseAnimation } from './base';
import { RainyAnimation } from './rainy';
import { TimeOfDay } from '../types';

interface Point {
  x: number;
  y: number;
}

interface LightningBolt {
  // Main channel followed by thinner side branches
  trunk: Point[];
  branches: Point[][];
  startsAt: number;
  duration: number;
}

// Flash intensity above which a flash (and a bolt) is visible
const FLASH_THRESHOLD = 0.4;

/**
 * Thunderstorm weather animation
 */
export class ThunderstormAnimation extends BaseAnimation {
  private rainyAnimation: RainyAnimation;
  private bolts: LightningBolt[] = [];
  private flashActive = false;

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
    const flashIntensity = this.getFlashIntensity(currentTime);

    // Bolts are drawn first so they come out of the clouds
    this.updateBolts(currentTime, flashIntensity, width, height);
    this.drawBolts(currentTime);

    // Dark clouds
    this.drawClouds(currentTime, width, height, 1.0);

    // Rain if specified
    if (withRain) {
      this.rainyAnimation.drawRain(width, height, false);
    }

    // Lightning flash effect
    this.drawLightning(width, height, flashIntensity);
  }

  /**
   * Unpredictable flash pattern, 0..1
   */
  private getFlashIntensity(time: number): number {
    return Math.max(0, Math.sin(time * 2.5) * Math.sin(time * 5.3) * Math.sin(time * 7.1));
  }

  /**
   * Spawn a bolt at the start of every flash and drop the finished ones
   */
  private updateBolts(time: number, flashIntensity: number, width: number, height: number): void {
    this.bolts = this.bolts.filter(bolt => time < bolt.startsAt + bolt.duration);

    const flashActive = flashIntensity > FLASH_THRESHOLD;
    if (flashActive && !this.flashActive) {
      this.bolts.push(this.createBolt(time, width, height));
      // Sometimes a second strike follows shortly after
      if (Math.random() < 0.3) {
        this.bolts.push(this.createBolt(time + 0.08 + Math.random() * 0.1, width, height));
      }
    }
    this.flashActive = flashActive;
  }

  /**
   * Build a jagged bolt from the cloud layer downwards
   */
  private createBolt(startsAt: number, width: number, height: number): LightningBolt {
    const startX = width * (0.1 + Math.random() * 0.8);
    const startY = height * 0.25;
    const endY = height * (0.6 + Math.random() * 0.3);
    const steps = 8 + Math.floor(Math.random() * 5);
    const stepY = (endY - startY) / steps;
    const jitter = Math.min(30, width * 0.06);

    const trunk: Point[] = [{ x: startX, y: startY }];
    const branches: Point[][] = [];

    for (let i = 1; i <= steps; i++) {
      const prev = trunk[i - 1];
      const point = { x: prev.x + (Math.random() - 0.5) * jitter * 2, y: startY + stepY * i };
      trunk.push(point);

      if (i < steps - 1 && Math.random() < 0.25) {
        const direction = Math.random() < 0.5 ? -1 : 1;
        const branch: Point[] = [point];
        const branchSteps = 2 + Math.floor(Math.random() * 3);
        for (let j = 1; j <= branchSteps; j++) {
          const last = branch[j - 1];
          branch.push({
            x: last.x + direction * jitter * (0.3 + Math.random() * 0.5),
            y: last.y + stepY * (0.5 + Math.random() * 0.5)
          });
        }
        branches.push(branch);
      }
    }

    return { trunk, branches, startsAt, duration: 0.2 + Math.random() * 0.15 };
  }

  private drawBolts(time: number): void {
    this.bolts.forEach(bolt => {
      const age = time - bolt.startsAt;
      if (age < 0) return;

      // Fade out with a slight flicker
      const flicker = 0.75 + Math.random() * 0.25;
      const opacity = Math.max(0, 1 - age / bolt.duration) * flicker;

      this.ctx.save();
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.globalAlpha = opacity;
      this.ctx.shadowColor = 'rgba(200, 220, 255, 1)';

      bolt.branches.forEach(branch => this.strokePath(branch, 1.2, 8));
      this.strokePath(bolt.trunk, 2.5, 16);

      this.ctx.restore();
    });
  }

  private strokePath(points: Point[], lineWidth: number, glow: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      this.ctx.lineTo(points[i].x, points[i].y);
    }
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
    this.ctx.lineWidth = lineWidth;
    this.ctx.shadowBlur = glow;
    this.ctx.stroke();
  }

  /**
   * Draw lightning flash effect
   * @param width - Canvas width
   * @param height - Canvas height
   * @param flashIntensity - Current flash intensity, 0..1
   */
  private drawLightning(width: number, height: number, flashIntensity: number): void {
    // Flashes occur less frequently and more sharply
    if (flashIntensity > FLASH_THRESHOLD) {
      const normalizedIntensity = (flashIntensity - FLASH_THRESHOLD) / (1 - FLASH_THRESHOLD);
      const alpha = normalizedIntensity * 0.6;

      // Smooth fade for realistic effect
      const fadeAlpha = Math.min(alpha, Math.sin(normalizedIntensity * Math.PI) * 0.6);

      this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
      this.ctx.fillRect(0, 0, width, height);
    }
  }
}
