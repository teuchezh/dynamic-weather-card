import { BaseAnimation } from './base';
import { RainyAnimation } from './rainy';
import { TimeOfDay } from '../types';

interface HailStone {
  layer: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  // Height at which the stone hits the ground and bounces
  ground: number;
  bounces: number;
}

interface HailLayer {
  // Stones per 10,000 px²
  density: number;
  speed: [number, number];
  size: [number, number];
  alpha: number;
}

// Back to front: far stones are small, faint and slower
const HAIL_LAYERS: HailLayer[] = [
  { density: 1.6, speed: [280, 360], size: [1.5, 2.2], alpha: 0.6 },
  { density: 0.9, speed: [420, 520], size: [2.6, 3.4], alpha: 0.85 },
  { density: 0.4, speed: [600, 720], size: [3.8, 5.2], alpha: 1 }
];
const GRAVITY = 1400;
const SPRITE_SIZE = 32;

/**
 * Hail weather animation: icy pellets falling in depth layers and bouncing off the ground, with light rain
 */
export class HailAnimation extends BaseAnimation {
  private rainyAnimation: RainyAnimation;
  private hailStones: HailStone[] = [];
  private stonesKey = '';
  private lastTime = 0;
  private sprite: HTMLCanvasElement | null = null;

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.rainyAnimation = new RainyAnimation(ctx);
    this.children.push(this.rainyAnimation);
  }

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
    this.rainyAnimation.drawRain(width, height, false);
    this.drawHailStones(width, height);
  }

  private drawHailStones(width: number, height: number): void {
    const key = `${Math.round(width)}x${Math.round(height)}:${this.quality.particles}`;
    if (key !== this.stonesKey) {
      this.createStones(width, height);
      this.stonesKey = key;
    }
    const sprite = this.getSprite();

    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;

    this.ctx.save();
    for (const stone of this.hailStones) {
      if (stone.bounces > 0) stone.vy += GRAVITY * deltaTime;
      stone.x += stone.vx * deltaTime;
      stone.y += stone.vy * deltaTime;

      // Bounce off the ground, losing most of the energy each time
      if (stone.y >= stone.ground && stone.vy > 0) {
        if (stone.bounces < 2) {
          stone.y = stone.ground;
          stone.vy = -stone.vy * (stone.bounces === 0 ? 0.3 : 0.25);
          stone.vx = (Math.random() - 0.5) * 60;
          stone.bounces++;
        } else {
          this.resetStone(stone, width, height);
        }
      }
      if (stone.x > width + 10) stone.x -= width + 20;
      if (stone.x < -10) stone.x += width + 20;

      const size = stone.size * 2;
      this.ctx.globalAlpha = HAIL_LAYERS[stone.layer].alpha;
      this.ctx.drawImage(sprite, stone.x - size / 2, stone.y - size / 2, size, size);
    }
    this.ctx.restore();
  }

  private createStones(width: number, height: number): void {
    this.hailStones = [];
    const area = (width * height) / 10000;
    HAIL_LAYERS.forEach((layer, index) => {
      const count = Math.min(200, Math.round(area * layer.density * this.quality.particles));
      for (let i = 0; i < count; i++) {
        const stone: HailStone = { layer: index, x: 0, y: 0, vx: 0, vy: 0, size: 0, ground: 0, bounces: 0 };
        this.resetStone(stone, width, height);
        stone.y = Math.random() * stone.ground;
        this.hailStones.push(stone);
      }
    });
  }

  private resetStone(stone: HailStone, width: number, height: number): void {
    const layer = HAIL_LAYERS[stone.layer];
    stone.x = Math.random() * width;
    stone.y = -10 - Math.random() * 40;
    stone.vy = layer.speed[0] + Math.random() * (layer.speed[1] - layer.speed[0]);
    stone.vx = stone.vy * 0.1;
    stone.size = layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]);
    // Far stones land higher up, as if further away
    stone.ground = height - 2 - (HAIL_LAYERS.length - 1 - stone.layer) * 6 - Math.random() * 4;
    stone.bounces = 0;
  }

  /**
   * Icy pellet with a bright core and a highlight, rendered once and reused for every stone
   */
  private getSprite(): HTMLCanvasElement {
    if (this.sprite) return this.sprite;
    const canvas = document.createElement('canvas');
    canvas.width = SPRITE_SIZE;
    canvas.height = SPRITE_SIZE;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const c = SPRITE_SIZE / 2;
      const body = ctx.createRadialGradient(c, c, 0, c, c, c);
      body.addColorStop(0, 'rgba(245, 250, 255, 1)');
      body.addColorStop(0.6, 'rgba(215, 230, 245, 0.95)');
      body.addColorStop(0.8, 'rgba(200, 220, 240, 0.5)');
      body.addColorStop(1, 'rgba(200, 220, 240, 0)');
      ctx.fillStyle = body;
      ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(c - c * 0.25, c - c * 0.25, c * 0.18, 0, Math.PI * 2);
      ctx.fill();
    }
    this.sprite = canvas;
    return canvas;
  }
}
