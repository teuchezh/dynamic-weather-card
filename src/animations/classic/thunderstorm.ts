import { BaseAnimation } from '../base';
import { lightningOverlayAlpha, lightningVisibilityThreshold } from '../intensity';
import { lightningFlashIntensity, LightningGate } from '../lightning';
import { RainyAnimation } from './rainy';
import { TimeOfDay } from '../../types';

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

/**
 * Thunderstorm weather animation
 */
export class ThunderstormAnimation extends BaseAnimation {
  private rainyAnimation: RainyAnimation;
  private bolts: LightningBolt[] = [];
  private flashActive = false;
  private lightningGate = new LightningGate();

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.rainyAnimation = new RainyAnimation(ctx);
    this.children.push(this.rainyAnimation);
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
    // Wall clock, not animation speed: a slower sky must not stretch the flash.
    const currentTime = Date.now() * 0.001;
    const flashIntensity = lightningFlashIntensity(currentTime);
    const admitted = this.lightningGate.frame(
      flashIntensity,
      lightningVisibilityThreshold(this.intensity),
      this.lightningFrequency,
      this.showLightning
    );

    if (!this.showLightning) {
      this.bolts = [];
      this.flashActive = false;
    } else {
      // Bolts are drawn first so they come out of the clouds
      this.updateBolts(currentTime, admitted, width, height);
      this.drawBolts(currentTime);
    }

    // Dark clouds
    this.drawClouds(currentTime, width, height, 1.0);

    // Rain if specified
    if (withRain) {
      this.rainyAnimation.draw(time, width, height, timeOfDay, false);
    }

    // Lightning flash effect
    if (admitted) this.drawLightning(width, height, flashIntensity);
  }

  /**
   * Spawn a bolt at the start of every shown flash and drop the finished ones.
   * Frequency decides which flashes start. It does not change bolt length.
   */
  private updateBolts(time: number, admitted: boolean, width: number, height: number): void {
    this.bolts = this.bolts.filter(bolt => time < bolt.startsAt + bolt.duration);

    if (admitted && !this.flashActive) {
      this.bolts.push(this.createBolt(time, width, height));
      // Sometimes a second strike follows shortly after
      if (Math.random() < 0.3) {
        this.bolts.push(this.createBolt(time + 0.08 + Math.random() * 0.1, width, height));
      }
    }
    this.flashActive = admitted;
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

    // 0.2–0.35s on the wall clock. Speed, frequency and brightness do not change this.
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
      this.ctx.globalAlpha = this.lightningBrightness === 1 ? opacity : opacity * this.lightningBrightness;
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
    const fadeAlpha = lightningOverlayAlpha(flashIntensity, this.intensity, this.lightningBrightness);
    if (fadeAlpha <= 0) return;

    this.ctx.fillStyle = `rgba(255, 255, 255, ${fadeAlpha})`;
    this.ctx.fillRect(0, 0, width, height);
  }
}
