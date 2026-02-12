<div align="center">

# ⛅ Dynamic Weather Card

### Динамическая карточка погоды для Home Assistant с реалистичными анимациями

[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&color=blue)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Загрузки](https://img.shields.io/github/downloads/teuchezh/dynamic-weather-card/dynamic-weather-card.js?style=for-the-badge&logo=github&color=green&label=downloads&displayAssetName=false)](https://github.com/teuchezh/dynamic-weather-card/releases)

[![Звёзды](https://img.shields.io/github/stars/teuchezh/dynamic-weather-card?style=social)](https://github.com/teuchezh/dynamic-weather-card/stargazers)
[![Вопросы](https://img.shields.io/github/issues/teuchezh/dynamic-weather-card?style=social&logo=github)](https://github.com/teuchezh/dynamic-weather-card/issues)

[English](README.md) | **Русский**

**[🎮 Попробовать демо](https://teuchezh.github.io/dynamic-weather-card/demo.html)** • **[📖 Документация](#конфигурация)** • **[🐛 Сообщить о проблеме](https://github.com/teuchezh/dynamic-weather-card/issues)**

</div>

---

## 🌟 Предпросмотр

![demo](/docs/demo.gif)

<div align="center">

[![Открыть репозиторий в HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

</div>

---

## ✨ Возможности

<table>
<tr>
<td width="50%">

### 🎨 Визуальный опыт
- **Реалистичные Canvas-анимации**
  - Дождь с разной интенсивностью
  - Снегопад с различными эффектами частиц
  - Туман и дымка
  - Град и мокрый снег
  - Молнии и грозы

- **Динамические фоны по времени суток**
  - Градиент восхода (6:00 - 8:00)
  - Ясное дневное небо (8:00 - 18:00)
  - Градиент заката (18:00 - 20:00)
  - Ночное небо (20:00 - 6:00)

</td>
<td width="50%">

### ⚙️ Функциональность
- **Умное отображение данных**
  - Почасовой и ежедневный прогнозы
  - Ощущаемая температура
  - Скорость ветра, порывы и направление
  - Уровень влажности
  - Время восхода и заката
  - Часы реального времени (12ч/24ч)

- **Удобство использования**
  - Визуальный редактор в интерфейсе Home Assistant
  - Автоопределение языка и единиц измерения
  - Полностью адаптивный дизайн
  - Работает со всеми интеграциями погоды

</td>
</tr>
</table>

---

## 📦 Установка

### Вариант 1: HACS (Рекомендуется)

1. Нажмите кнопку ниже, чтобы открыть HACS:

   [![Открыть HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

2. Или вручную:
   - Откройте HACS в Home Assistant
   - Перейдите в раздел **Frontend**
   - Нажмите кнопку **"+"**
   - Найдите **"Dynamic Weather Card"**
   - Нажмите **Установить**

### Вариант 2: Ручная установка

1. Скачайте `dynamic-weather-card.js` из [последнего релиза](https://github.com/teuchezh/dynamic-weather-card/releases)
2. Скопируйте файл в директорию `config/www/community/dynamic-weather-card/`
3. Добавьте ресурс в Home Assistant:

   **Настройки** → **Панели управления** → **Ресурсы** → **Добавить ресурс**

   ```
   URL: /local/community/dynamic-weather-card/dynamic-weather-card.js
   Тип: JavaScript Module
   ```

---

## 🚀 Быстрый старт

### Минимальная конфигурация

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

Вот и всё! Карточка автоматически определит ваш язык и настройки отображения.

### Использование визуального редактора

1. Добавьте карточку на панель управления
2. Найдите **"Dynamic Weather Card"**
3. Выберите сущность погоды
4. Настройте параметры в визуальном редакторе

---

## ⚙️ Конфигурация

<details>
<summary><b>📋 Полный пример конфигурации</b> (нажмите, чтобы развернуть)</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
name: Моя метеостанция
height: 300
language: auto                    # auto, en, ru, de, fr, nl, es, it, hu, sk
overlay_opacity: 0.15             # 0-1 (тёмное наложение для лучшей читаемости)
wind_speed_unit: ms               # ms или kmh (для устаревших интеграций)

# Температура и влажность
show_feels_like: true
show_min_temp: true
show_humidity: true

# Информация о ветре
show_wind: true
show_wind_direction: true
show_wind_gust: true

# Прогнозы
show_hourly_forecast: true
hourly_forecast_hours: 8
show_daily_forecast: true
daily_forecast_days: 5

# Солнце и часы
show_sunrise_sunset: true
sunrise_entity: sensor.sun_next_rising    # опционально
sunset_entity: sensor.sun_next_setting    # опционально
show_clock: true
clock_position: top                       # top или details
clock_format: 24h                         # 12h или 24h
```

</details>

### 📊 Параметры конфигурации

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| **Обязательные** |
| `entity` | string | - | ID сущности погоды (например, `weather.home`) |
| **Отображение** |
| `name` | string | - | Пользовательское название карточки (оставьте пустым, чтобы скрыть) |
| `height` | number | `200` | Высота карточки в пикселях |
| `language` | string | `auto` | `auto`, `en`, `ru`, `de`, `fr`, `nl`, `es`, `it`, `hu`, `sk` |
| `overlay_opacity` | number | `0.1` | Прозрачность тёмного наложения (0-1) для читаемости текста |
| **Температура** |
| `show_feels_like` | boolean | `true` | Отображать ощущаемую температуру |
| `show_min_temp` | boolean | `true` | Отображать минимальную температуру |
| **Детали погоды** |
| `show_humidity` | boolean | `false` | Отображать влажность в процентах |
| `show_wind` | boolean | `false` | Отображать скорость ветра |
| `show_wind_direction` | boolean | `false` | Отображать направление ветра |
| `show_wind_gust` | boolean | `false` | Отображать скорость порывов ветра |
| `wind_speed_unit` | string | `ms` | `ms` или `kmh` (для устаревших интеграций) |
| **Прогнозы** |
| `show_hourly_forecast` | boolean | `false` | Показать почасовой прогноз |
| `hourly_forecast_hours` | number | `5` | Количество часов для отображения (1-24) |
| `show_daily_forecast` | boolean | `false` | Показать ежедневный прогноз |
| `daily_forecast_days` | number | `5` | Количество дней для отображения (1-14) |
| **Солнце и часы** |
| `show_sunrise_sunset` | boolean | `false` | Отображать время восхода/заката |
| `sunrise_entity` | string | - | Пользовательский сенсор восхода (опционально) |
| `sunset_entity` | string | - | Пользовательский сенсор заката (опционально) |
| `show_clock` | boolean | `false` | Отображать текущее время |
| `clock_position` | string | `top` | `top` (сверху справа) или `details` (в строке информации) |
| `clock_format` | string | `24h` | `12h` (AM/PM) или `24h` |

---

## 🌡️ Примеры для разных интеграций

### OpenWeatherMap / Met.no

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_hourly_forecast: true
show_daily_forecast: true
```

### Яндекс.Погода

Яндекс.Погода требует отдельные сенсоры для восхода/заката:

```yaml
type: custom:dynamic-weather-card
entity: weather.yandex_pogoda
name: Москва
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

## 🌍 Поддержка языков

Карточка автоматически определяет язык Home Assistant или вы можете установить его вручную:

| Язык | Код | Статус |
|------|-----|--------|
| English | `en` | ✅ Полный |
| Русский | `ru` | ✅ Полный |
| Deutsch | `de` | ✅ Полный |
| Français | `fr` | ✅ Полный |
| Nederlands | `nl` | ✅ Полный |
| Español | `es` | ✅ Полный |
| Italiano | `it` | ✅ Полный |

Хотите добавить свой язык? [Внесите вклад здесь!](https://github.com/teuchezh/dynamic-weather-card/tree/main/src/internationalization/locales)

---

## 🌤️ Поддерживаемые погодные условия

<table>
<tr>
<td>☀️ Солнечно / Ясно</td>
<td>🌙 Ясная ночь</td>
<td>⛅ Переменная облачность</td>
</tr>
<tr>
<td>☁️ Облачно / Пасмурно</td>
<td>🌧️ Дождь</td>
<td>⛈️ Ливень</td>
</tr>
<tr>
<td>❄️ Снег</td>
<td>🌨️ Мокрый снег</td>
<td>🌫️ Туман</td>
</tr>
<tr>
<td>⚡ Молния</td>
<td>⛈️ Гроза</td>
<td>🧊 Град</td>
</tr>
</table>

---

## 💡 Умные функции

### Автоматическое определение единиц скорости ветра

Карточка автоматически определяет единицы скорости ветра из вашей интеграции погоды:

- **Современные интеграции** (Met.no, OpenWeatherMap, Яндекс): Единицы определяются автоматически
- **Устаревшие интеграции**: Установите параметр `wind_speed_unit` вручную

Поддерживаемые единицы: м/с, км/ч, миль/ч, узлы, фут/с

### Автоматическое определение восхода/заката

Карточка ищет данные о восходе/закате в следующем порядке:

1. Пользовательские сенсоры (`sunrise_entity`, `sunset_entity`)
2. Атрибуты сущности погоды
3. Встроенная сущность `sun.sun` в Home Assistant

В большинстве случаев настройка не требуется!

---

## 🎨 Фоны по времени суток

| Время | Период | Визуальный эффект |
|-------|--------|-------------------|
| 6:00 - 8:00 | 🌅 Восход | Тёплый оранжево-розовый градиент |
| 8:00 - 18:00 | ☀️ День | Яркое голубое небо |
| 18:00 - 20:00 | 🌇 Закат | Оранжево-фиолетовый градиент |
| 20:00 - 6:00 | 🌙 Ночь | Глубокое синее/фиолетовое ночное небо |

---

## 🔧 Разработка

### Требования

- [Bun](https://bun.sh/) или [Node.js](https://nodejs.org/) 18+
- Современный браузер с поддержкой Canvas

### Настройка

```bash
# Установка зависимостей
bun install
# или
npm install

# Режим разработки (авто-пересборка)
bun run dev

# Продакшн-сборка
bun run build

# Проверка кода
bun run lint

# Исправление проблем линтинга
bun run lint:fix
```

### Структура проекта

```
src/
├── animations/          # Движки Canvas-анимаций
│   ├── rain.ts
│   ├── snow.ts
│   ├── fog.ts
│   └── ...
├── components/          # Веб-компоненты
│   ├── card.ts         # Главный компонент карточки
│   └── editor.ts       # Визуальный редактор
├── internationalization/ # i18n переводы
│   └── locales/
│       ├── en/
│       ├── ru/
│       └── ...
├── constants.ts         # Настройки по умолчанию
├── types.ts            # TypeScript определения
└── utils.ts            # Вспомогательные функции
```

---

## Вклад в проект и поддержка

Вклады приветствуются! Если эта карточка вам полезна, вот как вы можете помочь:

- Добавить переводы для новых языков
- Сообщить о багах и проблемах
- Предложить новые функции
- Отправить pull request
- Поставить звезду репозиторию
- Поделиться отзывами

---

## Лицензия

MIT © [teuchezh](https://github.com/teuchezh)

---

## Благодарности

- **Иконки погоды**: [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) от [@basmilius](https://github.com/basmilius) (Лицензия MIT)
- **Создано для**: сообщества [Home Assistant](https://www.home-assistant.io/)

---

<div align="center">

**Сделано с ❤️ для сообщества Home Assistant**

[⬆ Наверх](#-dynamic-weather-card)

</div>
