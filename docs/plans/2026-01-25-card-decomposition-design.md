# Card Component Decomposition Design

## Overview

Refactor `src/components/card.ts` (~990 lines) into smaller, focused modules for improved readability, reusability, and testability.

## Approach

**Hybrid architecture:**
- Lit components for UI sections
- Utility functions for stateless logic
- Types in dedicated file

## File Structure

```
src/
  types.ts                    
  utils.ts                    
  components/
    card.ts                   
    styles.ts                 
    clock.ts                  
    details.ts                
    forecast-styles.ts        
    hourly-forecast.ts        
    daily-forecast.ts         
```

## Components

### WeatherClock (`clock.ts`)

Self-contained clock component with internal interval management.

**Props:**
- `format: '12h' | '24h' | null` — renders nothing if null

**Behavior:**
- Manages own `setInterval` for time updates
- Uses `formatClockTime()` utility

### WeatherDetails (`details.ts`)

Info grid showing humidity, wind, sunrise/sunset.

**Props:**
- `weather: WeatherData | null`
- `sunData: SunData | null`
- `config: DetailsConfig | null`
- `entityAttributes: WeatherEntityAttributes | null`

**Behavior:**
- Renders nothing if no displayable content
- Each info item rendered via private method

### HourlyForecast (`hourly-forecast.ts`)

Horizontal scrollable hourly forecast.

**Props:**
- `forecast: WeatherForecast[]`

**Behavior:**
- Renders nothing if `forecast.length === 0`
- Uses shared `forecastStyles`
- Horizontal scroll via `setupHorizontalScroll()` utility

### DailyForecast (`daily-forecast.ts`)

Horizontal scrollable daily forecast.

**Props:**
- `forecast: WeatherForecast[]`
- `lang: string`

**Behavior:**
- Renders nothing if `forecast.length === 0`
- Uses shared `forecastStyles`
- Horizontal scroll via `setupHorizontalScroll()` utility

## Utilities (`utils.ts` additions)

```typescript
// Wind speed conversion for legacy providers
convertWindSpeed(
  speed: number | null,
  attrs: WeatherEntityAttributes,
  configUnit: 'ms' | 'kmh'
): number | null

// Get wind speed unit label
getWindSpeedUnit(
  attrs: WeatherEntityAttributes,
  configUnit: 'ms' | 'kmh',
  t: (key: string) => string
): string

// Format time for clock display
formatClockTime(
  date: Date,
  format: '12h' | '24h',
  amLabel: string,
  pmLabel: string
): string

// Setup horizontal scroll with mouse wheel
setupHorizontalScroll(
  root: ShadowRoot | null,
  selector: string
): (() => void) | null
```

## Types (`types.ts` additions)

```typescript
interface WeatherData {
  condition: string;
  temperature: number | null;
  apparentTemperature: number | null;
  humidity: number | null;
  windSpeed: number | null;
  windGust: number | null;
  windBearing: number | null;
  windDirection: string | null;
  pressure: number | null;
  forecast: WeatherForecast[];
  friendlyName: string;
  templow: number | null;
}

interface ActionConfig {
  action: 'more-info' | 'toggle' | 'call-service' | 'navigate' | 'url' | 'none';
  entity?: string;
  service?: string;
  service_data?: Record<string, unknown>;
  navigation_path?: string;
  url_path?: string;
}

interface SunData {
  sunrise: Date | null;
  sunset: Date | null;
  hasSunData: boolean;
}

interface ConfigInput { ... }
interface WeatherCardConfigInternal { ... }
```

## Migration Plan

### Step 1: Types and utilities
1. Add types to `types.ts`
2. Add utilities to `utils.ts`
3. Update imports in `card.ts`
4. Verify: `bun run build && bun run typecheck`

### Step 2: WeatherClock
1. Create `clock.ts`
2. Replace inline clock in `card.ts`
3. Remove clock-related code from `card.ts`
4. Verify: `bun run build` + test in `demo.html`

### Step 3: Forecast styles
1. Create `forecast-styles.ts`
2. Verify: `bun run build`

### Step 4: HourlyForecast
1. Create `hourly-forecast.ts`
2. Replace `renderTodayForecast()` in `card.ts`
3. Verify: `bun run build` + test in `demo.html`

### Step 5: DailyForecast
1. Create `daily-forecast.ts`
2. Replace `renderDailyForecast()` in `card.ts`
3. Remove scroll setup code from `card.ts`
4. Verify: `bun run build` + test in `demo.html`

### Step 6: WeatherDetails
1. Create `details.ts`
2. Replace inline info-grid in `card.ts`
3. Verify: `bun run build` + test in `demo.html`

### Step 7: Final cleanup
1. Remove unused imports
2. Add helper methods
3. Verify: `bun run build && bun run lint && bun run typecheck`

## Data Flow

```
AnimatedWeatherCard (card.ts)
  ├── hass, config (from HA)
  ├── canvas + animations (internal)
  ├── forecast subscriptions (internal)
  └── child components:
        ├── <weather-clock format={}>
        ├── <weather-details weather={} sunData={} config={} entityAttributes={}>
        ├── <hourly-forecast forecast={}>
        └── <daily-forecast forecast={} lang={}>
```

## Design Principles

1. **Smart components** — each component decides whether to render based on its props
2. **No `show` props** — visibility logic is internal to each component
3. **One file, one component** — except shared styles
4. **Stateless utilities** — pure functions in `utils.ts` for testability
5. **Incremental migration** — each step leaves code in working state
