import type { Position } from '../types';
import type { QualitySettings } from './quality';
import { Aurora } from './aurora';

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  start: number;
  x: number;
  y: number;
  angle: number;
}

const SYNODIC_MONTH = 29.530588853;
// A known new moon: 2000-01-06 18:14 UTC
const REFERENCE_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);
const MOON_RADIUS = 22;
const SHOOTING_DURATION = 0.9;

/**
 * Moon phase for a date: 0 = new moon, 0.25 = first quarter, 0.5 = full moon, 0.75 = last quarter
 */
export function getMoonPhase(date: Date = new Date()): number {
  const days = (date.getTime() - REFERENCE_NEW_MOON) / 86400000;
  const phase = (days / SYNODIC_MONTH) % 1;
  return phase < 0 ? phase + 1 : phase;
}

function seeded(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

/**
 * Night sky: twinkling stars of different sizes and tints, occasional shooting stars
 * and the moon in its real phase
 */
export class NightSky {
  private stars: Star[] = [];
  private starsKey = '';
  private moonSprite: HTMLCanvasElement | null = null;
  private moonKey = '';
  private shootingStar: ShootingStar | null = null;
  private nextShootingStar = 0;
  private aurora = new Aurora();

  draw(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, moonPos: Position, moonPhase: number, quality: QualitySettings, aurora = false): void {
    this.drawStars(ctx, time, width, height, quality);
    if (aurora) this.aurora.draw(ctx, time, width, height, quality);
    if (quality.details) this.drawShootingStar(ctx, time, width, height);
    this.drawMoon(ctx, moonPos, moonPhase, height);
  }

  private drawStars(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, quality: QualitySettings): void {
    const key = `${Math.round(width)}x${Math.round(height)}:${quality.particles}`;
    if (key !== this.starsKey) {
      this.createStars(width, height, quality.particles);
      this.starsKey = key;
    }

    ctx.save();
    for (const star of this.stars) {
      const twinkle = 0.65 + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.35;
      // Fainter towards the horizon
      const horizon = 1 - (star.y / height) * 0.6;
      ctx.globalAlpha = star.alpha * twinkle * horizon;
      ctx.fillStyle = star.color;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      // Soft glow around the brightest stars
      if (quality.details && star.size > 1.1) {
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.35)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  private createStars(width: number, height: number, density: number): void {
    const random = seeded(Math.round(width) * 31 + Math.round(height));
    const count = Math.max(20, Math.min(260, Math.round((width * height) / 1600 * density)));
    this.stars = [];
    for (let i = 0; i < count; i++) {
      const tint = random();
      this.stars.push({
        x: random() * width,
        // More stars high in the sky
        y: Math.pow(random(), 1.4) * height * 0.9,
        // Mostly tiny stars, a few bright ones
        size: 0.35 + Math.pow(random(), 3) * 1.2,
        alpha: 0.45 + random() * 0.55,
        twinkleSpeed: 0.5 + random() * 2,
        twinklePhase: random() * Math.PI * 2,
        color: tint < 0.15 ? 'rgb(200, 215, 255)' : tint < 0.3 ? 'rgb(255, 236, 210)' : 'rgb(255, 255, 255)'
      });
    }
  }

  /**
   * A short bright streak crossing the upper sky every 8-22 seconds
   */
  private drawShootingStar(ctx: CanvasRenderingContext2D, time: number, width: number, height: number): void {
    if (!this.nextShootingStar) this.nextShootingStar = time + 4 + Math.random() * 8;

    if (!this.shootingStar && time >= this.nextShootingStar) {
      this.shootingStar = {
        start: time,
        x: width * (0.15 + Math.random() * 0.7),
        y: height * (0.05 + Math.random() * 0.3),
        angle: Math.PI * (0.12 + Math.random() * 0.12) * (Math.random() < 0.5 ? 1 : -1) + (Math.random() < 0.5 ? 0 : Math.PI)
      };
      this.nextShootingStar = time + 8 + Math.random() * 14;
    }

    const star = this.shootingStar;
    if (!star) return;
    const t = (time - star.start) / SHOOTING_DURATION;
    if (t >= 1) {
      this.shootingStar = null;
      return;
    }

    const travel = Math.min(220, width * 0.45);
    const dx = Math.cos(star.angle);
    const dy = Math.abs(Math.sin(star.angle));
    const headX = star.x + dx * travel * t;
    const headY = star.y + dy * travel * t;
    const tail = 60 * Math.sin(t * Math.PI);
    const alpha = Math.sin(t * Math.PI);

    const trail = ctx.createLinearGradient(headX, headY, headX - dx * tail, headY - dy * tail);
    trail.addColorStop(0, `rgba(255, 255, 255, ${0.9 * alpha})`);
    trail.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.save();
    ctx.strokeStyle = trail;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(headX, headY);
    ctx.lineTo(headX - dx * tail, headY - dy * tail);
    ctx.stroke();
    ctx.restore();
  }

  private drawMoon(ctx: CanvasRenderingContext2D, pos: Position, phase: number, height: number): void {
    const scale = Math.max(0.5, Math.min(1, height / 200));
    const radius = MOON_RADIUS * scale;
    // Fraction of the disc that is lit: 0 at new moon, 1 at full moon
    const illumination = (1 - Math.cos(phase * Math.PI * 2)) / 2;

    // Glow, brighter around a fuller moon
    const glow = ctx.createRadialGradient(pos.x, pos.y, radius * 0.8, pos.x, pos.y, radius * 3.5);
    glow.addColorStop(0, `rgba(220, 230, 255, ${0.08 + illumination * 0.18})`);
    glow.addColorStop(1, 'rgba(220, 230, 255, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius * 3.5, 0, Math.PI * 2);
    ctx.fill();

    const sprite = this.getMoonSprite(phase, ctx.getTransform().a || 1);
    const size = (MOON_RADIUS + 2) * 2 * scale;
    ctx.drawImage(sprite, pos.x - size / 2, pos.y - size / 2, size, size);
  }

  /**
   * Render the moon once per phase step: faint earthshine disc, lit part bounded by the terminator,
   * darker maria and limb darkening
   */
  private getMoonSprite(phase: number, dpr: number): HTMLCanvasElement {
    const key = `${Math.round(phase * 200)}@${dpr}`;
    if (this.moonSprite && key === this.moonKey) return this.moonSprite;

    const r = MOON_RADIUS;
    const size = (r + 2) * 2;
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(size * dpr);
    canvas.height = Math.ceil(size * dpr);
    const ctx = canvas.getContext('2d');
    this.moonSprite = canvas;
    this.moonKey = key;
    if (!ctx) return canvas;
    ctx.scale(dpr, dpr);
    const c = size / 2;

    // Earthshine: the dark side stays faintly visible
    ctx.fillStyle = 'rgba(160, 175, 205, 0.14)';
    ctx.beginPath();
    ctx.arc(c, c, r, 0, Math.PI * 2);
    ctx.fill();

    // Lit part; waxing moon is lit on the right, waning on the left
    const k = Math.cos(phase * Math.PI * 2);
    ctx.save();
    if (phase > 0.5) {
      ctx.translate(size, 0);
      ctx.scale(-1, 1);
    }
    ctx.beginPath();
    ctx.arc(c, c, r, -Math.PI / 2, Math.PI / 2, false);
    // Terminator: bulges towards the lit side for a crescent, away from it for a gibbous moon
    ctx.ellipse(c, c, Math.max(0.01, r * Math.abs(k)), r, 0, Math.PI / 2, -Math.PI / 2, k > 0);
    ctx.closePath();
    ctx.restore();

    const lit = ctx.createRadialGradient(c - r * 0.3, c - r * 0.3, 0, c, c, r);
    lit.addColorStop(0, '#FFFEF6');
    lit.addColorStop(1, '#E2E0D6');
    ctx.fillStyle = lit;
    ctx.fill();

    // Maria and limb darkening only on the lit part
    ctx.save();
    ctx.clip();
    for (const [mx, my, mr] of [[-0.3, -0.2, 0.34], [0.12, -0.38, 0.24], [0.28, 0.12, 0.32], [-0.18, 0.34, 0.22], [0.48, -0.12, 0.16]]) {
      const x = c + mx * r;
      const y = c + my * r;
      const mare = ctx.createRadialGradient(x, y, 0, x, y, mr * r);
      mare.addColorStop(0, 'rgba(135, 140, 148, 0.3)');
      mare.addColorStop(0.6, 'rgba(135, 140, 148, 0.18)');
      mare.addColorStop(1, 'rgba(135, 140, 148, 0)');
      ctx.fillStyle = mare;
      ctx.fillRect(x - mr * r, y - mr * r, mr * r * 2, mr * r * 2);
    }
    const limb = ctx.createRadialGradient(c, c, r * 0.6, c, c, r);
    limb.addColorStop(0, 'rgba(0, 0, 0, 0)');
    limb.addColorStop(1, 'rgba(60, 60, 70, 0.18)');
    ctx.fillStyle = limb;
    ctx.fillRect(0, 0, size, size);
    ctx.restore();

    return canvas;
  }
}
