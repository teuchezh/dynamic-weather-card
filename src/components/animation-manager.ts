import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import { CloudField } from '../animations/clouds.js';
import { ClassicAnimations } from '../animations/classic/index.js';
import { QUALITY_PRESETS, createQualitySettings, type AnimationQuality } from '../animations/quality.js';
import type { TimeOfDay, PositionOverride, VisualStyle } from '../types.js';

interface Animations {
  sunny: SunnyAnimation;
  rainy: RainyAnimation;
  snowy: SnowyAnimation;
  cloudy: CloudyAnimation;
  foggy: FoggyAnimation;
  hail: HailAnimation;
  thunderstorm: ThunderstormAnimation;
}

export interface DrawParams {
  condition: string;
  timeOfDay: TimeOfDay;
  sunPosition?: PositionOverride;
  moonPhase?: number;
  visualStyle?: VisualStyle;
  quality?: AnimationQuality;
}

export class AnimationManager {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrame: number | null = null;
  private animations: Partial<Animations> = {};
  private cloudField = new CloudField();
  // Created on first use, only when the classic style is selected
  private classic: ClassicAnimations | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private onScreen = true;
  private qualityName: AnimationQuality = 'high';
  // Shared with all animations and updated in place when the quality changes
  private quality = createQualitySettings('high');
  private lastFrameTime = -Infinity;
  private width: number = 0;
  private height: number = 0;
  private container: Element | null = null;
  private getDrawParams: () => DrawParams | null;
  private handleVisibilityChange = (): void => {
    this.updateRunning();
  };

  constructor(getDrawParams: () => DrawParams | null) {
    this.getDrawParams = getDrawParams;
  }

  setup(container: Element): void {
    this.container = container;
    this.setupCanvas();
    if (this.canvas && this.ctx) {
      this.initializeAnimations();
      this.startAnimation();
      this.setupResizeObserver();
      this.setupIntersectionObserver();
      document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
  }

  destroy(): void {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.stopAnimation();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
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

    const dpr = Math.min(window.devicePixelRatio || 2, this.quality.maxDpr);
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

  /**
   * Pause while the card is scrolled out of view (or on a hidden dashboard view)
   */
  private setupIntersectionObserver(): void {
    if (!this.container || typeof IntersectionObserver === 'undefined') return;

    this.intersectionObserver = new IntersectionObserver(entries => {
      this.onScreen = entries.some(entry => entry.isIntersecting);
      this.updateRunning();
    });
    this.intersectionObserver.observe(this.container);
  }

  private updateRunning(): void {
    if (document.hidden || !this.onScreen) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  private applyQuality(name: AnimationQuality): void {
    if (name === this.qualityName || !QUALITY_PRESETS[name]) return;
    const previousDpr = this.quality.maxDpr;
    this.qualityName = name;
    Object.assign(this.quality, QUALITY_PRESETS[name]);
    if (this.quality.maxDpr !== previousDpr) this.resizeCanvas();
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
    this.classic = null;
    Object.values(this.animations).forEach(animation => {
      animation.attach(this.cloudField, this.quality);
    });
  }

  private startAnimation(): void {
    if (this.animationFrame) return;
    const animate = (now: number = 0) => {
      // Frame rate cap; the small tolerance keeps 60 fps from dropping frames on 60 Hz screens
      if (now - this.lastFrameTime >= 1000 / this.quality.fps - 2) {
        this.lastFrameTime = now;
        this.draw();
      }
      this.animationFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  private stopAnimation(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private draw(): void {
    if (!this.ctx || !this.canvas) return;
    if (!this.width || !this.height) {
      this.resizeCanvas();
      if (!this.width || !this.height) return;
    }

    const params = this.getDrawParams();
    if (!params) return;
    this.applyQuality(params.quality ?? 'high');

    const { condition, timeOfDay, sunPosition, moonPhase, visualStyle } = params;
    const width = this.width;
    const height = this.height;

    this.ctx.clearRect(0, 0, width, height);

    const conditionLower = condition.toLowerCase();

    if (visualStyle === 'classic') {
      this.classic ??= new ClassicAnimations(this.ctx);
      this.classic.draw(conditionLower, width, height, timeOfDay, sunPosition);
      return;
    }

    this.cloudField.setWeather(conditionLower, timeOfDay);

    switch (conditionLower) {
      case 'sunny':
      case 'clear':
      case 'partlycloudy':
        this.animations.sunny?.draw(Date.now(), width, height, timeOfDay, sunPosition, moonPhase);
        break;
      case 'clear-night':
        this.animations.sunny?.draw(Date.now(), width, height, { type: 'night', progress: 0 }, sunPosition, moonPhase);
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
        this.animations.snowy?.drawSnowflakes(width, height);
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
      default:
        this.animations.cloudy?.draw(Date.now(), width, height, timeOfDay);
        break;
    }
  }
}
