import { BaseAnimation } from './base.js';

/**
 * Snowy weather animation
 */
export class SnowyAnimation extends BaseAnimation {
  constructor(ctx) {
    super(ctx);
    this.snowflakes = [];
    this.lastTime = 0;
  }

  /**
   * Draw snowy weather
   * @param {{type: string, progress: number}} timeOfDay - Time of day info
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  draw(timeOfDay, width, height) {
    const time = Date.now() * 0.001;
    this.drawClouds(time, width, height, 0.7);
    this.drawSnowflakes(width, height);
  }

  /**
   * Draw snowflakes
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  drawSnowflakes(width, height) {
    // Calculate snowflake count based on area
    const snowflakeCount = Math.floor((width * height) / 5000);
    const targetCount = Math.max(30, Math.min(snowflakeCount, 80));

    // Initialize or adjust snowflakes
    if (this.snowflakes.length !== targetCount) {
      this.snowflakes = [];
      for (let i = 0; i < targetCount; i++) {
        this.snowflakes.push({
          x: Math.random() * width,
          y: Math.random() * height - Math.random() * 100,
          speedY: 15 + Math.random() * 10,
          speedX: (Math.random() - 0.5) * 8,
          size: 1.5 + Math.random() * 1.5,
          alpha: 0.6 + Math.random() * 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
          swayPhase: Math.random() * Math.PI * 2,
          swaySpeed: 0.5 + Math.random() * 0.5
        });
      }
    }

    // Calculate real delta time for smooth animation
    const currentTime = Date.now() * 0.001;
    const deltaTime = this.lastTime > 0 ? Math.min(currentTime - this.lastTime, 0.1) : 1 / 60;
    this.lastTime = currentTime;

    const time = currentTime;

    this.ctx.lineCap = 'round';

    for (let i = 0; i < this.snowflakes.length; i++) {
      const flake = this.snowflakes[i];

      // Update position with gentle swaying
      const sway = Math.sin(time * flake.swaySpeed + flake.swayPhase) * 2;
      flake.y += flake.speedY * deltaTime;
      flake.x += (flake.speedX + sway) * deltaTime;
      flake.rotation += flake.rotationSpeed * deltaTime;

      // Reset when off screen (smooth loop)
      if (flake.y > height + 20) {
        flake.y = -20 - Math.random() * 50;
        flake.x = Math.random() * width;
      }

      // Wrap horizontally
      if (flake.x < -10) {
        flake.x = width + 10;
      } else if (flake.x > width + 10) {
        flake.x = -10;
      }

      this.drawSnowflake(flake.x, flake.y, flake.size, flake.alpha, flake.rotation);
    }
  }

  /**
   * Draw a single snowflake
   * @param {number} x - X position
   * @param {number} y - Y position
   * @param {number} size - Snowflake size
   * @param {number} alpha - Opacity
   * @param {number} rotation - Rotation angle
   */
  drawSnowflake(x, y, size, alpha, rotation) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
    this.ctx.lineWidth = 1;

    // Optimize: draw all branches in a single path
    this.ctx.beginPath();

    // Draw 6-pointed snowflake
    for (let j = 0; j < 6; j++) {
      const angle = (Math.PI / 3) * j;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Main branch
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(sin * size * 2.5, cos * size * 2.5);

      // Side branches (rotated coordinates)
      const branch1X = sin * size * 1.5 + cos * size * 0.5;
      const branch1Y = cos * size * 1.5 - sin * size * 0.5;
      const branch1EndX = sin * size * 1.8 + cos * size * 1.2;
      const branch1EndY = cos * size * 1.8 - sin * size * 1.2;

      this.ctx.moveTo(branch1X, branch1Y);
      this.ctx.lineTo(branch1EndX, branch1EndY);

      const branch2X = sin * size * 1.5 - cos * size * 0.5;
      const branch2Y = cos * size * 1.5 + sin * size * 0.5;
      const branch2EndX = sin * size * 1.8 - cos * size * 1.2;
      const branch2EndY = cos * size * 1.8 + sin * size * 1.2;

      this.ctx.moveTo(branch2X, branch2Y);
      this.ctx.lineTo(branch2EndX, branch2EndY);
    }

    this.ctx.stroke();
    this.ctx.restore();
  }
}
