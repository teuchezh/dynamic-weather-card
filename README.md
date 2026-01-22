<div align="center">

# ⛅ Dynamic Weather Card

### Dynamic weather card for Home Assistant with realistic animations

[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&color=blue)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Downloads](https://img.shields.io/github/downloads/teuchezh/dynamic-weather-card/dynamic-weather-card.js?style=for-the-badge&logo=github&color=green&label=downloads&displayAssetName=false)](https://github.com/teuchezh/dynamic-weather-card/releases)

[![Stars](https://img.shields.io/github/stars/teuchezh/dynamic-weather-card?style=social)](https://github.com/teuchezh/dynamic-weather-card/stargazers)
[![Issues](https://img.shields.io/github/issues/teuchezh/dynamic-weather-card?style=social&logo=github)](https://github.com/teuchezh/dynamic-weather-card/issues)

**[English](#)** | [Русский](README.ru.md)

**[🎮 Try Live Demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)** • **[📖 Documentation](#configuration)** • **[🐛 Report Issue](https://github.com/teuchezh/dynamic-weather-card/issues)**

</div>

---

## 🌟 Preview

![demo](/docs/demo.gif)

<div align="center">

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Visual Experience
- **Realistic Canvas Animations**
  - Rain with different intensities
  - Snowfall with various particle effects
  - Fog and mist
  - Hail and sleet
  - Lightning and thunderstorms

- **Dynamic Time-Based Backgrounds**
  - Sunrise gradient (6:00 - 8:00)
  - Bright day sky (8:00 - 18:00)
  - Sunset gradient (18:00 - 20:00)
  - Night sky (20:00 - 6:00)

</td>
<td width="50%">

### ⚙️ Functionality
- **Smart Data Display**
  - Hourly & daily forecasts
  - Feels-like temperature
  - Wind speed, gusts & direction
  - Humidity levels
  - Sunrise & sunset times
  - Real-time clock (12h/24h)

- **User-Friendly**
  - Visual editor in Home Assistant UI
  - Auto-detection of language & units
  - Fully responsive design
  - Works with all weather integrations

</td>
</tr>
</table>

---

## 📦 Installation

### Option 1: HACS (Recommended)

1. Click the button below to open HACS:

   [![Open HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

2. Or manually:
   - Open HACS in Home Assistant
   - Go to **Frontend** section
   - Click **"+"** button
   - Search for **"Dynamic Weather Card"**
   - Click **Install**

### Option 2: Manual Installation

1. Download `dynamic-weather-card.js` from the [latest release](https://github.com/teuchezh/dynamic-weather-card/releases)
2. Copy it to `config/www/community/dynamic-weather-card/` directory
3. Add resource in Home Assistant:

   **Settings** → **Dashboards** → **Resources** → **Add Resource**

   ```
   URL: /local/community/dynamic-weather-card/dynamic-weather-card.js
   Type: JavaScript Module
   ```

---

## 🚀 Quick Start

### Minimal Configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

That's it! The card will automatically detect your language and display settings.

### Using Visual Editor

1. Add a card to your dashboard
2. Search for **"Dynamic Weather Card"**
3. Select your weather entity
4. Customize options in the visual editor

---

## ⚙️ Configuration

<details>
<summary><b>📋 Complete Configuration Example</b> (click to expand)</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather Station
height: 300
language: auto                    # auto, en, ru, de, fr, nl, es, it
overlay_opacity: 0.15             # 0-1 (dark overlay for better readability)
wind_speed_unit: ms               # ms or kmh (for legacy integrations)

# Temperature & Humidity
show_feels_like: true
show_min_temp: true
show_humidity: true

# Wind Information
show_wind: true
show_wind_direction: true
show_wind_gust: true

# Forecasts
show_hourly_forecast: true
hourly_forecast_hours: 8
show_daily_forecast: true
daily_forecast_days: 5

# Sun & Clock
show_sunrise_sunset: true
sunrise_entity: sensor.sun_next_rising    # optional
sunset_entity: sensor.sun_next_setting    # optional
show_clock: true
clock_position: top                       # top or details
clock_format: 24h                         # 12h or 24h
```

</details>

### 📊 Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| **Required** |
| `entity` | string | - | Weather entity ID (e.g., `weather.home`) |
| **Display** |
| `name` | string | - | Custom card title (leave empty to hide) |
| `height` | number | `200` | Card height in pixels |
| `language` | string | `auto` | `auto`, `en`, `ru`, `de`, `fr`, `nl`, `es`, `it` |
| `overlay_opacity` | number | `0.1` | Dark overlay opacity (0-1) for text readability |
| **Temperature** |
| `show_feels_like` | boolean | `true` | Display "feels like" temperature |
| `show_min_temp` | boolean | `true` | Display minimum temperature |
| **Weather Details** |
| `show_humidity` | boolean | `false` | Display humidity percentage |
| `show_wind` | boolean | `false` | Display wind speed |
| `show_wind_direction` | boolean | `false` | Display wind direction |
| `show_wind_gust` | boolean | `false` | Display wind gust speed |
| `wind_speed_unit` | string | `ms` | `ms` or `kmh` (for legacy integrations) |
| **Forecasts** |
| `show_hourly_forecast` | boolean | `false` | Show hourly forecast |
| `hourly_forecast_hours` | number | `5` | Number of hours to display (1-24) |
| `show_daily_forecast` | boolean | `false` | Show daily forecast |
| `daily_forecast_days` | number | `5` | Number of days to display (1-14) |
| **Sun & Clock** |
| `show_sunrise_sunset` | boolean | `false` | Display sunrise/sunset times |
| `sunrise_entity` | string | - | Custom sunrise sensor (optional) |
| `sunset_entity` | string | - | Custom sunset sensor (optional) |
| `show_clock` | boolean | `false` | Display current time |
| `clock_position` | string | `top` | `top` (top-right) or `details` (info row) |
| `clock_format` | string | `24h` | `12h` (AM/PM) or `24h` |

---

## 🌡️ Integration-Specific Examples

### OpenWeatherMap / Met.no

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_hourly_forecast: true
show_daily_forecast: true
```

### Yandex Weather

Yandex Weather requires separate sensors for sunrise/sunset:

```yaml
type: custom:dynamic-weather-card
entity: weather.yandex_pogoda
name: Moscow
show_sunrise_sunset: true
sunrise_entity: sensor.yandex_pogoda_next_sunrise
sunset_entity: sensor.yandex_pogoda_next_sunset
```

### AccuWeather

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_feels_like: true
show_wind: true
show_humidity: true
```

---

## 🌍 Language Support

The card automatically detects your Home Assistant language or you can set it manually:

| Language | Code | Status |
|----------|------|--------|
| English | `en` | ✅ Complete |
| Русский | `ru` | ✅ Complete |
| Deutsch | `de` | ✅ Complete |
| Français | `fr` | ✅ Complete |
| Nederlands | `nl` | ✅ Complete |
| Español | `es` | ✅ Complete |
| Italiano | `it` | ✅ Complete |

Want to add your language? [Contribute here!](https://github.com/teuchezh/dynamic-weather-card/tree/main/src/internationalization/locales)

---

## 🌤️ Supported Weather Conditions

<table>
<tr>
<td>☀️ Sunny / Clear</td>
<td>🌙 Clear Night</td>
<td>⛅ Partly Cloudy</td>
</tr>
<tr>
<td>☁️ Cloudy / Overcast</td>
<td>🌧️ Rainy</td>
<td>⛈️ Heavy Rain / Pouring</td>
</tr>
<tr>
<td>❄️ Snowy</td>
<td>🌨️ Sleet / Snowy-Rainy</td>
<td>🌫️ Foggy</td>
</tr>
<tr>
<td>⚡ Lightning</td>
<td>⛈️ Thunderstorm</td>
<td>🧊 Hail</td>
</tr>
</table>

---

## 💡 Smart Features

### Automatic Wind Speed Units

The card automatically detects wind speed units from your weather integration:

- **Modern Integrations** (Met.no, OpenWeatherMap, Yandex): Units detected automatically
- **Legacy Integrations**: Set `wind_speed_unit` parameter manually

Supported units: m/s, km/h, mph, knots, ft/s

### Automatic Sunrise/Sunset Detection

The card looks for sunrise/sunset data in this order:

1. Custom sensors (`sunrise_entity`, `sunset_entity`)
2. Weather entity attributes
3. Home Assistant's `sun.sun` entity (built-in)

In most cases, no configuration needed!

---

## 🎨 Time of Day Backgrounds

| Time | Period | Visual Effect |
|------|--------|---------------|
| 6:00 - 8:00 | 🌅 Sunrise | Warm orange-pink gradient |
| 8:00 - 18:00 | ☀️ Day | Bright blue sky |
| 18:00 - 20:00 | 🌇 Sunset | Orange-purple gradient |
| 20:00 - 6:00 | 🌙 Night | Deep blue/purple night sky |

---

## 🔧 Development

### Prerequisites

- [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) 18+
- Modern browser with Canvas support

### Setup

```bash
# Install dependencies
bun install
# or
npm install

# Development mode (auto-rebuild)
bun run dev

# Production build
bun run build

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix
```

### Project Structure

```
src/
├── animations/          # Canvas animation engines
│   ├── rain.ts
│   ├── snow.ts
│   ├── fog.ts
│   └── ...
├── components/          # Web components
│   ├── card.ts         # Main card component
│   └── editor.ts       # Visual editor
├── internationalization/ # i18n translations
│   └── locales/
│       ├── en/
│       ├── ru/
│       └── ...
├── constants.ts         # Configuration defaults
├── types.ts            # TypeScript definitions
└── utils.ts            # Helper functions
```

---

## Contributing & Support

Contributions are welcome! If you find this card useful, here's how you can help:

- Add translations for new languages
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Star the repository
- Share your feedback

---

## License

MIT © [teuchezh](https://github.com/teuchezh)

---

## Credits

- **Weather Icons**: [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) by [@basmilius](https://github.com/basmilius) (MIT License)
- **Built for**: [Home Assistant](https://www.home-assistant.io/) community

---

<div align="center">

**Made with ❤️ for the Home Assistant community**

[⬆ Back to Top](#-dynamic-weather-card)

</div>
