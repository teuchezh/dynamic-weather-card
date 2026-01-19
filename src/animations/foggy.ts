import { BaseAnimation } from './base';
import { TimeOfDay } from '../types';

/**
 * Foggy weather animation
 */
export class FoggyAnimation extends BaseAnimation {
  /**
   * Draw foggy weather
   * @param time - Animation time (unused, for interface compatibility)
   * @param width - Canvas width
   * @param height - Canvas height
   * @param timeOfDay - Time of day info
   */
  draw(time: number, width: number, height: number, _timeOfDay: TimeOfDay): void {
    const currentTime = Date.now() * 0.0003;
    this.ctx.fillStyle = 'rgba(200, 200, 200, 0.4)';

    // Draw fog layers
    for (let i = 0; i < 3; i++) {
      const y = height * (0.4 + i * 0.2);
      const offset = Math.sin(currentTime + i) * 20;

      this.ctx.beginPath();
      this.ctx.moveTo(0, y);

      for (let x = 0; x <= width; x += 5) {
        const wave = Math.sin((x / width + currentTime) * Math.PI * 4 + i) * 15;
        this.ctx.lineTo(x, y + wave + offset);
      }

      this.ctx.lineTo(width, height);
      this.ctx.lineTo(0, height);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }
}
