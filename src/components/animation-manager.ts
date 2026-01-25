import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import type { TimeOfDay } from '../types.js';

interface Animations {
  sunny: SunnyAnimation;
  rainy: RainyAnimation;
  snowy: SnowyAnimation;
  cloudy: CloudyAnimation;
  foggy: FoggyAnimation;
  hail: HailAnimation;
  thunderstorm: ThunderstormAnimation;
}

export class AnimationManager {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrame: number | null = null;
  private animations: Partial<Animations> = {};
  private resizeObserver: ResizeObserver | null = null;
  private width: number = 0;
  private height: number = 0;
  private container: Element | null = null;
  private getDrawParams: () => { condition: string; timeOfDay: TimeOfDay } | null;

  constructor(getDrawParams: () => { condition: string; timeOfDay: TimeOfDay } | null) {
    this.getDrawParams = getDrawParams;
  }

  setup(container: Element): void {
    this.container = container;
    this.setupCanvas();
    if (this.canvas && this.ctx) {
      this.initializeAnimations();
      this.startAnimation();
      this.setupResizeObserver();
    }
  }

  destroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.canvas = null;
    this.ctx = null;
    this.container = null;
  }

  resize(): void {
    if (this.canvas && this.ctx) {
      this.resizeCanvas();
    }
  }

  private setupCanvas(): void {
    if (!this.container) return;

    const oldCanvas = this.container.querySelector('canvas');
    if (oldCanvas) {
      oldCanvas.remove();
    }

    this.canvas = document.createElement('canvas');
    this.container.appendChild(this.canvas);
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    if (!this.canvas || !this.container) return;

    const rect = this.container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 2;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

    this.ctx = this.canvas.getContext('2d');
    if (this.ctx) {
      this.ctx.scale(dpr, dpr);
    }

    this.width = rect.width;
    this.height = rect.height;

    this.initializeAnimations();
  }

  private setupResizeObserver(): void {
    if (!this.container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(this.container);
  }

  private initializeAnimations(): void {
    if (!this.ctx) return;

    this.animations = {
      sunny: new SunnyAnimation(this.ctx),
      rainy: new RainyAnimation(this.ctx),
      snowy: new SnowyAnimation(this.ctx),
      cloudy: new CloudyAnimation(this.ctx),
      foggy: new FoggyAnimation(this.ctx),
      hail: new HailAnimation(this.ctx),
      thunderstorm: new ThunderstormAnimation(this.ctx)
    };
  }

  private startAnimation(): void {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  private draw(): void {
    if (!this.ctx || !this.canvas) return;
    if (!this.width || !this.height) {
      this.resizeCanvas();
      if (!this.width || !this.height) return;
    }

    const params = this.getDrawParams();
    if (!params) return;

    const { condition, timeOfDay } = params;
    const width = this.width;
    const height = this.height;

    this.ctx.clearRect(0, 0, width, height);

    const conditionLower = condition.toLowerCase();

    switch (conditionLower) {
      case 'sunny':
      case 'clear':
        this.animations.sunny?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'clear-night':
        this.animations.sunny?.draw(Date.now(), width, height, { type: 'night', progress: 0 });
        break;
      case 'rainy':
      case 'rain':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case 'pouring':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case 'snowy':
      case 'snow':
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'snowy-rainy':
        this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
        this.animations.snowy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'hail':
        this.animations.hail?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'foggy':
      case 'fog':
        this.animations.foggy?.draw(Date.now(), width, height, timeOfDay);
        break;
      case 'lightning':
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, false);
        break;
      case 'lightning-rainy':
        this.animations.thunderstorm?.draw(Date.now(), width, height, timeOfDay, true);
        break;
      case 'cloudy':
      case 'partlycloudy':
      default:
        this.animations.cloudy?.draw(Date.now(), width, height, timeOfDay);
        break;
    }
  }
}
