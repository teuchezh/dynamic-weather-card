# AGENTS.md - Dynamic Weather Card Architecture

## Project Overview

Dynamic Weather Card is a custom weather card for Home Assistant with realistic weather condition animations on Canvas. The project is built using Lit (Web Components) and TypeScript.

**Key Features:**
- 🎨 Animated weather effects on Canvas
- ☀️ Dynamic background based on time of day (sunrise, day, sunset, night)
- 🌧️ Realistic animations: rain, snow, hail, fog, thunderstorm
- 📊 Hourly and daily forecasts
- 🌍 Automatic language detection from Home Assistant settings
- ⚙️ Full customization of displayed elements

## Project Structure

```
animated-weather-card/
├── src/
│   ├── animations/          # Weather animation modules
│   │   ├── base.ts         # Base animation class
│   │   ├── sunny.ts        # Sunny weather animation
│   │   ├── rainy.ts        # Rain animation
│   │   ├── snowy.ts        # Snow animation
│   │   ├── cloudy.ts       # Cloudy animation
│   │   ├── foggy.ts        # Fog animation
│   │   ├── hail.ts         # Hail animation
│   │   └── thunderstorm.ts # Thunderstorm animation
│   ├── components/          # UI components
│   │   ├── card.ts         # Main card component
│   │   └── styles.ts       # CSS styles
│   ├── icons/              # Weather icons
│   │   ├── weather-conditions.ts
│   │   └── svg-icons.ts
│   ├── internationalization/ # Localization
│   │   ├── locales/        # Translations (en, ru, de, fr, nl, es, it)
│   │   ├── directive.ts
│   │   ├── index.ts
│   │   ├── resolveLanguage.ts
│   │   └── types.ts
│   ├── types/              # TypeScript types
│   │   ├── svg.d.ts
│   │   └── index.ts
│   ├── constants.ts        # Constants and mappings
│   ├── utils.ts            # Utilities
│   └── index.ts            # Entry point
├── build.ts                # Build script
├── package.json
└── tsconfig.json
```

## Component Architecture

### 1. Main Component - AnimatedWeatherCard

**File:** [src/components/card.ts](src/components/card.ts)

The main Web Component built on Lit Element. Responsible for:

- **UI Rendering**: Displaying weather data, temperature, humidity, wind, etc.
- **Canvas Management**: Initialization and management of canvas element for animations
- **Animation Lifecycle**: Starting and stopping the animation loop
- **Home Assistant Integration**: Fetching weather data from entities via the `hass` object
- **Interactivity**: Handling tap/hold/double-tap user actions
- **Responsiveness**: ResizeObserver for adapting canvas to container size

**Key Methods:**
- `setConfig(config)`: Set card configuration
- `connectedCallback()`: Initialization when connected to DOM
- `setupCanvas()`: Create and configure canvas
- `draw()`: Main rendering method, selects animation based on weather conditions
- `getWeatherData()`: Extract weather data from Home Assistant
- `getTodayForecast()` / `getWeekForecast()`: Get weather forecast

**State:**
- `@property hass`: Home Assistant object
- `@property config`: Card configuration
- `@state currentTime`: Current time for clock display

### 2. Animation System

**Base Class:** [src/animations/base.ts](src/animations/base.ts)

All animations inherit from `BaseAnimation`, which provides:
- Reference to canvas context (`ctx`)
- Base methods for drawing clouds (`drawCloud`, `drawClouds`)

**Specialized Animations:**

#### SunnyAnimation ([sunny.ts](src/animations/sunny.ts))
- Draws sun with rays during daytime
- Draws moon and stars at night
- Adapts to time of day (sunrise, day, sunset, night)

#### RainyAnimation ([rainy.ts](src/animations/rainy.ts))
- Particle system for raindrops
- Support for normal and heavy rain (pouring)
- Dark clouds and drops with gravity effect

#### SnowyAnimation ([snowy.ts](src/animations/snowy.ts))
- Particle system for snowflakes
- Smooth falling with swaying motion
- Various snowflake sizes

#### CloudyAnimation ([cloudy.ts](src/animations/cloudy.ts))
- Multiple cloud layers
- Smooth cloud movement

#### FoggyAnimation ([foggy.ts](src/animations/foggy.ts))
- Fog layers with varying opacity
- Fog movement effect

#### HailAnimation ([hail.ts](src/animations/hail.ts))
- Hail particles with fast falling
- Bounce simulation on ground impact

#### ThunderstormAnimation ([thunderstorm.ts](src/animations/thunderstorm.ts))
- Lightning flashes
- Optional rain
- Dark storm clouds

**Usage Pattern:**
```typescript
// In card.ts:428-489
private draw(): void {
  const condition = weather.condition.toLowerCase();

  switch (condition) {
    case 'sunny':
      this.animations.sunny?.draw(Date.now(), width, height, timeOfDay);
      break;
    case 'rainy':
      this.animations.rainy?.draw(Date.now(), width, height, timeOfDay, false);
      break;
    // ...
  }
}
```

### 3. Localization System

**Structure:** [src/internationalization/](src/internationalization/)

**Components:**
- `index.ts`: Main `I18n` class for managing translations
- `directive.ts`: Lit directive for i18n in templates
- `resolveLanguage.ts`: Language detection (auto or from config)
- `locales/`: Translations for supported languages

**Supported Languages:**
- English (en)
- Русский (ru)
- Deutsch (de)
- Français (fr)
- Nederlands (nl)
- Español (es)
- Italiano (it)

**Usage:**
```typescript
import { i18n } from '../internationalization';

// In code
i18n.t('feels_like') // "Feels like"

// In templates
html`<div>${i18n.t('weather')}</div>`
```

### 4. Utilities and Helpers

**File:** [src/utils.ts](src/utils.ts)

**Main Functions:**

- `getTimeOfDay()`: Determine time of day (sunrise, day, sunset, night)
- `getTimeOfDayWithSunData(sunData)`: Same but with actual sunrise/sunset data
- `getBackgroundGradient(timeOfDay)`: Generate background gradient for time of day
- `formatForecastTime(datetime)`: Format time for forecast
- `formatForecastDay(datetime, lang)`: Format day of week
- `getSunriseSunsetData()`: Extract sunrise/sunset data
- `formatTime(date)`: Format time as HH:MM

### 5. Constants

**File:** [src/constants.ts](src/constants.ts)

Contains:
- `DEFAULT_CONFIG`: Default configuration
- `TEMPLOW_ATTRIBUTES`: List of attributes for finding minimum temperature
- Weather condition mappings

### 6. Types

**File:** [src/types.ts](src/types.ts)

TypeScript interfaces and types:
- `HomeAssistant`: Home Assistant object interface
- `HassEntity`: Home Assistant entity
- `WeatherCardConfig`: Card configuration
- `WeatherForecast`: Forecast item
- `TimeOfDay`: Time of day with progress
- `BackgroundGradient`: Background gradient
- `WeatherEntityAttributes`: Weather entity attributes

## Design Patterns

### 1. Component-Based Architecture
Using Web Components (Lit Element) for logic and style encapsulation.

### 2. Observer Pattern
- `ResizeObserver` for tracking container size changes
- Reactive properties (`@property`, `@state`) in Lit for automatic UI updates

### 3. Strategy Pattern
Different animation classes with unified `draw()` interface, selected at runtime based on weather conditions.

### 4. Singleton Pattern
`i18n` object for centralized translation management.

### 5. Template Method Pattern
`BaseAnimation` base class defines common methods, overridden in subclasses.

## Component Lifecycle

```
1. setConfig(config)
   ↓
2. connectedCallback()
   ↓
3. updateComplete.then()
   ↓
4. setupCanvas()
   ↓
5. initializeAnimations()
   ↓
6. startAnimation() → requestAnimationFrame loop
   ↓
7. draw() → select and render animation
   ↓
8. disconnectedCallback() → cleanup resources
```

## Main Data Flows

### Weather Data Retrieval

```
Home Assistant Entity
  ↓
hass.states[config.entity]
  ↓
getWeatherData() → WeatherData
  ↓
Render in template
```

### Animation Loop

```
requestAnimationFrame
  ↓
draw()
  ↓
Determine condition + timeOfDay
  ↓
Select animation (sunny/rainy/snowy/etc)
  ↓
animation.draw(time, width, height, timeOfDay)
  ↓
Canvas rendering
```

### Localization Update

```
User config / Home Assistant language
  ↓
resolveLanguage()
  ↓
i18n.setLanguage()
  ↓
Automatic re-render via Lit reactivity
```

## Configuration and Setup

The card is configured via YAML configuration in Home Assistant:

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather
height: 250
language: auto
overlay_opacity: 0.2
wind_speed_unit: ms
show_feels_like: true
show_min_temp: true
show_humidity: true
show_wind: true
show_hourly_forecast: true
hourly_forecast_hours: 5
show_daily_forecast: false
daily_forecast_days: 5
show_sunrise_sunset: true
show_clock: true
clock_position: top
```

## Performance

**Optimizations:**

1. **Canvas Rendering**
   - Device Pixel Ratio scaling for clarity on Retina displays
   - Canvas context reuse

2. **Animation Loop**
   - `requestAnimationFrame` for smooth 60 FPS animation
   - Animation loop cleanup on `disconnectedCallback()`

3. **Event Handling**
   - Debouncing for resize events via ResizeObserver
   - Passive event listeners where possible

4. **Memory Management**
   - Explicit cleanup of timers, intervals, and listeners
   - Animation frame cancellation on disconnect

## Extending Functionality

### Adding a New Animation

1. Create a class in `src/animations/new-animation.ts`:
```typescript
import { BaseAnimation } from './base';
import type { TimeOfDay } from '../types';

export class NewAnimation extends BaseAnimation {
  draw(time: number, width: number, height: number, timeOfDay: TimeOfDay): void {
    // Your animation logic
  }
}
```

2. Register in [card.ts:211-223](src/components/card.ts#L211-L223):
```typescript
this.animations = {
  // ...
  newWeather: new NewAnimation(this.ctx)
};
```

3. Add case in [card.ts:428-489](src/components/card.ts#L428-L489):
```typescript
case 'new-condition':
  this.animations.newWeather?.draw(Date.now(), width, height, timeOfDay);
  break;
```

### Adding a New Language

1. Create file `src/internationalization/locales/xx/translation.ts`:
```typescript
export default {
  weather: 'Weather',
  feels_like: 'Feels like',
  // ...
};
```

2. Import in [src/internationalization/index.ts](src/internationalization/index.ts)

## Build and Deployment

**Commands:**
```bash
# Install dependencies
bun install

# Development with hot-reload
bun run dev

# Production build (with linting)
bun run build

# Linting
bun run lint
bun run lint:fix

# Type checking
bun run typecheck
```

**Build Process:**
- Entry point: [src/index.ts](src/index.ts)
- Bundler: Bun bundler
- Output file: `dynamic-weather-card.js`
- Format: ESM (ES Modules)
- Target: Browser

## Testing

Local testing via `test.html` - a static page with various configurations and weather conditions.

## Compatibility

- **Home Assistant**: 2021.4+
- **Browsers**: Modern browsers with Web Components support
- **Weather Integrations**: OpenWeatherMap, Met.no, AccuWeather, Yandex Weather, and others

## Related Resources

- [GitHub Repository](https://github.com/teuchezh/dynamic-weather-card)
- [HACS Integration](https://github.com/hacs/integration)
- [Live Demo](https://teuchezh.github.io/dynamic-weather-card/test.html)
- [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) - Icons used

## License

MIT License - open source project.

---

**Document Version:** 1.0
**Last Updated:** 2026-01-20
**Project Version:** 0.4.0
