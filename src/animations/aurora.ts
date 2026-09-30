import type { QualitySettings } from './quality';

interface AuroraBand {
  // Baseline height as a fraction of the card height
  base: number;
  // Curtain height as a fraction of the card height
  reach: number;
  phase: number;
  speed: number;
  alpha: number;
}

const BANDS: AuroraBand[] = [
  { base: 0.34, reach: 0.3, phase: 0, speed: 1, alpha: 1 },
  { base: 0.24, reach: 0.22, phase: 2.1, speed: -0.7, alpha: 0.7 },
  { base: 0.42, reach: 0.18, phase: 4.3, speed: 0.5, alpha: 0.5 }
];

/**
 * Northern lights: slowly waving curtains of vertical rays, bright green at the lower edge
 * fading into violet above. Each ray is one pre-rendered gradient column stretched into place.
 */
export class Aurora {
  private ray: HTMLCanvasElement | null = null;

  draw(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, quality: QualitySettings): void {
    const ray = this.getRay();
    // Thinner rays look smoother; low quality uses fewer, wider ones
    const step = quality.details ? (quality.particles >= 1 ? 3 : 5) : 8;
    const bands = quality.details ? BANDS.length : 1;
    // Slow fade in and out of the whole display, like real aurora activity
    const activity = 0.75 + Math.sin(time * 0.07) * 0.25;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let b = 0; b < bands; b++) {
      const band = BANDS[b];
      const t = time * band.speed;
      // Soft glow under the rays first, then the fine rays on top
      this.drawBand(ctx, ray, band, t, width, height, step * 5, activity * 0.5, false);
      this.drawBand(ctx, ray, band, t, width, height, step, activity, true);
    }
    ctx.restore();
  }

  private drawBand(ctx: CanvasRenderingContext2D, ray: HTMLCanvasElement, band: AuroraBand, t: number, width: number, height: number, step: number, activity: number, rays: boolean): void {
    for (let x = -step; x < width + step; x += step) {
      const u = x / Math.max(width, 1);
      // Baseline meanders across the sky and drifts over time
      const y = height * (band.base
        + Math.sin(u * 5.2 + t * 0.11 + band.phase) * 0.07
        + Math.sin(u * 13 - t * 0.19 + band.phase * 2) * 0.025);
      // Brighter and dimmer folds travel along the curtain; rays add a fine, faint striation
      const folds = (0.5 + 0.5 * Math.sin(u * 11 + t * 0.45 + band.phase))
        * (0.6 + 0.4 * Math.sin(u * 4.5 - t * 0.2 + band.phase));
      const shimmer = rays ? folds * (0.8 + 0.2 * Math.sin(u * 140 + t * 1.5)) : folds;
      const reach = height * band.reach * (0.65 + 0.35 * Math.sin(u * 21 + t * 0.5));
      // Curtains thin out towards their ends
      const edge = Math.min(1, Math.sin(Math.max(0, Math.min(1, u)) * Math.PI) * 1.6);
      const alpha = band.alpha * activity * edge * (0.08 + shimmer * 0.3);
      if (alpha <= 0.01) continue;
      ctx.globalAlpha = alpha;
      ctx.drawImage(ray, x, y - reach, step + 1, reach * 1.08);
    }
  }

  private getRay(): HTMLCanvasElement {
    if (this.ray) return this.ray;
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 128);
      gradient.addColorStop(0, 'rgba(150, 70, 255, 0)');
      gradient.addColorStop(0.35, 'rgba(140, 90, 255, 0.35)');
      gradient.addColorStop(0.65, 'rgba(60, 220, 190, 0.6)');
      gradient.addColorStop(0.88, 'rgba(90, 255, 160, 1)');
      gradient.addColorStop(0.93, 'rgba(170, 255, 200, 0.9)');
      gradient.addColorStop(1, 'rgba(90, 255, 160, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1, 128);
    }
    this.ray = canvas;
    return canvas;
  }
}
