/**
 * Base class for weather animations
 */
export class BaseAnimation {
  protected ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  /**
   * Draw a single cloud
   */
  drawCloud(x: number, y: number, size: number, opacity: number): void {
    const savedShadowBlur = this.ctx.shadowBlur;
    const savedShadowColor = this.ctx.shadowColor;
    const savedGlobalAlpha = this.ctx.globalAlpha;

    this.ctx.shadowBlur = size * 0.25;
    this.ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.4})`;
    this.ctx.globalAlpha = opacity * 0.85;
    this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';

    const parts = [
      // Bottom row
      { x: x, y: y, r: size * 0.4 },
      { x: x + size * 0.35, y: y, r: size * 0.5 },
      { x: x + size * 0.65, y: y, r: size * 0.48 },
      { x: x + size * 0.92, y: y, r: size * 0.38 },
      // Middle row
      { x: x + size * 0.18, y: y - size * 0.28, r: size * 0.38 },
      { x: x + size * 0.52, y: y - size * 0.32, r: size * 0.42 },
      { x: x + size * 0.78, y: y - size * 0.28, r: size * 0.38 },
      // Top row
      { x: x + size * 0.32, y: y - size * 0.42, r: size * 0.32 },
      { x: x + size * 0.62, y: y - size * 0.48, r: size * 0.36 },
      { x: x + size * 0.82, y: y - size * 0.42, r: size * 0.32 }
    ];

    parts.forEach(part => {
      this.ctx.beginPath();
      this.ctx.arc(part.x, part.y, part.r, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.ctx.shadowBlur = savedShadowBlur;
    this.ctx.shadowColor = savedShadowColor;
    this.ctx.globalAlpha = savedGlobalAlpha;
  }

  /**
   * Draw multiple clouds
   */
  drawClouds(time: number, width: number, height: number, density: number = 0.5): void {
    const cloudCount = Math.max(2, Math.floor(width / 150 * density));

    for (let i = 0; i < cloudCount; i++) {
      const baseX = ((time * 3 + i * 150) % (width + 200)) - 100;
      const baseY = height * (0.2 + (i % 3) * 0.15) + Math.sin(time * 0.2 + i) * 8;
      const size = 40 + (i % 3) * 15;
      const opacity = 0.6 + (i % 2) * 0.2;

      this.drawCloud(baseX, baseY, size, opacity);
    }
  }
}
