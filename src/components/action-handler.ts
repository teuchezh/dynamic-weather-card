import type {
  HomeAssistant,
  WeatherCardConfigInternal,
  ActionConfig
} from '../types.js';

export class ActionHandler {
  private holdTimer: number | null = null;
  private lastTap: number | null = null;
  private holdFired: boolean = false;
  private readonly holdDelay = 500;

  private getHass: () => HomeAssistant | undefined;
  private getConfig: () => WeatherCardConfigInternal;
  private fireEvent: (type: string, detail: Record<string, unknown>) => void;

  constructor(
    getHass: () => HomeAssistant | undefined,
    getConfig: () => WeatherCardConfigInternal,
    fireEvent: (type: string, detail: Record<string, unknown>) => void
  ) {
    this.getHass = getHass;
    this.getConfig = getConfig;
    this.fireEvent = fireEvent;
  }

  handleTap(e: MouseEvent): void {
    if ((e.target as HTMLElement).closest('.forecast-item') || (e.target as HTMLElement).closest('.info-item')) {
      return;
    }

    if (this.lastTap && (Date.now() - this.lastTap) < 300) {
      this.handleDoubleTap();
      this.lastTap = null;
      return;
    }

    this.lastTap = Date.now();

    setTimeout(() => {
      if (this.lastTap) {
        this.handleAction(this.getConfig().tapAction);
        this.lastTap = null;
      }
    }, 300);
  }

  handlePointerDown(): void {
    this.holdTimer = window.setTimeout(() => {
      this.handleHold();
      this.holdFired = true;
    }, this.holdDelay);
  }

  handlePointerUp(e: PointerEvent): void {
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
    }
    if (this.holdFired) {
      e.preventDefault();
      e.stopPropagation();
      this.holdFired = false;
    }
  }

  private handleHold(): void {
    this.handleAction(this.getConfig().holdAction);
  }

  private handleDoubleTap(): void {
    this.handleAction(this.getConfig().doubleTapAction);
  }

  private handleAction(actionConfig: ActionConfig | undefined): void {
    const hass = this.getHass();
    const config = this.getConfig();

    if (!actionConfig || !hass) return;

    const action = actionConfig.action || 'more-info';

    switch (action) {
      case 'more-info':
        this.fireEvent('hass-more-info', { entityId: actionConfig.entity || config.entity });
        break;
      case 'toggle':
        hass.callService('homeassistant', 'toggle', {
          entity_id: actionConfig.entity || config.entity
        });
        break;
      case 'call-service':
        if (actionConfig.service) {
          const [domain, service] = actionConfig.service.split('.');
          hass.callService(domain, service, actionConfig.service_data || {});
        }
        break;
      case 'navigate':
        if (actionConfig.navigation_path) {
          window.history.pushState(null, '', actionConfig.navigation_path);
          this.fireEvent('location-changed', { replace: false });
        }
        break;
      case 'url':
        if (actionConfig.url_path) {
          window.open(actionConfig.url_path);
        }
        break;
      case 'none':
      default:
        break;
    }
  }
}
