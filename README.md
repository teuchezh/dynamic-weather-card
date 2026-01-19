# Dynamic Weather Card

**English** | [Русский](README.ru.md)

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/teuchezh/dynamic-weather-card.svg)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Build and Release](https://github.com/teuchezh/dynamic-weather-card/workflows/Build%20and%20Release/badge.svg)](https://github.com/teuchezh/dynamic-weather-card/actions/workflows/build.yml)
[![Validate](https://github.com/teuchezh/dynamic-weather-card/workflows/Validate/badge.svg)](https://github.com/teuchezh/dynamic-weather-card/actions/workflows/validate.yml)
[![HACS Validation](https://github.com/teuchezh/dynamic-weather-card/workflows/HACS%20Validation/badge.svg)](https://github.com/teuchezh/dynamic-weather-card/actions/workflows/hacs-validate.yml)
[![License](https://img.shields.io/github/license/teuchezh/dynamic-weather-card.svg)](LICENSE)

Dynamic weather card for Home Assistant with realistic animations.
![demo](/docs/demo.gif)

**[Try Live Demo →](https://teuchezh.github.io/dynamic-weather-card/test.html)**

## Features

- 🎨 Animated weather effects on Canvas
- ☀️ Dynamic background based on time of day (sunrise, day, sunset, night)
- 🌧️ Realistic animations: rain, snow, hail, fog, thunderstorm
- 📊 Hourly forecast for today
- 🌍 Automatic language detection from Home Assistant settings (Russian/English)
- ⚙️ Full customization of displayed elements
- 📱 Responsive design

## Project Structure

```
dynamic-weather-card/
├── src/                     # Source code
│   ├── animations/          # Weather animation modules
│   ├── components/          # UI components
│   ├── constants.js         # Constants and mappings
│   ├── utils.js            # Utilities
│   └── index.js            # Entry point
├── dynamic-weather-card.js  # Compiled file for HACS
├── test.html               # Page for local testing
├── hacs.json               # HACS configuration
├── info.md                 # Description for HACS Store
└── package.json
```

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend"
3. Click the "+" button in the bottom right
4. Search for "Dynamic Weather Card"
5. Install the card

### Manual

1. Copy the `dynamic-weather-card.js` file from the `dist/` folder to the `config/www/` directory
2. Add resource link in Home Assistant:

```yaml
resources:
  - url: /local/dynamic-weather-card.js
    type: module
```

## Configuration

> **Note:** The card is configured only through YAML. Visual editor is not supported.

### Basic configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
# Language is automatically detected from Home Assistant settings
```

### Full configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather
height: 250
language: auto  # 'auto' (default), 'ru' or 'en'
overlay_opacity: 0.2  # Dark overlay opacity (0-1, default: 0.1)
wind_speed_unit: ms  # 'ms' (m/s, default) or 'kmh' (km/h)
show_feels_like: true
show_min_temp: true
show_humidity: true
show_wind: true
show_wind_direction: true
show_wind_gust: true
show_forecast: true
show_sunrise_sunset: true
show_clock: true  # Show current time in the bottom right corner
sunrise_entity: sensor.sun_next_rising  # Optional
sunset_entity: sensor.sun_next_setting    # Optional
```

### Example with fixed language

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather
language: en  # Force English
```

### Example for Yandex Weather

```yaml
type: custom:dynamic-weather-card
entity: weather.yandex_pogoda
name: Krasnodar
show_sunrise_sunset: true
sunrise_entity: sensor.sun_next_rising
sunset_entity: sensor.sun_next_setting
```

> **Note:** Yandex Weather does not provide sunrise/sunset data in the weather entity, so separate sensors must be specified.

## Configuration Parameters

| Parameter | Type | Default | Description |
|----------|-----|--------------|-------------|
| `entity` | string | **required** | Weather entity ID |
| `name` | string | - | Name (optional) |
| `height` | number | 200 | Card height in pixels |
| `language` | string | `auto` | Interface language (`auto`, `ru` or `en`). `auto` detects language from Home Assistant settings |
| `overlay_opacity` | number | 0.1 | Dark overlay opacity for better text readability (0-1). Higher values create darker overlay |
| `wind_speed_unit` | string | `ms` | Wind speed unit (`ms` for m/s or `kmh` for km/h) |
| `show_feels_like` | boolean | true | Show feels like temperature |
| `show_min_temp` | boolean | true | Show minimum temperature |
| `show_humidity` | boolean | false | Show humidity |
| `show_wind` | boolean | false | Show wind speed |
| `show_wind_direction` | boolean | false | Show wind direction |
| `show_wind_gust` | boolean | false | Show wind gusts |
| `show_forecast` | boolean | false | Show today's forecast |
| `show_sunrise_sunset` | boolean | false | Show sunrise and sunset times |
| `show_clock` | boolean | false | Show current time in the bottom right corner |
| `sunrise_entity` | string | - | Sunrise sensor entity ID (optional) |
| `sunset_entity` | string | - | Sunset sensor entity ID (optional) |
| `templow_attribute` | string | - | Custom attribute name for minimum temperature (optional). If not specified, the card will automatically search for known attributes: `templow`, `temperature_low`, `temp_low`, `min_temp`, `yandex_pogoda_minimal_forecast_temperature` |

## Supported Weather Conditions

- ☀️ Sunny / Clear
- 🌙 Clear Night
- ⛅ Partly Cloudy
- ☁️ Cloudy
- 🌧️ Rainy / Heavy Rain
- ❄️ Snowy
- 🌨️ Sleet / Hail
- 🌫️ Foggy
- ⛈️ Thunderstorm (with and without rain)

## Time of Day

The card automatically changes background and animations based on time of day:

- **6:00 - 8:00** - Sunrise 🌅
- **8:00 - 18:00** - Day ☀️
- **18:00 - 20:00** - Sunset 🌇
- **20:00 - 6:00** - Night 🌙

## Supported Languages
- English
- Russian
- German
- French
- Dutch
- Spanish

## Development

### Install dependencies

```bash
yarn install
```

### Build

```bash
# Production build (includes linting)
yarn build

# Development mode with automatic rebuild
yarn dev
```

### Code Quality

```bash
# Check code with ESLint
yarn lint

# Auto-fix linting issues
yarn lint:fix
```

The project uses ESLint with rules for:
- Code style consistency
- Lit-specific best practices
- Automatic formatting

### Testing

Open the `test.html` file in a browser for local testing of the card with various weather conditions and settings.

## Compatibility

Works with all standard Home Assistant weather integrations:
- OpenWeatherMap
- Met.no
- AccuWeather
- And others...

## Credits

Weather icons are provided by [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) by [@basmilius](https://github.com/basmilius), licensed under MIT.

## License

MIT

## Support

If you have problems or suggestions, create an issue on GitHub.
