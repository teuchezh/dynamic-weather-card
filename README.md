<a id="top"></a>
<div align="center">

# ⛅ Dynamic Weather Card

### A Home Assistant weather card with a living sky

[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white&labelColor=2B2F36)](https://github.com/hacs/integration)
[![Release](https://img.shields.io/github/v/release/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&label=release&color=0A84FF&labelColor=2B2F36)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Downloads](https://img.shields.io/github/downloads/teuchezh/dynamic-weather-card/dynamic-weather-card.js?style=for-the-badge&logo=github&label=downloads&color=30D158&labelColor=2B2F36&displayAssetName=false)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Stars](https://img.shields.io/github/stars/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&label=stars&color=FFD60A&labelColor=2B2F36)](https://github.com/teuchezh/dynamic-weather-card/stargazers)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1%2B-18BCF2?style=for-the-badge&logo=homeassistant&logoColor=white&labelColor=2B2F36)](https://www.home-assistant.io/)

**[English](#)** | [Русский](README.ru.md)

**[🎮 Live demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)** • **[📦 Install](#installation)** • **[⚙️ Options](#configuration)** • **[🐛 Report an issue](https://github.com/teuchezh/dynamic-weather-card/issues)**

</div>

<div align="center">

![Dynamic Weather Card in different weather](/docs/demo.webp)

</div>

## ✨ Highlights

<table>
<tr>
<td width="33%" valign="top">

### 🌤️ A living sky
The sky changes with the weather and the time of day. Sunrise and sunset follow your real sun times, and layered clouds drift faster when the wind picks up.

</td>
<td width="33%" valign="top">

### 🌧️ Every kind of weather
Rain in depth, with drops running down the glass. Snowflakes that sway, bouncing hail, drifting fog, lightning bolts, and gusts with autumn leaves.

</td>
<td width="33%" valign="top">

### 🌙 Night sky
Twinkling stars and the odd shooting star. The moon is shown in today's real phase, and you can turn on the northern lights for clear nights.

</td>
</tr>
<tr>
<td valign="top">

### 📊 Useful at a glance
Hourly and daily forecasts with temperature range bars, and when rain starts or stops. Also feels-like temperature, humidity, wind, pressure, UV index, dew point, air quality, sunrise and sunset, and a clock.

</td>
<td valign="top">

### 🏡 Your own sensors
Show readings from a personal weather station or any other sensor. They override the weather entity, and the card falls back to it when a sensor is unavailable.

</td>
<td valign="top">

### ⚡ Light on devices
`animation_quality` for wall tablets. Animations pause while the card is off-screen and show a still frame with "reduce motion". The classic look is one option away.

</td>
</tr>
</table>

<a id="installation"></a>

## 📦 Installation

### HACS (recommended)

[![Open your Home Assistant instance and open this repository in HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

Or in HACS, search for **Dynamic Weather Card** and click **Download**.

<details>
<summary><b>Manual installation</b></summary>

1. Download `dynamic-weather-card.js` from the [latest release](https://github.com/teuchezh/dynamic-weather-card/releases/latest).
2. Copy it to `config/www/dynamic-weather-card.js`.
3. Go to **Settings → Dashboards → ⋮ → Resources → Add resource**:
   - URL: `/local/dynamic-weather-card.js`
   - Type: **JavaScript module**
4. Refresh the browser (Ctrl+Shift+R).

</details>

## 🚀 Quick start

Add the card from the dashboard editor: search for **Dynamic Weather Card** and pick your weather entity. Everything else is set up in the visual editor, which is grouped into sections.

The same in YAML:

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

The card picks up your language, units and sun times on its own. Try every option in the **[live demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)** before adding it to your dashboard.

## 🖼️ Layouts

![Default and minimal layouts](/docs/layouts.jpg)

<table>
<tr>
<td width="50%" valign="top">

**Default**: the full card with details and forecasts.

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_precipitation_outlook: true
show_hourly_forecast: true
show_daily_forecast: true
show_temperature_bars: true
show_clock: true
show_date: true
```

</td>
<td width="50%" valign="top">

**Minimal**: a compact strip for headers, sidebars and phones.

```yaml
type: custom:dynamic-weather-card
entity: weather.home
layout: minimal
```

</td>
</tr>
</table>

## 🧩 Recipes

<details>
<summary><b>Wall tablet</b>: smooth animations on a slow device</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
animation_quality: low      # 20 FPS, fewer particles, 1× resolution
show_clock: true
show_date: true
show_daily_forecast: true
```

</details>

<details>
<summary><b>Personal weather station</b>: your sensors on top of the forecast</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home                     # still used for the condition and the forecast
temperature_entity: sensor.outdoor_temperature
humidity_entity: sensor.outdoor_humidity
wind_speed_entity: sensor.wind_speed
wind_gust_entity: sensor.wind_gust
wind_bearing_entity: sensor.wind_bearing
pressure_entity: sensor.pressure
precipitation_entity: sensor.rain_rate
aqi_entity: sensor.air_quality_index
show_pressure: true
```

</details>

<details>
<summary><b>Up north</b>: northern lights on clear nights</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_aurora: true
```

</details>

<details>
<summary><b>Quiet mode</b>: weather without the extras</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_raindrops: false
show_wind_effects: false
# or: visual_style: classic, or show_animations: false for a still sky
```

</details>

<details>
<summary><b>Yandex Weather</b>: sunrise and sunset from separate sensors</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.yandex_pogoda
sunrise_entity: sensor.yandex_pogoda_next_sunrise
sunset_entity: sensor.yandex_pogoda_next_sunset
```

</details>

<a id="configuration"></a>

## ⚙️ Configuration

Only `entity` is required. The options below are grouped the same way as in the visual editor.

### General

| Option | Type | Default | Description |
|---|---|---|---|
| `entity` | string | **required** | Weather entity, e.g. `weather.home` |
| `name` | string | – | Title at the top of the card; empty hides it |
| `layout` | string | `default` | `default` or `minimal` (a compact strip) |
| `height` | number | `200` | Minimum card height in px (`56` for `minimal`) |

### Appearance

| Option | Type | Default | Description |
|---|---|---|---|
| `visual_style` | string | `modern` | `modern`: weather-aware sky, layered clouds, rain and snow with depth, stars and the real moon phase, sun rays. `classic`: the original, simpler graphics |
| `animation_quality` | string | `high` | `high` (60 FPS), `medium` (30 FPS, fewer particles and cloud layers) or `low` (20 FPS, minimal particles, no extras, 1× resolution) for wall tablets and slow devices |
| `show_animations` | boolean | `true` | `false` shows a still sky gradient without animations |
| `show_aurora` | boolean | `false` | Northern lights on clear nights |
| `show_raindrops` | boolean | `true` | Raindrops on the glass in rain, heavy rain, thunderstorm and sleet (not on `low` quality) |
| `show_wind_effects` | boolean | `true` | Gusts and flying leaves in windy weather, and in dry weather above 8 m/s |
| `overlay_opacity` | number | `0.1` | Darkens the sky (0–1) so text stays readable |
| `text_shadow` | number | `1` | Text shadow strength, `0`–`3` |
| `text_color` | string | `white` | Text and icon color, any CSS color (`"#1a1a2e"`, `black`, `var(--primary-text-color)`) |
| `border_radius` | number | theme | Corner radius in px; `0` for square corners |
| `sun_position_x` | number | auto | Pin the sun or moon horizontally, in % of the card width. Unset = follows the time of day |
| `sun_position_y` | number | auto | Pin the sun or moon vertically, in % of the card height |

> The card also pauses its animation while it is off-screen, and draws a single still frame when the system "reduce motion" setting is on.

### Details

| Option | Type | Default | Description |
|---|---|---|---|
| `show_feels_like` | boolean | `true` | "Feels like" temperature |
| `show_min_temp` | boolean | `true` | Today's minimum temperature |
| `show_precipitation_outlook` | boolean | `false` | When rain or snow starts or stops in the next 12 hours, e.g. *"Rain expected around 16:00"*. Uses the hourly forecast; hidden when nothing changes. Default layout only |
| `show_humidity` | boolean | `true` | Humidity |
| `show_wind` | boolean | `true` | Wind speed |
| `show_wind_gust` | boolean | `true` | Wind gusts, after the speed |
| `show_wind_direction` | boolean | `true` | Wind direction arrow |
| `wind_speed_unit` | string | `ms` | `ms` or `kmh`, only for integrations that don't report a unit |
| `show_pressure` | boolean | `false` | Pressure, in the weather entity's unit |
| `show_uv_index` | boolean | `false` | UV index |
| `show_dew_point` | boolean | `false` | Dew point |
| `show_sunrise_sunset` | boolean | `true` | Sunrise and sunset times |

### Forecast

| Option | Type | Default | Description |
|---|---|---|---|
| `show_hourly_forecast` | boolean | `false` | Hourly forecast |
| `hourly_forecast_hours` | number | `5` | Hours to show. No upper limit: a large number (e.g. `168`) shows everything the provider forecasts. A forecast spanning several days marks where each new day starts |
| `hourly_forecast_title` | string | translated | Custom title; `""` hides it |
| `show_daily_forecast` | boolean | `false` | Daily forecast with high, low and chance of precipitation |
| `daily_forecast_days` | number | `5` | Days to show, 1–14 |
| `daily_forecast_title` | string | translated | Custom title; `""` hides it |
| `show_temperature_bars` | boolean | `false` | Each day's low–high range as a colored bar on one shared scale, with today's temperature marked |
| `show_forecast_wind` | boolean | `false` | Wind direction, speed and gusts for each hour and day, when the provider reports them |

### Language, clock and date

| Option | Type | Default | Description |
|---|---|---|---|
| `language` | string | `auto` | `auto` (Home Assistant's language) or `en`, `ru`, `de`, `fr`, `nl`, `es`, `it`, `hu`, `sk`, `pt`, `da`, `sr`, `pl`, `nb`, `tr`, `zh`, `sl`, `et` |
| `show_clock` | boolean | `false` | Current time |
| `show_date` | boolean | `false` | Current date, e.g. "Wed, September 30" |
| `clock_position` | string | `top` | `top` (top right) or `details` (in the details row) |
| `clock_format` | string | `24h` | `24h` or `12h` |

### Sensors

Optional. Each sensor replaces the weather entity's value. When the sensor is unavailable, the weather entity's value is used.

| Option | Description |
|---|---|
| `temperature_entity` | Current temperature |
| `feels_like_entity` | "Feels like" temperature |
| `humidity_entity` | Humidity, % |
| `wind_speed_entity` | Wind speed. Its unit (`km/h`, `m/s`, `mph`, `kn`…) is used for display, and gusts are converted to it |
| `wind_gust_entity` | Wind gust speed |
| `wind_bearing_entity` | Wind direction, degrees |
| `precipitation_entity` | Precipitation, shown with the sensor's unit |
| `pressure_entity` | Pressure (with `show_pressure`) |
| `uv_index_entity` | UV index (with `show_uv_index`) |
| `dew_point_entity` | Dew point (with `show_dew_point`) |
| `aqi_entity` | Air quality index; shown whenever it is set |
| `sunrise_entity`, `sunset_entity` | Sunrise and sunset times, for integrations that don't provide them |
| `templow_attribute` | Weather entity attribute with today's minimum temperature, if your integration uses an unusual name |

### Actions

`tap_action` (default: `more-info`), `hold_action` and `double_tap_action` take the usual Home Assistant actions: `more-info`, `navigate`, `url`, `call-service`, `toggle` and `none`.

```yaml
tap_action:
  action: navigate
  navigation_path: /dashboard-weather
```

## 🌤️ Weather conditions

| Condition | What you see |
|---|---|
| ☀️ `sunny` / `clear` | Sun with slowly turning rays and a few clouds |
| 🌙 `clear-night` | Stars, shooting stars, the moon in its real phase and, optionally, the northern lights |
| ⛅ `partlycloudy` | Sun or moon behind drifting clouds |
| ☁️ `cloudy` | Layered overcast |
| 🌦️ `rainy` | Rain in three depth layers, splashes and drops on the glass |
| 🌧️ `pouring` | Heavy rain |
| ⚡ `lightning` / ⛈️ `lightning-rainy` | Storm clouds, lightning bolts and flashes, with rain |
| ❄️ `snowy` | Soft snowflakes in three layers |
| 🌨️ `snowy-rainy` | Rain and snow together |
| 🧊 `hail` | Hailstones bouncing off the ground |
| 🌫️ `fog` | Fog banks drifting over a ground haze |
| 💨 `windy` / 🌬️ `windy-variant` | Gusts and tumbling leaves, with sun or clouds |

<details>
<summary><b>🧠 How it works</b></summary>

**Sky and time of day.** The sky color depends on the weather and the time of day. Sunrise and sunset each last from an hour before to an hour after the sun rises or sets. The card looks for sun times in this order:

1. The `sunrise_entity` / `sunset_entity` sensors.
2. The weather entity's attributes.
3. Home Assistant's built-in `sun.sun`.

Without any sun data it falls back to fixed hours: sunrise 6:00–8:00, day until 18:00, sunset until 20:00.

**Wind units.** Units are detected from the integration: m/s, km/h, mph, knots or ft/s. Only integrations that don't report a unit need `wind_speed_unit`. The wind animation converts everything to m/s.

**Forecasts.** The card subscribes to Home Assistant's hourly and daily forecasts. Older integrations that only offer a `forecast` attribute also work: hourly entries are then grouped into days, with the day's high, low, chance of precipitation and strongest wind.

**Precipitation outlook.** It looks 12 hours ahead in the hourly forecast. An hour counts as wet when its condition is rain, snow, sleet, hail or storm, or when the chance of precipitation is at least 50%.

</details>

## 🌍 Languages

English, Русский, Deutsch, Français, Nederlands, Español, Italiano, Magyar, Slovenčina, Português, Dansk, Srpski, Polski, Norsk (bokmål), Türkçe, 中文, Slovenščina and Eesti. The card follows the Home Assistant language unless you set `language`.

To add or improve a translation, edit `src/internationalization/locales/<code>/translation.json` right on GitHub and open a pull request against `main`. No coding needed. New languages are picked up automatically, and missing keys fall back to English.

## 🛠️ Development

```bash
bun install
bun run dev        # rebuild on changes
bun run build      # lint + production build → dynamic-weather-card.js
bun run typecheck
```

Open `demo.html` through a local web server to try your changes, for example with `python3 -m http.server`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the workflow and [AGENTS.md](AGENTS.md) for the architecture.

## 🙏 Credits

- Weather icons: [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) by [@basmilius](https://github.com/basmilius) (MIT)
- Built for the [Home Assistant](https://www.home-assistant.io/) community

## 📄 License

MIT © [teuchezh](https://github.com/teuchezh)

<div align="center">

**Made with ❤️ for the Home Assistant community** • [⬆ Back to top](#top)

</div>
