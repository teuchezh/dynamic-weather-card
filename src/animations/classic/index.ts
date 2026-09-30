/**
 * Classic (pre-2026.10) animations, kept for the `visual_style: classic` option.
 * They draw the simple clouds from BaseAnimation because no CloudField is attached.
 */
import { SunnyAnimation } from './sunny';
import { RainyAnimation } from './rainy';
import { SnowyAnimation } from './snowy';
import { FoggyAnimation } from './foggy';
import { HailAnimation } from './hail';
import { ThunderstormAnimation } from './thunderstorm';
import { CloudyAnimation } from '../cloudy';
import type { TimeOfDay, PositionOverride } from '../../types';

export class ClassicAnimations {
  private sunny: SunnyAnimation;
  private rainy: RainyAnimation;
  private snowy: SnowyAnimation;
  private cloudy: CloudyAnimation;
  private foggy: FoggyAnimation;
  private hail: HailAnimation;
  private thunderstorm: ThunderstormAnimation;

  constructor(ctx: CanvasRenderingContext2D) {
    this.sunny = new SunnyAnimation(ctx);
    this.rainy = new RainyAnimation(ctx);
    this.snowy = new SnowyAnimation(ctx);
    this.cloudy = new CloudyAnimation(ctx);
    this.foggy = new FoggyAnimation(ctx);
    this.hail = new HailAnimation(ctx);
    this.thunderstorm = new ThunderstormAnimation(ctx);
  }

  draw(condition: string, width: number, height: number, timeOfDay: TimeOfDay, sunPosition?: PositionOverride): void {
    const now = Date.now();
    switch (condition) {
      case 'sunny':
      case 'clear':
        this.sunny.draw(now, width, height, timeOfDay, sunPosition);
        break;
      case 'clear-night':
        this.sunny.draw(now, width, height, { type: 'night', progress: 0 }, sunPosition);
        break;
      case 'rainy':
      case 'rain':
        this.rainy.draw(now, width, height, timeOfDay, false);
        break;
      case 'pouring':
        this.rainy.draw(now, width, height, timeOfDay, true);
        break;
      case 'snowy':
      case 'snow':
        this.snowy.draw(now, width, height, timeOfDay);
        break;
      case 'snowy-rainy':
        this.rainy.draw(now, width, height, timeOfDay, false);
        this.snowy.draw(now, width, height, timeOfDay);
        break;
      case 'hail':
        this.hail.draw(now, width, height, timeOfDay);
        break;
      case 'foggy':
      case 'fog':
        this.foggy.draw(now, width, height, timeOfDay);
        break;
      case 'lightning':
        this.thunderstorm.draw(now, width, height, timeOfDay, false);
        break;
      case 'lightning-rainy':
        this.thunderstorm.draw(now, width, height, timeOfDay, true);
        break;
      case 'cloudy':
      case 'partlycloudy':
      default:
        this.cloudy.draw(now, width, height, timeOfDay);
        break;
    }
  }
}
