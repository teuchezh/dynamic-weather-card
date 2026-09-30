import { SunnyAnimation } from '../animations/sunny.js';
import { RainyAnimation } from '../animations/rainy.js';
import { SnowyAnimation } from '../animations/snowy.js';
import { CloudyAnimation } from '../animations/cloudy.js';
import { FoggyAnimation } from '../animations/foggy.js';
import { HailAnimation } from '../animations/hail.js';
import { ThunderstormAnimation } from '../animations/thunderstorm.js';
import { CloudField } from '../animations/clouds.js';
import { GlassDrops } from '../animations/glass-drops.js';
import { WindEffect } from '../animations/wind.js';
import { getSkyColors } from '../sky.js';
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
  // Wind speed in m/s (null = unknown)
  windSpeed?: number | null;
  // Northern lights on clear nights
  aurora?: boolean;
  // Raindrops on the glass in rain (default on)
  raindrops?: boolean;
  // Wind gusts and leaves (default on); clouds still drift faster in wind
  windEffects?: boolean;
}

// Conditions with rain hitting the "glass", and how much of it
const GLASS_RAIN: Record<string, number> = {
  rainy: 0.6,
  rain: 0.6,
  pouring: 1,
  'lightning-rainy': 0.85,
  'snowy-rainy': 0.4
};
// Dry conditions where wind gusts are drawn
const WIND_CONDITIONS = new Set(['sunny', 'clear', 'clear-night', 'partlycloudy', 'cloudy', 'windy', 'windy-variant']);
// Gusts start above this wind speed (m/s) and are at full strength 10 m/s later
const GUST_WIND = 8;

export class AnimationManager {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrame: number | null = null;
  private animations: Partial<Animations> = {};
  private cloudField = new CloudField();
  private glassDrops = new GlassDrops();
  private wind = new WindEffect();
  // Created on first use, only when the classic style is selected
  private classic: ClassicAnimations | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private onScreen = true;
  private qualityName: AnimationQuality = 'high';
  // Shared with all animations and updated in place when the quality changes
  private quality = createQualitySettings('high');
  private lastFrameTime = -Infinity;
  // System "reduce motion" setting: draw a still frame instead of animating
  private reducedMotion: MediaQueryList | null = typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  // What the still frame shows; it is redrawn only when this changes
  private stillKey = '';
  private width: number = 0;
  private height: number = 0;
  private container: Element | null = null;
  private getDrawParams: () => DrawParams | null;
  private handleVisibilityChange = (): void => {
    this.updateRunning();
  };
  private handleMotionChange = (): void => {
    this.stillKey = '';
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
      this.reducedMotion?.addEventListener?.('change', this.handleMotionChange);
    }
  }

  destroy(): void {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.reducedMotion?.removeEventListener?.('change', this.handleMotionChange);
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
    this.stillKey = '';

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
      const still = this.reducedMotion?.matches === true;
      // Frame rate cap; the small tolerance keeps 60 fps from dropping frames on 60 Hz screens.
      // With reduced motion only check twice a second whether the still frame needs redrawing
      if (now - this.lastFrameTime >= (still ? 500 : 1000 / this.quality.fps - 2)) {
        this.lastFrameTime = now;
        this.draw(still);
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

  private draw(still = false): void {
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

    if (still) {
      // Sun/moon position follows the time of day in steps, so the frame isn't redrawn every minute
      const key = JSON.stringify([condition, timeOfDay.type, Math.round(timeOfDay.progress * 20), sunPosition, moonPhase, visualStyle, params.quality, params.aurora, params.raindrops, params.windEffects, Math.round(params.windSpeed ?? 0), width, height]);
      if (key === this.stillKey) return;
      this.stillKey = key;
    } else {
      this.stillKey = '';
    }

    this.ctx.clearRect(0, 0, width, height);

    const conditionLower = condition.toLowerCase();

    if (visualStyle === 'classic') {
      this.classic ??= new ClassicAnimations(this.ctx);
      this.classic.draw(conditionLower, width, height, timeOfDay, sunPosition);
      return;
    }

    const isWindy = conditionLower === 'windy' || conditionLower === 'windy-variant';
    const windSpeed = Math.max(0, params.windSpeed ?? 0);
    this.cloudField.setWeather(conditionLower, timeOfDay);
    // Clouds drift faster in wind; the windy conditions always get a stiff breeze
    this.cloudField.setWind(Math.min(4, Math.max(isWindy ? 2.5 : 1, 1 + windSpeed / 5)));
    // No fade-in for a still frame: show the final cloud cover right away
    if (still) this.cloudField.settle();

    switch (conditionLower) {
      case 'sunny':
      case 'clear':
      case 'partlycloudy':
      case 'windy':
        this.animations.sunny?.draw(Date.now(), width, height, timeOfDay, sunPosition, moonPhase, params.aurora);
        break;
      case 'clear-night':
        this.animations.sunny?.draw(Date.now(), width, height, { type: 'night', progress: 0 }, sunPosition, moonPhase, params.aurora);
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

    const now = Date.now() * 0.001;
    const gusts = isWindy ? Math.max(0.6, (windSpeed - GUST_WIND) / 10) : (windSpeed - GUST_WIND) / 10;
    if (params.windEffects !== false && WIND_CONDITIONS.has(conditionLower) && gusts > 0) {
      const daylight = getSkyColors(conditionLower, timeOfDay).daylight;
      this.wind.draw(this.ctx, now, width, height, Math.min(1, gusts), isWindy, daylight, this.quality);
    }

    const glassRain = GLASS_RAIN[conditionLower];
    if (glassRain && params.raindrops !== false && this.quality.details) {
      this.glassDrops.draw(this.ctx, now, width, height, glassRain, this.quality);
    }
  }
}
