import { BaseAnimation } from './base';
import { TimeOfDay } from '../types';

interface RainDrop {
  layer: number;
  x: number;
  y: number;
  speed: number;
  length: number;
}

interface Splash {
  x: number;
  y: number;
  age: number;
  size: number;
}

interface RainLayer {
  // Drops per 10,000 px² (light rain; heavy rain doubles it)
  density: number;
  speed: [number, number];
  length: [number, number];
  width: number;
  alpha: number;
}

// Back to front: far drops are short, thin, faint and slower
const RAIN_LAYERS: RainLayer[] = [
  { density: 6, speed: [380, 460], length: [8, 12], width: 0.6, alpha: 0.28 },
  { density: 3.5, speed: [560, 680], length: [14, 20], width: 0.9, alpha: 0.42 },
  { density: 1.4, speed: [820, 980], length: [22, 30], width: 1.3, alpha: 0.58 }
];
// Horizontal drift per vertical px (wind)
const SLANT = 0.12;
const SPLASH_DURATION = 0.3;

/**
 * Rainy weather animation
 */
export class RainyAnimation extends BaseAnimation {
  private rainDrops: RainDrop[] = [];
  private splashes: Splash[] = [];
  private lastTime: number = 0;
  private dropsKey = '';

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
   * Draw rain as slanted streaks in three depth layers, with splashes where near drops land
   * @param width - Canvas width
   * @param height - Canvas height
   * @param heavy - Heavy rain flag
   */
  drawRain(width: number, height: number, heavy: boolean): void {
    const key = `${Math.round(width)}x${Math.round(height)}:${heavy}:${this.quality.particles}`;
    if (key !== this.dropsKey) {
      this.createDrops(width, height, heavy);
      this.dropsKey = key;
    }

    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;

    this.ctx.save();
    this.ctx.lineCap = 'round';

    // One path per layer keeps this cheap even with hundreds of drops
    RAIN_LAYERS.forEach((layer, index) => {
      this.ctx.beginPath();
      for (const drop of this.rainDrops) {
        if (drop.layer !== index) continue;

        drop.y += drop.speed * deltaTime;
        drop.x += drop.speed * SLANT * deltaTime;

        if (drop.y - drop.length > height) {
          if (this.quality.details && index === RAIN_LAYERS.length - 1 && Math.random() < (heavy ? 0.7 : 0.4)) {
            this.splashes.push({ x: drop.x - (drop.y - height) * SLANT, y: height - 2 - Math.random() * 6, age: 0, size: 3 + Math.random() * 3 });
          }
          this.resetDrop(drop, width);
        }
        if (drop.x > width + 20) drop.x -= width + 40;

        this.ctx.moveTo(drop.x - drop.length * SLANT, drop.y - drop.length);
        this.ctx.lineTo(drop.x, drop.y);
      }
      this.ctx.strokeStyle = `rgba(215, 228, 242, ${layer.alpha * (heavy ? 1.15 : 1)})`;
      this.ctx.lineWidth = layer.width;
      this.ctx.stroke();
    });

    this.drawSplashes(deltaTime);
    this.ctx.restore();
  }

  private createDrops(width: number, height: number, heavy: boolean): void {
    this.rainDrops = [];
    this.splashes = [];
    const area = (width * height) / 10000;
    RAIN_LAYERS.forEach((layer, index) => {
      const count = Math.min(400, Math.round(area * layer.density * (heavy ? 2 : 1) * this.quality.particles));
      for (let i = 0; i < count; i++) {
        const drop: RainDrop = { layer: index, x: 0, y: 0, speed: 0, length: 0 };
        this.resetDrop(drop, width);
        // Spread initial drops over the whole card
        drop.y = Math.random() * (height + drop.length);
        this.rainDrops.push(drop);
      }
    });
  }

  private resetDrop(drop: RainDrop, width: number): void {
    const layer = RAIN_LAYERS[drop.layer];
    drop.speed = layer.speed[0] + Math.random() * (layer.speed[1] - layer.speed[0]);
    drop.length = layer.length[0] + Math.random() * (layer.length[1] - layer.length[0]);
    drop.y = -Math.random() * 40;
    // Start further left so the slant does not leave the left edge empty
    drop.x = Math.random() * (width + 40) - 40;
  }

  /**
   * Small expanding arcs with a couple of droplets where near drops hit the bottom
   */
  private drawSplashes(deltaTime: number): void {
    this.splashes = this.splashes.filter(splash => (splash.age += deltaTime) < SPLASH_DURATION);
    if (this.splashes.length > 60) this.splashes.splice(0, this.splashes.length - 60);

    this.ctx.lineWidth = 0.8;
    for (const splash of this.splashes) {
      const t = splash.age / SPLASH_DURATION;
      const radius = splash.size * (0.4 + t);
      this.ctx.strokeStyle = `rgba(220, 232, 245, ${0.45 * (1 - t)})`;
      this.ctx.beginPath();
      this.ctx.ellipse(splash.x, splash.y, radius, radius * 0.35, 0, Math.PI, 0);
      this.ctx.stroke();

      // Droplets thrown up and falling back
      const rise = Math.sin(t * Math.PI) * splash.size * 1.2;
      this.ctx.fillStyle = `rgba(220, 232, 245, ${0.5 * (1 - t)})`;
      this.ctx.fillRect(splash.x - radius * 0.8, splash.y - rise, 1, 1);
      this.ctx.fillRect(splash.x + radius * 0.7, splash.y - rise * 0.8, 1, 1);
    }
  }
}
