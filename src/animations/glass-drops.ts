import type { QualitySettings } from './quality';

interface Bead {
  x: number;
  y: number;
  r: number;
  age: number;
  life: number;
}

interface Runner {
  x: number;
  y: number;
  r: number;
  // Stick-slip: waits, then slides for a while
  wait: number;
  speed: number;
  wobble: number;
  lastTrail: number;
}

const SPRITE_RADIUS = 16;
const FADE = 0.8;

/**
 * Raindrops on the "glass" in front of the card: beads that appear and dry up,
 * and bigger drops that stick, slide down in jerks and leave a trail of small beads
 */
export class GlassDrops {
  private sprite: HTMLCanvasElement | null = null;
  private spriteDpr = 0;
  private beads: Bead[] = [];
  private runners: Runner[] = [];
  private size = '';
  private lastTime = 0;

  draw(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, intensity: number, quality: QualitySettings): void {
    const dpr = ctx.getTransform().a || 1;
    const sprite = this.getSprite(dpr);
    const scale = Math.max(0.6, Math.min(1, height / 200));
    const beadTarget = Math.round((width * height) / 2600 * intensity * quality.particles);
    const runnerTarget = Math.max(1, Math.round(width / 130 * intensity * quality.particles));

    const size = `${Math.round(width)}x${Math.round(height)}`;
    if (size !== this.size) {
      this.size = size;
      this.beads = [];
      this.runners = [];
      // Start with a wet window instead of an empty one
      for (let i = 0; i < beadTarget; i++) {
        const bead = this.createBead(width, height, scale);
        bead.age = Math.random() * bead.life;
        this.beads.push(bead);
      }
    }

    const dt = this.lastTime ? Math.min(0.1, Math.max(0, time - this.lastTime)) : 0;
    this.lastTime = time;

    // New drops keep landing
    if (this.beads.length < beadTarget && Math.random() < dt * beadTarget * 0.4) {
      this.beads.push(this.createBead(width, height, scale));
    }
    while (this.runners.length < runnerTarget) {
      this.runners.push(this.createRunner(width, height, scale, true));
    }

    ctx.save();
    this.beads = this.beads.filter(bead => (bead.age += dt) < bead.life);
    for (const bead of this.beads) {
      // Fade in when landing, dry up at the end
      const alpha = Math.min(1, bead.age / 0.25, (bead.life - bead.age) / FADE);
      this.drawDrop(ctx, sprite, bead.x, bead.y, bead.r, bead.r, alpha);
    }

    for (const runner of this.runners) {
      if (runner.wait > 0) {
        runner.wait -= dt;
      } else {
        runner.y += runner.speed * dt;
        runner.x += Math.sin(runner.y * 0.08 + runner.wobble) * 6 * dt;
        // Slides in bursts
        if (Math.random() < dt * 0.8) runner.wait = 0.2 + Math.random() * 1.2;
        // Leaves small beads behind
        if (runner.y - runner.lastTrail > runner.r * (2 + Math.random() * 2) && this.beads.length < beadTarget * 1.6) {
          runner.lastTrail = runner.y;
          this.beads.push({
            x: runner.x + (Math.random() - 0.5) * runner.r * 1.2,
            y: runner.y - runner.r * (1.2 + Math.random() * 0.6),
            r: runner.r * (0.25 + Math.random() * 0.25),
            age: 0.25,
            life: 2 + Math.random() * 3
          });
        }
      }
      const stretch = runner.wait > 0 ? 1.05 : 1.3;
      this.drawDrop(ctx, sprite, runner.x, runner.y, runner.r, runner.r * stretch, 1);
    }
    ctx.restore();

    this.runners = this.runners.map(runner => (runner.y - runner.r > height ? this.createRunner(width, height, scale, false) : runner));
  }

  private drawDrop(ctx: CanvasRenderingContext2D, sprite: HTMLCanvasElement, x: number, y: number, rx: number, ry: number, alpha: number): void {
    ctx.globalAlpha = alpha;
    ctx.drawImage(sprite, x - rx, y - ry, rx * 2, ry * 2);
  }

  private createBead(width: number, height: number, scale: number): Bead {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: (1.3 + Math.pow(Math.random(), 2) * 3.4) * scale,
      age: 0,
      life: 4 + Math.random() * 12
    };
  }

  private createRunner(width: number, height: number, scale: number, anywhere: boolean): Runner {
    const r = (4 + Math.random() * 3) * scale;
    return {
      x: Math.random() * width,
      y: anywhere ? Math.random() * height * 0.8 : -r - Math.random() * height * 0.3,
      r,
      wait: Math.random() * 3,
      speed: 25 + Math.random() * 45,
      wobble: Math.random() * Math.PI * 2,
      lastTrail: -Infinity
    };
  }

  /**
   * One drop, rendered once: a mostly clear lens with a darker rim, light gathered at the bottom
   * and a small specular highlight at the top
   */
  private getSprite(dpr: number): HTMLCanvasElement {
    if (this.sprite && this.spriteDpr === dpr) return this.sprite;
    const r = SPRITE_RADIUS;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = Math.ceil(r * 2 * dpr);
    const ctx = canvas.getContext('2d');
    this.sprite = canvas;
    this.spriteDpr = dpr;
    if (!ctx) return canvas;
    ctx.scale(dpr, dpr);

    const body = ctx.createRadialGradient(r, r - 2, 0, r, r, r);
    body.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    body.addColorStop(0.65, 'rgba(255, 255, 255, 0.18)');
    body.addColorStop(0.86, 'rgba(15, 25, 40, 0.45)');
    body.addColorStop(1, 'rgba(15, 25, 40, 0)');
    ctx.fillStyle = body;
    ctx.fillRect(0, 0, r * 2, r * 2);

    const glow = ctx.createRadialGradient(r, r * 1.45, 0, r, r * 1.45, r * 0.55);
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, r * 2, r * 2);

    const hx = r * 0.68;
    const hy = r * 0.62;
    const highlight = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 0.3);
    highlight.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = highlight;
    ctx.fillRect(0, 0, r * 2, r * 2);

    return canvas;
  }
}
