<div align="center">

# ⛅ Dynamic Weather Card

### Dynamic weather card for Home Assistant with realistic animations

[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&color=blue)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Downloads](https://img.shields.io/github/downloads/teuchezh/dynamic-weather-card/dynamic-weather-card.js?style=for-the-badge&logo=github&color=green&label=downloads&displayAssetName=false)](https://github.com/teuchezh/dynamic-weather-card/releases)

[![Translation status](https://hosted.weblate.org/widget/dynamic-weather-card/-/svg-badge.svg)](https://hosted.weblate.org/engage/dynamic-weather-card/)

[![Stars](https://img.shields.io/github/stars/teuchezh/dynamic-weather-card?style=social)](https://github.com/teuchezh/dynamic-weather-card/stargazers)
[![Issues](https://img.shields.io/github/issues/teuchezh/dynamic-weather-card?style=social&logo=github)](https://github.com/teuchezh/dynamic-weather-card/issues)

**[English](#)** | [Русский](README.ru.md)

**[🎮 Try Live Demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)** • **[📖 Documentation](#configuration)** • **[🐛 Report Issue](https://github.com/teuchezh/dynamic-weather-card/issues)**

</div>

---

## 🌟 Preview

![Dynamic Weather Card in different weather](/docs/preview.jpg)

![Animated weather](/docs/demo.gif)

<div align="center">

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Visual Experience
- **A sky that follows the weather**
  - Its own palette for each condition
  - Warm sunrise and sunset from your real sun times
  - Smooth transitions when the weather changes
- **Layered clouds** that drift faster in the wind
- **Rain, snow, hail and fog with depth**
  - Rain splashes, snowflakes sway, hail bounces
  - Raindrops on the glass slide down
- **Wind**: gusts and tumbling autumn leaves
- **Night sky**
  - Twinkling stars and shooting stars
  - The moon in its real phase
  - Optional northern lights
- **Sun rays**, lightning bolts and a subtle lens flare
- **Classic look** still available (`visual_style: classic`)

</td>
<td width="50%">

### ⚙️ Functionality
- **Smart Data Display**
  - Hourly & daily forecasts with temperature range bars
  - When rain starts or stops ("Rain expected around 16:00")
  - Feels-like temperature, humidity, pressure, UV index, dew point, air quality
  - Wind speed, gusts & direction
  - Sunrise & sunset times, clock and date (12h/24h)
  - Your own sensors, e.g. a personal weather station

- **User-Friendly**
  - Visual editor with sections in the Home Assistant UI
  - Auto-detection of language & units
  - Runs smoothly on wall tablets (`animation_quality`), pauses off-screen, respects "reduce motion"
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
language: auto                    # auto, en, ru, de, fr, nl, es, it, hu, sk, pt, da, sr, pl, nb, tr, zh
overlay_opacity: 0.15             # 0-1 (dark overlay for better readability)
wind_speed_unit: ms               # ms or kmh (for legacy integrations)

# Graphics
visual_style: modern              # modern or classic
animation_quality: high           # high, medium or low (for slow devices)
show_aurora: true                 # northern lights on clear nights
show_raindrops: true              # raindrops on the glass in rain
show_wind_effects: true           # wind gusts and leaves

# Temperature & Details
show_feels_like: true
show_min_temp: true
show_precipitation_outlook: true  # "Rain expected around 16:00"
show_humidity: true
show_pressure: true
show_uv_index: true
show_dew_point: true

# Wind Information
show_wind: true
show_wind_direction: true
show_wind_gust: true

# Forecasts
show_hourly_forecast: true
hourly_forecast_hours: 8
show_daily_forecast: true
daily_forecast_days: 5
show_temperature_bars: true

# Sun & Clock
show_sunrise_sunset: true
sunrise_entity: sensor.sun_next_rising    # optional
sunset_entity: sensor.sun_next_setting    # optional
show_clock: true
show_date: true
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
| `language` | string | `auto` | `auto`, `en`, `ru`, `de`, `fr`, `nl`, `es`, `it`, `hu`, `sk`, `pt`, `da`, `sr`, `pl`, `nb`, `tr`, `zh`, `et` |
| `overlay_opacity` | number | `0.1` | Dark overlay opacity (0-1) for text readability |
| `text_color` | string | `white` | Text and icon color, any CSS color (e.g. `"#1a1a2e"`, `black`, `var(--primary-text-color)`). Combine with `overlay_opacity` / `text_shadow` for contrast |
| `border_radius` | number | theme | Corner radius in pixels (`0` for square corners). Defaults to the Home Assistant theme's card radius |
| `sun_position_x` | number | auto | Pin the sun/moon horizontally, in % of card width (`0` = left, `100` = right). Unset = moves across the sky |
| `sun_position_y` | number | auto | Pin the sun/moon vertically, in % of card height (`0` = top, `100` = bottom). Unset = moves across the sky |
| `show_animations` | boolean | `true` | Render canvas weather animations (set `false` for a static gradient) |
| `visual_style` | string | `modern` | Graphics style: `modern` (weather-aware sky, layered clouds, rain/snow depth, raindrops on the glass, wind gusts and leaves, sun rays, stars and real moon phase) or `classic` (the original simpler graphics) |
| `show_aurora` | boolean | `false` | Northern lights on clear nights (`modern` style) |
| `show_raindrops` | boolean | `true` | Raindrops on the glass in rain, heavy rain, thunderstorm and sleet (`modern` style, not on `low` quality) |
| `show_wind_effects` | boolean | `true` | Wind gusts and flying leaves in windy weather or above 8 m/s (`modern` style) |
| `animation_quality` | string | `high` | `high` (60 FPS, full detail), `medium` (30 FPS, fewer particles and cloud layers) or `low` (20 FPS, minimal particles, no extras, 1× canvas resolution) for slow devices such as wall tablets. Animations also pause while the card is off-screen, and show a still frame when the system "reduce motion" setting is on |
| **Temperature** |
| `show_feels_like` | boolean | `true` | Display "feels like" temperature |
| `show_min_temp` | boolean | `true` | Display minimum temperature |
| `show_precipitation_outlook` | boolean | `false` | Show when precipitation starts or stops in the next 12 hours, e.g. "Rain expected around 15:00" or "Snow ending around 18:00". Uses the hourly forecast; hidden when nothing changes (default layout only) |
| **Weather Details** |
| `show_humidity` | boolean | `false` | Display humidity percentage |
| `show_wind` | boolean | `false` | Display wind speed |
| `show_wind_direction` | boolean | `false` | Display wind direction |
| `show_wind_gust` | boolean | `false` | Display wind gust speed |
| `show_pressure` | boolean | `false` | Display atmospheric pressure in the weather entity's unit |
| `show_uv_index` | boolean | `false` | Display the UV index |
| `show_dew_point` | boolean | `false` | Display the dew point |
| `wind_speed_unit` | string | `ms` | `ms` or `kmh` (for legacy integrations) |
| **Forecasts** |
| `show_hourly_forecast` | boolean | `false` | Show hourly forecast |
| `hourly_forecast_hours` | number | `5` | Number of hours to display (1-24) |
| `show_daily_forecast` | boolean | `false` | Show daily forecast (high / low temperature and chance of precipitation when the provider reports them) |
| `daily_forecast_days` | number | `5` | Number of days to display (1-14) |
| `hourly_forecast_title` | string | translated | Custom hourly forecast title; `""` hides it |
| `daily_forecast_title` | string | translated | Custom daily forecast title; `""` hides it |
| `show_temperature_bars` | boolean | `false` | Daily forecast: show each day's low–high range as a colored bar on a scale shared by all days, with a dot for the current temperature on today's bar |
| **Sun & Clock** |
| `show_sunrise_sunset` | boolean | `false` | Display sunrise/sunset times |
| `sunrise_entity` | string | - | Custom sunrise sensor (optional) |
| `sunset_entity` | string | - | Custom sunset sensor (optional) |
| **Sensors** (optional, e.g. a personal weather station — each one overrides the weather entity's value; unavailable sensors fall back to it) |
| `temperature_entity` | string | - | Current temperature |
| `feels_like_entity` | string | - | "Feels like" temperature |
| `humidity_entity` | string | - | Humidity (%) |
| `wind_speed_entity` | string | - | Wind speed; its unit (`km/h`, `m/s`, `mph`, `kn`…) is used for display and wind gust is converted to it |
| `wind_gust_entity` | string | - | Wind gust speed |
| `wind_bearing_entity` | string | - | Wind direction in degrees |
| `precipitation_entity` | string | - | Precipitation, shown in the details row with the sensor's unit |
| `pressure_entity` | string | - | Pressure (shown with `show_pressure`) |
| `uv_index_entity` | string | - | UV index (shown with `show_uv_index`) |
| `dew_point_entity` | string | - | Dew point (shown with `show_dew_point`) |
| `aqi_entity` | string | - | Air quality index; shown in the details row whenever it is set |
| `show_clock` | boolean | `false` | Display current time |
| `show_date` | boolean | `false` | Display current date under the clock (e.g. "Wed, September 30"), in the card language. Follows `clock_position`; shown on its own if the clock is off |
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
| Magyar | `hu` | ✅ Complete |
| Slovenčina | `sk` | ✅ Complete |
| Português | `pt` | ✅ Complete |
| Dansk | `da` | ✅ Complete |
| Srpski | `sr` | ✅ Complete |
| Polski | `pl` | ✅ Complete |
| Norsk (bokmål) | `nb` | ✅ Complete |
| Türkçe | `tr` | ✅ Complete |
| 中文 | `zh` | ✅ Complete |
| Eesti | `et` | 🟡 Weather conditions only |

Contribute via [Weblate](https://hosted.weblate.org/engage/dynamic-weather-card/) — no coding required! Alternatively, edit (or create) `src/internationalization/locales/<code>/translation.json` right in the GitHub web UI and open a pull request against the `main` branch — that's the only file you need to touch, new languages are picked up automatically. Use `locales/en/translation.json` as the reference for keys; missing keys simply fall back to English. Note: for a brand-new language CI will also ask for the regenerated locale index — a maintainer can run `bun run locales:generate` and push it to your PR branch.

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
<tr>
<td>💨 Windy</td>
<td>🌬️ Windy, cloudy</td>
<td></td>
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

## 🎨 Sky and Time of Day

The sky color comes from both the weather and the time of day. Sunrise and sunset follow your real sun times (see above): each lasts from an hour before to an hour after the sun rises or sets.

| Period | Visual Effect |
|--------|---------------|
| 🌅 Sunrise | Deep blue overhead, warm glow at the horizon; weaker under heavy clouds |
| ☀️ Day | Blue on clear days, grey on overcast, darker in rain and storms |
| 🌇 Sunset | Deeper blue with an orange horizon |
| 🌙 Night | Dark sky with stars and the moon in its real phase |

Without any sun data, the card falls back to fixed hours: sunrise 6:00–8:00, day until 18:00, sunset until 20:00, then night.

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
├── animations/          # Canvas animations
│   ├── clouds.ts       # Layered clouds shared by all conditions
│   ├── rainy.ts, snowy.ts, hail.ts, foggy.ts, thunderstorm.ts, ...
│   ├── night-sky.ts    # Stars, shooting stars, moon phase
│   ├── aurora.ts, glass-drops.ts, wind.ts
│   ├── quality.ts      # animation_quality presets
│   └── classic/        # The original graphics (visual_style: classic)
├── components/          # Web components
│   ├── card.ts         # Main card component
│   ├── animation-manager.ts
│   └── editor.ts       # Visual editor
├── sky.ts               # Sky colors by condition and time of day
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
