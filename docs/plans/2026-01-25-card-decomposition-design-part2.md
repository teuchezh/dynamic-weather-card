# Card.ts Decomposition Design

## Overview

Refactor `src/components/card.ts` (~727 lines) into smaller, focused modules to improve maintainability and testability.

## Target Structure

```
src/components/
├── card.ts             
├── animation-manager.ts
├── forecast-service.ts 
├── action-handler.ts   
├── weather-data.ts     
├── clock.ts            
├── details.ts          
├── daily-forecast.ts   
├── hourly-forecast.ts  
├── styles.ts           
└── editor.ts           
```

## Module Specifications

### AnimationManager

Manages canvas lifecycle and weather animations.

```typescript
export class AnimationManager {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrame: number | null = null;
  private animations: Partial<Animations> = {};
  private resizeObserver: ResizeObserver | null = null;
  private width: number = 0;
  private height: number = 0;

  setup(container: Element): void;
  destroy(): void;
  draw(condition: string, timeOfDay: TimeOfDay): void;

  private setupCanvas(): void;
  private resizeCanvas(): void;
  private initializeAnimations(): void;
  private startAnimation(): void;
}
```

### ForecastService

Handles forecast subscriptions and data filtering.

```typescript
export class ForecastService {
  private hourlyForecast: WeatherForecast[] = [];
  private dailyForecast: WeatherForecast[] = [];
  private hourlySubscription: Promise<(() => void)> | null = null;
  private dailySubscription: Promise<(() => void)> | null = null;
  private onUpdate: () => void;

  constructor(onUpdate: () => void);

  subscribe(hass: HomeAssistant, entityId: string, showDaily: boolean): void;
  unsubscribe(): void;
  getHourlyForecast(hours: number, fallbackData: WeatherForecast[]): WeatherForecast[];
  getDailyForecast(days: number, fallbackData: WeatherForecast[]): WeatherForecast[];
}
```

### ActionHandler

Manages user interactions (tap, hold, double-tap).

```typescript
export class ActionHandler {
  private holdTimer: number | null = null;
  private lastTap: number | null = null;
  private holdFired: boolean = false;
  private readonly holdDelay = 500;

  constructor(
    getHass: () => HomeAssistant | undefined,
    getConfig: () => WeatherCardConfigInternal,
    fireEvent: (type: string, detail: Record<string, unknown>) => void
  );

  handleTap(e: MouseEvent): void;
  handlePointerDown(e: PointerEvent): void;
  handlePointerUp(e: PointerEvent): void;

  private handleAction(actionConfig: ActionConfig): void;
  private handleHold(): void;
  private handleDoubleTap(): void;
}
```

### WeatherData

Pure functions for extracting weather data from Home Assistant.

```typescript
export function getWeatherState(hass: HomeAssistant, entityId: string): string | null;
export function getWeatherAttributes(hass: HomeAssistant, entityId: string): WeatherEntityAttributes;
export function getWeatherData(
  hass: HomeAssistant,
  entityId: string,
  config: { templowAttribute?: string | null },
  hourlyForecast: WeatherForecast[]
): WeatherData;
```

## Card.ts Responsibilities (After Refactor)

- Lit Element lifecycle management
- `setConfig()` and `getStubConfig()`
- `render()` template
- Coordination between modules
- Language/i18n updates

## Integration Pattern

```typescript
// card.ts
class AnimatedWeatherCard extends LitElement {
  private animationManager = new AnimationManager();
  private forecastService = new ForecastService(() => this.requestUpdate());
  private actionHandler = new ActionHandler(
    () => this.hass,
    () => this.config,
    (type, detail) => this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }))
  );

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      const container = this.shadowRoot?.querySelector('.canvas-container');
      if (container) this.animationManager.setup(container);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.animationManager.destroy();
    this.forecastService.unsubscribe();
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') || changedProperties.has('config')) {
      this.forecastService.subscribe(this.hass, this.config.entity, this.config.showDailyForecast);
    }
  }
}
```

## Design Principles

1. **Single Responsibility** - Each module handles one concern
2. **No Cross-Dependencies** - Modules don't know about each other
3. **Card as Coordinator** - Card creates and orchestrates modules
4. **Testability** - Pure functions and injectable dependencies
