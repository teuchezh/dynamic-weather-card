# AGENTS.md - Dynamic Weather Card Architecture

A Home Assistant Lovelace card with an animated, weather-aware sky, details and forecasts. Lit + TypeScript, built with Bun into one ESM file, distributed through HACS. User-facing options are documented in `README.md`; this file is for working on the code.

## Project structure

```
src/
├── index.ts                    # Registers dynamic-weather-card and its editor, exports i18n
├── components/
│   ├── card.ts                 # Main element: config, hass, layout (default / minimal), rendering
│   ├── styles.ts               # Card styles (sky, layout, typography, CSS variables)
│   ├── animation-manager.ts    # Canvas, frame loop, quality, off-screen pause, reduced motion
│   ├── weather-data.ts         # Current weather from the entity, with sensor overrides
│   ├── forecast-service.ts     # Forecast subscriptions, hourly/daily selection, text forecast
│   ├── details.ts              # <weather-details>: humidity, wind, sun times, pressure …
│   ├── clock.ts                # <weather-clock>: clock and date
│   ├── hourly-forecast.ts      # <hourly-forecast>: strip, day labels, temperature chart
│   ├── daily-forecast.ts       # <daily-forecast>: days, temperature bars
│   ├── forecast-styles.ts      # Styles shared by both forecasts
│   ├── forecast-wind-row.ts    # Wind row of a forecast item
│   ├── action-handler.ts       # tap / hold / double-tap actions
│   └── editor.ts               # Visual editor (ha-form schema)
├── animations/                 # One class per weather type, extending BaseAnimation
│   ├── base.ts, quality.ts     # Base class; high / medium / low presets
│   ├── clouds.ts, night-sky.ts # Shared cloud layers; stars and the moon phase
│   ├── aurora.ts, glass-drops.ts, wind.ts   # Optional effects
│   └── classic/                # The pre-2026.10 graphics, for visual_style: classic
├── sky.ts                      # Sky and cloud colors from the condition and time of day
├── precipitation-outlook.ts    # "Rain expected around 16:00"
├── forecast-chart.ts           # Temperature curve, split into one piece per forecast item
├── forecast-wind.ts            # Forecast wind: daily aggregation, display units
├── temperature-color.ts        # Colors of the temperature bars and the chart
├── editor-config.ts            # Cleans the editor's YAML (type and entity first, no defaults)
├── user-styles.ts              # The styles option: CSS added to every part's shadow root
├── icons/svg-icons.ts          # Inline SVG icons
├── internationalization/       # i18n singleton, JSON locales, generated locale index
├── constants.ts                # DEFAULT_CONFIG and other constants
├── types.ts                    # Home Assistant and card types
└── utils.ts                    # Time of day, units, formatting, horizontal scroll
tests/                          # bun test, pure logic only
scripts/                        # Locale index generation and checks
build.ts                        # Production build
demo.html                       # Interactive demo and manual test bench
```

## How it fits together

**Config.** `card.ts` `setConfig()` turns the YAML (`ConfigInput`, snake_case) into `WeatherCardConfigInternal` (camelCase), applying the defaults from `DEFAULT_CONFIG`. The editor uses the same defaults for its form and saves only what differs from them (`editor-config.ts`).

**Current weather.** On every `hass` update, `getWeatherData()` (`weather-data.ts`) reads the weather entity and lets configured sensors override single values. A wind speed sensor also sets the unit the wind comes in.

**Forecasts.** `ForecastService` subscribes to `weather/subscribe_forecast`: hourly always, daily when the daily forecast is on, twice-daily for the text forecast. Older integrations fall back to the entity's `forecast` attribute; hourly entries are then grouped into days. The card subscribes again after being re-attached to the page.

**Rendering.** The card renders the details, clock and forecasts as separate Lit elements, each in its own shadow root. That's why the `styles` option is added to each of them (`user-styles.ts`) and why the size variables (`--dwc-*`) are CSS custom properties: they inherit into every part.

**Animation.** `AnimationManager` owns the canvas. It picks the animation for the condition, passes sky colors from `sky.ts`, wind speed and the optional effects, caps the frame rate by quality, pauses off-screen and draws a still frame under "reduce motion". `visual_style: classic` hands drawing to `animations/classic/`.

**i18n.** `i18n.t('key')` with English fallback. Locales are `locales/<code>/translation.json`; `scripts/generate-locales.ts` writes `locales.generated.ts`. The `demo` block of each file is used only by `demo.html` and is stripped from the card bundle by a plugin in `build.ts`.

## Common changes

### New animation

1. Add a class in `src/animations/` extending `BaseAnimation` and implement `draw()`.
2. Create it in `AnimationManager.initializeAnimations()` and call it from the `switch` in `AnimationManager.draw()`.
3. If it needs its own sky, add a palette in `sky.ts`.
4. Check it in `demo.html`, also with `animation_quality: low` and "reduce motion".

### New option

1. `src/types.ts`: add it to `ConfigInput` (YAML) and `WeatherCardConfig`.
2. `src/constants.ts`: add the default to `DEFAULT_CONFIG`.
3. `src/components/card.ts`: read it in `setConfig()` and use it.
4. `src/components/editor.ts`: add a field to the schema and the default to `editorDefaults`.
5. Translations: `editor.<option>` (and `editor.<option>_helper`) in every `locales/*/translation.json`; at least `en`.
6. `demo.html`: a control, `buildCardConfig()` and a place in `YAML_GROUPS`.
7. `README.md` and `README.ru.md`: a row in the options tables.

### New language

See [CONTRIBUTING.md](CONTRIBUTING.md#adding-a-new-language).

## Build, test, release

```bash
bun install
bun run dev          # watch build into dynamic-weather-card.js
bun run build        # locales check, lint, production build
bun run lint
bun run typecheck
bun test
```

- The build output `dynamic-weather-card.js` is not committed. Releases attach it, and the Pages workflow builds its own copy for the demo.
- `demo.html` loads `./dynamic-weather-card.js`: run `bun run build` and serve the repository root (e.g. `python3 -m http.server`).
- Unit tests cover pure logic: precipitation outlook, time of day, moon phase, sky, units, sensors, forecast aggregation and selection, the chart curve, editor YAML, i18n and translation files. `tests/setup.ts` defines build-time globals.
- Releases are CalVer and weekly; see [.github/RELEASE.md](.github/RELEASE.md).
