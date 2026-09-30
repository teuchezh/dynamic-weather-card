import { getSkyColors, rgb } from '../sky';
import type { RGBColor, TimeOfDay } from '../types';

interface CloudLayer {
  // Sprite scale relative to the base sprite size
  scale: number;
  // Horizontal drift in px/s
  speed: number;
  alpha: number;
  // Vertical band as a fraction of the card height
  top: number;
  bottom: number;
  // Clouds per 100px of card width at full coverage
  density: number;
  // Added to cloud thresholds: near clouds only appear at higher coverage
  bias: number;
}

interface Cloud {
  layer: number;
  sprite: number;
  // Position along the drift loop, 0..1
  offset: number;
  y: number;
  // Cloud is shown once coverage exceeds this, so clouds fade in/out as coverage changes
  threshold: number;
  bobPhase: number;
  flip: boolean;
}

const SPRITE_COUNT = 6;
const SPRITE_WIDTH = 240;
const SPRITE_HEIGHT = 120;

// Back to front: far clouds are small, faint and slow
const LAYERS: CloudLayer[] = [
  { scale: 0.55, speed: 3, alpha: 0.6, top: 0.02, bottom: 0.3, density: 1.4, bias: -0.1 },
  { scale: 0.8, speed: 6, alpha: 0.85, top: 0.08, bottom: 0.42, density: 0.9, bias: 0.1 },
  { scale: 1.15, speed: 10, alpha: 0.95, top: 0.15, bottom: 0.5, density: 0.55, bias: 0.25 }
];

// Deterministic pseudo-random numbers so a cloud's shape survives sprite re-renders
function seeded(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Layered, soft clouds drawn from pre-rendered sprites.
 * Shared by all weather animations; colors and coverage follow the condition and time of day.
 */
export class CloudField {
  private sprites: HTMLCanvasElement[] = [];
  private spriteKey = '';
  private clouds: Cloud[] = [];
  private cloudsSize = '';
  private coverage = -1;
  private targetCoverage = 0;
  private light: RGBColor = { r: 255, g: 255, b: 255 };
  private shade: RGBColor = { r: 200, g: 210, b: 220 };
  private lastTime = 0;

  /**
   * Update colors and target coverage for the current weather
   */
  setWeather(condition: string, timeOfDay: TimeOfDay): void {
    const sky = getSkyColors(condition, timeOfDay);
    this.light = sky.cloudLight;
    this.shade = sky.cloudShade;
    this.targetCoverage = sky.coverage;
    if (this.coverage < 0) this.coverage = sky.coverage;
  }

  /**
   * Jump to the target coverage without easing (used for still frames)
   */
  settle(): void {
    this.coverage = this.targetCoverage;
  }

  draw(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, layers: number = LAYERS.length): void {
    const dpr = ctx.getTransform().a || 1;
    this.ensureSprites(dpr);
    if (this.cloudsSize !== `${width}x${height}`) this.createClouds(width, height);
    // Smaller clouds on short cards (e.g. the minimal layout)
    const sizeScale = Math.max(0.35, Math.min(1, height / 200));

    // Ease coverage so clouds fade in/out when the weather changes
    const dt = this.lastTime ? Math.min(0.1, Math.max(0, time - this.lastTime)) : 0;
    this.lastTime = time;
    this.coverage += (this.targetCoverage - this.coverage) * Math.min(1, dt * 1.5);

    // Lower quality drops the far layers first
    const firstLayer = LAYERS.length - Math.max(1, Math.min(LAYERS.length, layers));

    for (const cloud of this.clouds) {
      if (cloud.layer < firstLayer) continue;
      const visibility = Math.max(0, Math.min(1, (this.coverage - cloud.threshold) * 6));
      if (visibility <= 0) continue;

      const layer = LAYERS[cloud.layer];
      const w = SPRITE_WIDTH * layer.scale * sizeScale;
      const h = SPRITE_HEIGHT * layer.scale * sizeScale;
      const loop = width + w * 2;
      const x = ((cloud.offset * loop + time * layer.speed) % loop) - w;
      const y = cloud.y * height + Math.sin(time * 0.15 + cloud.bobPhase) * 3 - h / 2;

      ctx.save();
      ctx.globalAlpha = layer.alpha * visibility;
      if (cloud.flip) {
        ctx.translate(x + w, y);
        ctx.scale(-1, 1);
        ctx.drawImage(this.sprites[cloud.sprite], 0, 0, w, h);
      } else {
        ctx.drawImage(this.sprites[cloud.sprite], x, y, w, h);
      }
      ctx.restore();
    }
  }

  private createClouds(width: number, height: number): void {
    const random = seeded(Math.round(width) * 7 + Math.round(height));
    this.clouds = [];
    LAYERS.forEach((layer, index) => {
      const count = Math.max(2, Math.round(width / 100 * layer.density));
      for (let i = 0; i < count; i++) {
        this.clouds.push({
          layer: index,
          sprite: Math.floor(random() * SPRITE_COUNT),
          offset: (i + random() * 0.6) / count,
          y: layer.top + random() * (layer.bottom - layer.top),
          // Spread thresholds so a few clouds show even at low coverage
          threshold: (i / count) * 0.8 + random() * 0.05 + layer.bias,
          bobPhase: random() * Math.PI * 2,
          flip: random() < 0.5
        });
      }
    });
    this.cloudsSize = `${width}x${height}`;
  }

  private ensureSprites(dpr: number): void {
    const key = [this.light.r, this.light.g, this.light.b, this.shade.r, this.shade.g, this.shade.b]
      .map(v => Math.round(v / 6))
      .join(',') + `@${dpr}`;
    if (key === this.spriteKey) return;
    this.spriteKey = key;
    this.sprites = Array.from({ length: SPRITE_COUNT }, (_, i) => this.renderSprite(i, dpr));
  }

  /**
   * Render one cumulus-like cloud: overlapping soft puffs with a dome-shaped top and a flatter base,
   * shaded from the lit top to the darker underside
   */
  private renderSprite(seed: number, dpr: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(SPRITE_WIDTH * dpr);
    canvas.height = Math.ceil(SPRITE_HEIGHT * dpr);
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;
    ctx.scale(dpr, dpr);

    const random = seeded(seed * 9973 + 17);
    const w = SPRITE_WIDTH;
    const h = SPRITE_HEIGHT;
    const base = h * 0.78;
    const puffs = 14 + Math.floor(random() * 6);

    const shapes: Array<{ x: number; y: number; r: number }> = [];
    for (let i = 0; i < puffs; i++) {
      // Wider spread near the base, taller puffs in the middle
      const u = random();
      const x = w * (0.2 + u * 0.6);
      const dome = Math.sin(u * Math.PI);
      const r = h * (0.16 + dome * (0.14 + random() * 0.12));
      // Keep every puff attached to the base so no loose blobs float around
      const y = base - r * (0.45 + random() * 0.25) - dome * h * 0.12;
      shapes.push({ x, y, r });

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(0.88, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Soften the flat base
    ctx.globalCompositeOperation = 'destination-in';
    const baseFade = ctx.createLinearGradient(0, 0, 0, h);
    baseFade.addColorStop(0, 'rgba(0, 0, 0, 1)');
    baseFade.addColorStop(0.72, 'rgba(0, 0, 0, 1)');
    baseFade.addColorStop(0.9, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = baseFade;
    ctx.fillRect(0, 0, w, h);

    // Lit top, shaded underside
    ctx.globalCompositeOperation = 'source-atop';
    const shading = ctx.createLinearGradient(0, h * 0.1, 0, base);
    shading.addColorStop(0, rgb(this.light));
    shading.addColorStop(0.45, rgb(this.light));
    shading.addColorStop(1, rgb(this.shade));
    ctx.fillStyle = shading;
    ctx.fillRect(0, 0, w, h);

    // Each puff catches light on its upper side, which gives the billowy look
    shapes
      .sort((a, b) => b.y - a.y)
      .forEach(({ x, y, r }) => {
        const hx = x - r * 0.15;
        const hy = y - r * 0.35;
        const highlight = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 0.85);
        highlight.addColorStop(0, rgb(this.light, 0.55));
        highlight.addColorStop(1, rgb(this.light, 0));
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(hx, hy, r * 0.85, 0, Math.PI * 2);
        ctx.fill();
      });

    return canvas;
  }
}
