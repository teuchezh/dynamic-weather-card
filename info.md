# Dynamic Weather Card

Dynamic weather card for Home Assistant with realistic animations.

![demo](/docs/demo.gif)

**[Try Live Demo](https://teuchezh.github.io/dynamic-weather-card/demo.html)**

## Features

- Realistic Canvas animations (rain, snow, fog, thunderstorms)
- Dynamic backgrounds based on time of day
- Hourly and daily forecasts
- Automatic language detection
- Visual editor in Home Assistant UI
- Fully responsive design
- Works with all weather integrations

## Quick Start

### Minimal Configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

### Extended Configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather Station
language: auto  # auto, en, ru, de, fr, nl, es, it
show_feels_like: true
show_wind: true
show_hourly_forecast: true
hourly_forecast_hours: 8
show_daily_forecast: true
daily_forecast_days: 5
show_sunrise_sunset: true
show_clock: true
clock_format: 24h  # 12h or 24h
```

## Supported Languages

- English
- Русский (Russian)
- Deutsch (German)
- Français (French)
- Nederlands (Dutch)
- Español (Spanish)
- Italiano (Italian)

## Documentation

[Full English Documentation](https://github.com/teuchezh/animated-weather-card#readme)

[Русская документация](https://github.com/teuchezh/animated-weather-card/blob/main/README.ru.md)
