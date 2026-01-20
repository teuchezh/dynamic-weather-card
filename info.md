# 🌤️ Dynamic Weather Card

Dynamic weather card for Home Assistant with realistic animations.  
![demo](/docs/demo.gif)

**[Try Live Demo →](https://teuchezh.github.io/dynamic-weather-card/test.html)**

## Features

- 🎨 Animated weather effects on Canvas
- ☀️ Dynamic background based on time of day (sunrise, day, sunset, night)
- 🌧️ Realistic animations: rain, snow, hail, fog, thunderstorm
- 📊 Hourly forecast for today
- 🌍 Automatic language detection from Home Assistant settings
- ⚙️ Full customization of displayed elements
- 📱 Responsive design

## Quick Start

### Basic configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

The card will automatically detect the language from Home Assistant settings.

### Extended configuration

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: My Weather
language: auto  # 'auto', 'ru', 'en', 'de', 'fr', 'nl', 'es', 'it'
show_feels_like: true
show_min_temp: true
show_hourly_forecast: true
hourly_forecast_hours: 5
show_daily_forecast: false
daily_forecast_days: 5
show_sunrise_sunset: true
show_clock: true
clock_position: top  # 'top' or 'details'
```

## Supported Languages
- English
- Russian
- German
- French
- Dutch
- Spanish 

## Documentation

Full documentation is available in [README](https://github.com/teuchezh/dynamic-weather-card#readme)

[Russian documentation](https://github.com/teuchezh/dynamic-weather-card/blob/main/README.ru.md)
