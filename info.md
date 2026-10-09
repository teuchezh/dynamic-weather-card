# ⛅ Dynamic Weather Card

A Home Assistant weather card with a living sky.

![Dynamic Weather Card in different weather](https://raw.githubusercontent.com/teuchezh/dynamic-weather-card/main/docs/demo.webp)

**[🎮 Try the live demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)**

## ✨ Highlights

- **A living sky.** It follows the weather and the time of day, with sunrise and sunset from your real sun times, and layered clouds that drift faster in the wind.
- **Every kind of weather.** Rain with drops on the glass, swaying snow, bouncing hail, fog, lightning, and gusts with autumn leaves.
- **Night sky.** Stars, shooting stars, the moon in its real phase, and northern lights if you turn them on.
- **Useful at a glance.**
  - Hourly and daily forecasts with temperature bars.
  - When rain starts or stops.
  - Feels-like temperature, humidity, wind, pressure, UV index, dew point, air quality and a clock.
- **Your own sensors.** Use a personal weather station or any other sensor on top of the weather entity.
- **Light on devices.** `animation_quality` for wall tablets. Animations pause off-screen and respect "reduce motion". The classic look is still available.
- **Visual editor** grouped into sections, in 19 languages.

## 🚀 Quick start

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

Everything else can be set up in the visual editor. A fuller example:

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_precipitation_outlook: true
show_hourly_forecast: true
show_daily_forecast: true
show_temperature_bars: true
show_clock: true
show_aurora: true
```

## 📖 Documentation

All options, layouts and recipes: **[English](https://github.com/teuchezh/dynamic-weather-card#readme)** · **[Русский](https://github.com/teuchezh/dynamic-weather-card/blob/main/README.ru.md)**
