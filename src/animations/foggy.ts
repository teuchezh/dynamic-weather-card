import { BaseAnimation } from './base';
import { getSkyColors, rgb } from '../sky';
import { TimeOfDay, RGBColor } from '../types';

interface FogBank {
  // Vertical center as a fraction of the card height
  y: number;
  // Drift in px/s (negative = to the left)
  speed: number;
  alpha: number;
  scaleY: number;
  seed: number;
}

// Back to front
const FOG_BANKS: FogBank[] = [
  { y: 0.3, speed: 5, alpha: 0.55, scaleY: 0.9, seed: 1 },
  { y: 0.58, speed: -8, alpha: 0.6, scaleY: 1.1, seed: 2 },
  { y: 0.85, speed: 12, alpha: 0.6, scaleY: 1.3, seed: 3 }
];
const SPRITE_WIDTH = 600;
const SPRITE_HEIGHT = 140;

function seeded(seed: number): () => number {
  let state = seed * 7919;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Foggy weather animation: soft fog banks drifting at different speeds over a low haze
 */
export class FoggyAnimation extends BaseAnimation {
  private sprites: HTMLCanvasElement[] = [];
  private spriteKey = '';

  /**
   * Draw foggy weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   */
  draw(time: number, width: number, height: number, timeOfDay: TimeOfDay): void {
    const currentTime = Date.now() * 0.001;
    const color = getSkyColors('foggy', timeOfDay).cloudLight;
    this.ensureSprites(color);

    // Haze thickening towards the ground
    const haze = this.ctx.createLinearGradient(0, height * 0.25, 0, height);
    haze.addColorStop(0, rgb(color, 0));
    haze.addColorStop(1, rgb(color, 0.2));
    this.ctx.fillStyle = haze;
    this.ctx.fillRect(0, 0, width, height);

    // Fog banks scale with the card height so short cards are not swamped
    const sizeScale = Math.max(0.4, Math.min(1.2, height / 200));
    FOG_BANKS.forEach((bank, index) => {
      const w = SPRITE_WIDTH * sizeScale;
      const h = SPRITE_HEIGHT * sizeScale * bank.scaleY;
      const y = bank.y * height - h / 2 + Math.sin(currentTime * 0.2 + index) * 4;
      // Seamless horizontal tiling
      let x = (currentTime * bank.speed) % w;
      if (x > 0) x -= w;

      this.ctx.save();
      this.ctx.globalAlpha = bank.alpha;
      for (; x < width; x += w) {
        this.ctx.drawImage(this.sprites[index], x, y, w, h);
      }
      this.ctx.restore();
    });
  }

  private ensureSprites(color: RGBColor): void {
    const dpr = this.ctx.getTransform().a || 1;
    const key = `${Math.round(color.r / 6)},${Math.round(color.g / 6)},${Math.round(color.b / 6)}@${dpr}`;
    if (key === this.spriteKey) return;
    this.spriteKey = key;
    this.sprites = FOG_BANKS.map(bank => this.renderSprite(bank.seed, color, dpr));
  }

  /**
   * A long band of overlapping, flattened soft blobs that tiles seamlessly left to right
   */
  private renderSprite(seed: number, color: RGBColor, dpr: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(SPRITE_WIDTH * dpr);
    canvas.height = Math.ceil(SPRITE_HEIGHT * dpr);
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;
    ctx.scale(dpr, dpr);

    const random = seeded(seed);
    // Uneven blobs: dense wisps with thinner gaps between them
    const blobs = 16;
    for (let i = 0; i < blobs; i++) {
      const x = (i / blobs) * SPRITE_WIDTH + random() * 30;
      const y = SPRITE_HEIGHT * (0.35 + random() * 0.3);
      const r = SPRITE_HEIGHT * (0.2 + random() * 0.3);
      const alpha = 0.25 + random() * 0.65;
      // Also draw wrapped copies near the edges so tiles join without seams
      for (const offset of [-SPRITE_WIDTH, 0, SPRITE_WIDTH]) {
        const cx = x + offset;
        if (cx + r * 2.2 < 0 || cx - r * 2.2 > SPRITE_WIDTH) continue;
        ctx.save();
        ctx.translate(cx, y);
        ctx.scale(2.2, 0.55);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        gradient.addColorStop(0, rgb(color, alpha));
        gradient.addColorStop(1, rgb(color, 0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    return canvas;
  }
}
