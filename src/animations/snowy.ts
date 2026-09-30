import { BaseAnimation } from './base';
import { TimeOfDay } from '../types';

interface Snowflake {
  layer: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  swayPhase: number;
  swaySpeed: number;
  swayAmount: number;
}

interface SnowLayer {
  // Flakes per 10,000 px²
  density: number;
  speed: [number, number];
  size: [number, number];
  alpha: number;
}

// Back to front: far flakes are tiny, faint and slow; near ones are big and soft
const SNOW_LAYERS: SnowLayer[] = [
  { density: 5, speed: [12, 20], size: [1.2, 2], alpha: 0.6 },
  { density: 2.5, speed: [22, 34], size: [2.4, 3.6], alpha: 0.85 },
  { density: 0.9, speed: [38, 55], size: [4, 6.5], alpha: 0.95 }
];
const SPRITE_SIZE = 32;

/**
 * Snowy weather animation
 */
export class SnowyAnimation extends BaseAnimation {
  private snowflakes: Snowflake[] = [];
  private lastTime: number = 0;
  private flakesKey = '';
  private sprite: HTMLCanvasElement | null = null;

  /**
   * Draw snowy weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   */
  draw(time: number, width: number, height: number, _timeOfDay: TimeOfDay): void {
    const currentTime = Date.now() * 0.001;
    this.drawClouds(currentTime, width, height, 0.7);
    this.drawSnowflakes(width, height);
  }

  /**
   * Draw soft snowflakes drifting in three depth layers
   * @param width - Canvas width
   * @param height - Canvas height
   */
  drawSnowflakes(width: number, height: number): void {
    const key = `${Math.round(width)}x${Math.round(height)}`;
    if (key !== this.flakesKey) {
      this.createFlakes(width, height);
      this.flakesKey = key;
    }
    const sprite = this.getSprite();

    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;

    this.ctx.save();
    for (const flake of this.snowflakes) {
      flake.y += flake.speed * deltaTime;
      const sway = Math.sin(currentTime * flake.swaySpeed + flake.swayPhase) * flake.swayAmount;
      // Gentle wind plus sway
      flake.x += (flake.speed * 0.15 + sway) * deltaTime;

      if (flake.y - flake.size > height) {
        flake.y = -flake.size - Math.random() * 20;
        flake.x = Math.random() * width;
      }
      if (flake.x > width + 10) flake.x -= width + 20;
      if (flake.x < -10) flake.x += width + 20;

      const size = flake.size * 2;
      this.ctx.globalAlpha = SNOW_LAYERS[flake.layer].alpha;
      this.ctx.drawImage(sprite, flake.x - size / 2, flake.y - size / 2, size, size);
    }
    this.ctx.restore();
  }

  private createFlakes(width: number, height: number): void {
    this.snowflakes = [];
    const area = (width * height) / 10000;
    SNOW_LAYERS.forEach((layer, index) => {
      const count = Math.min(250, Math.round(area * layer.density));
      for (let i = 0; i < count; i++) {
        this.snowflakes.push({
          layer: index,
          x: Math.random() * width,
          y: Math.random() * height,
          speed: layer.speed[0] + Math.random() * (layer.speed[1] - layer.speed[0]),
          size: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
          swayPhase: Math.random() * Math.PI * 2,
          swaySpeed: 0.6 + Math.random() * 0.8,
          swayAmount: 6 + index * 6
        });
      }
    });
  }

  /**
   * Soft glowing dot, rendered once and reused for every flake
   */
  private getSprite(): HTMLCanvasElement {
    if (this.sprite) return this.sprite;
    const canvas = document.createElement('canvas');
    canvas.width = SPRITE_SIZE;
    canvas.height = SPRITE_SIZE;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const c = SPRITE_SIZE / 2;
      const gradient = ctx.createRadialGradient(c, c, 0, c, c, c);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.45, 'rgba(255, 255, 255, 0.85)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
    }
    this.sprite = canvas;
    return canvas;
  }
}
