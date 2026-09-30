import type { QualitySettings } from './quality';

interface Gust {
  x: number;
  y: number;
  length: number;
  speed: number;
  amplitude: number;
  phase: number;
  age: number;
  life: number;
}

interface Leaf {
  x: number;
  y: number;
  speed: number;
  angle: number;
  spin: number;
  size: number;
  flutter: number;
  sprite: number;
}

const LEAF_COLORS_SUMMER = ['#6E9F3A', '#86B34A', '#5C8A2E'];
const LEAF_COLORS_AUTUMN = ['#D9892B', '#E3B23C', '#B8522A'];

/**
 * Wind: thin gust streaks sweeping across the sky and, for windy conditions, tumbling leaves
 */
export class WindEffect {
  private gusts: Gust[] = [];
  private leaves: Leaf[] = [];
  private sprites: HTMLCanvasElement[] = [];
  private spriteKey = '';
  private lastTime = 0;

  /**
   * @param strength - 0..1, how many gusts
   * @param withLeaves - draw flying leaves (windy conditions)
   * @param daylight - 1 = day, 0 = night; streaks and leaves are dimmer at night
   */
  draw(ctx: CanvasRenderingContext2D, time: number, width: number, height: number, strength: number, withLeaves: boolean, daylight: number, quality: QualitySettings): void {
    const dt = this.lastTime ? Math.min(0.1, Math.max(0, time - this.lastTime)) : 0;
    this.lastTime = time;
    const scale = Math.max(0.5, Math.min(1, height / 200));

    const gustTarget = Math.max(2, Math.round(width / 60 * strength * Math.max(0.5, quality.particles)));
    while (this.gusts.length < gustTarget) this.gusts.push(this.createGust(width, height, scale, true));
    if (this.gusts.length > gustTarget) this.gusts.length = gustTarget;

    ctx.save();
    ctx.lineCap = 'round';
    const brightness = 0.35 + daylight * 0.45;
    this.gusts = this.gusts.map(gust => {
      gust.age += dt;
      gust.x += gust.speed * dt;
      if (gust.age >= gust.life || gust.x - gust.length > width) return this.createGust(width, height, scale, false);
      this.drawGust(ctx, gust, brightness);
      return gust;
    });

    if (withLeaves && quality.details) {
      this.drawLeaves(ctx, dt, width, height, scale, daylight, quality);
    }
    ctx.restore();
  }

  private createGust(width: number, height: number, scale: number, anywhere: boolean): Gust {
    const length = (90 + Math.random() * 110) * scale;
    return {
      x: anywhere ? Math.random() * width : -length - Math.random() * width * 0.5,
      y: height * (0.1 + Math.random() * 0.75),
      length,
      speed: (260 + Math.random() * 200) * scale,
      amplitude: (3 + Math.random() * 6) * scale,
      phase: Math.random() * Math.PI * 2,
      age: 0,
      life: 1.4 + Math.random() * 1.6
    };
  }

  /**
   * A thin wavy line, fading in at the tail and the head, visible for part of its life
   */
  private drawGust(ctx: CanvasRenderingContext2D, gust: Gust, brightness: number): void {
    const fade = Math.sin(Math.min(1, gust.age / gust.life) * Math.PI);
    if (fade <= 0.02) return;
    const tail = gust.x - gust.length;
    const gradient = ctx.createLinearGradient(tail, 0, gust.x, 0);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.6, `rgba(255, 255, 255, ${0.85 * brightness * fade})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    const segments = 12;
    for (let i = 0; i <= segments; i++) {
      const x = tail + (gust.length * i) / segments;
      const y = gust.y + Math.sin(x * 0.035 + gust.phase) * gust.amplitude;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  private drawLeaves(ctx: CanvasRenderingContext2D, dt: number, width: number, height: number, scale: number, daylight: number, quality: QualitySettings): void {
    const dpr = ctx.getTransform().a || 1;
    this.ensureSprites(dpr);
    const target = Math.max(2, Math.round(width / 70 * quality.particles));
    while (this.leaves.length < target) this.leaves.push(this.createLeaf(width, height, scale, true));
    if (this.leaves.length > target) this.leaves.length = target;

    ctx.globalAlpha = 0.55 + daylight * 0.45;
    this.leaves = this.leaves.map(leaf => {
      leaf.x += leaf.speed * dt;
      leaf.flutter += dt * 3;
      leaf.y += Math.sin(leaf.flutter) * 30 * dt * scale + 12 * dt * scale;
      leaf.angle += leaf.spin * dt;
      if (leaf.x - leaf.size > width || leaf.y - leaf.size > height) return this.createLeaf(width, height, scale, false);

      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.angle);
      // Tumbling: the leaf turns edge-on and back
      ctx.scale(1, Math.max(0.15, Math.abs(Math.cos(leaf.flutter * 0.7))));
      ctx.drawImage(this.sprites[leaf.sprite], -leaf.size, -leaf.size / 2, leaf.size * 2, leaf.size);
      ctx.restore();
      return leaf;
    });
  }

  private createLeaf(width: number, height: number, scale: number, anywhere: boolean): Leaf {
    const size = (6 + Math.random() * 5) * scale;
    return {
      x: anywhere ? Math.random() * width : -size * 2 - Math.random() * width * 0.6,
      y: height * (0.1 + Math.random() * 0.7),
      speed: (140 + Math.random() * 120) * scale,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 4),
      size,
      flutter: Math.random() * Math.PI * 2,
      sprite: Math.floor(Math.random() * 3)
    };
  }

  /**
   * Leaf sprites in the colors of the season (autumn tones from September to November)
   */
  private ensureSprites(dpr: number): void {
    const month = new Date().getMonth();
    const colors = month >= 8 && month <= 10 ? LEAF_COLORS_AUTUMN : LEAF_COLORS_SUMMER;
    const key = `${colors[0]}@${dpr}`;
    if (key === this.spriteKey) return;
    this.spriteKey = key;
    this.sprites = colors.map(color => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.ceil(24 * dpr);
      canvas.height = Math.ceil(12 * dpr);
      const ctx = canvas.getContext('2d');
      if (!ctx) return canvas;
      ctx.scale(dpr, dpr);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(1, 6);
      ctx.quadraticCurveTo(12, -2, 23, 6);
      ctx.quadraticCurveTo(12, 14, 1, 6);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(2, 6);
      ctx.lineTo(22, 6);
      ctx.stroke();
      return canvas;
    });
  }
}
