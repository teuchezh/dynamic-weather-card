<a id="top"></a>
<div align="center">

# ⛅ Dynamic Weather Card

### Карточка погоды для Home Assistant с живым небом

[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5?style=for-the-badge&logo=homeassistantcommunitystore&logoColor=white&labelColor=2B2F36)](https://github.com/hacs/integration)
[![Release](https://img.shields.io/github/v/release/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&label=release&color=0A84FF&labelColor=2B2F36)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Downloads](https://img.shields.io/github/downloads/teuchezh/dynamic-weather-card/dynamic-weather-card.js?style=for-the-badge&logo=github&label=downloads&color=30D158&labelColor=2B2F36&displayAssetName=false)](https://github.com/teuchezh/dynamic-weather-card/releases)
[![Stars](https://img.shields.io/github/stars/teuchezh/dynamic-weather-card?style=for-the-badge&logo=github&label=stars&color=FFD60A&labelColor=2B2F36)](https://github.com/teuchezh/dynamic-weather-card/stargazers)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2024.1%2B-18BCF2?style=for-the-badge&logo=homeassistant&logoColor=white&labelColor=2B2F36)](https://www.home-assistant.io/)

[English](README.md) | **Русский**

**[🎮 Демо](https://teuchezh.github.io/dynamic-weather-card/demo.html)** • **[📦 Установка](#installation)** • **[⚙️ Настройки](#configuration)** • **[🐛 Сообщить о проблеме](https://github.com/teuchezh/dynamic-weather-card/issues)**

</div>

<div align="center">

![Dynamic Weather Card в разную погоду](/docs/demo.webp)

</div>

## ✨ Главное

<table>
<tr>
<td width="33%" valign="top">

### 🌤️ Живое небо
Небо меняется вместе с погодой и временем суток. Восход и закат идут по реальному времени солнца, а многослойные облака плывут быстрее, когда усиливается ветер.

</td>
<td width="33%" valign="top">

### 🌧️ Любая погода
Дождь с глубиной и каплями, стекающими по стеклу. Покачивающиеся снежинки, отскакивающий град, плывущий туман, молнии, а в ветер порывы и осенние листья.

</td>
<td width="33%" valign="top">

### 🌙 Ночное небо
Мерцающие звёзды, иногда падающая звезда и луна в сегодняшней реальной фазе. Для ясных ночей можно включить северное сияние.

</td>
</tr>
<tr>
<td valign="top">

### 📊 Всё под рукой
Прогноз по часам и по дням с полосками температур и то, когда начнётся или закончится дождь. А ещё ощущаемая температура, влажность, ветер, давление, УФ-индекс, точка росы, качество воздуха, восход и закат, часы.

</td>
<td valign="top">

### 🏡 Свои датчики
Показывайте данные домашней метеостанции или любых других датчиков. Они заменяют значения погодной сущности, а если датчик недоступен, карточка берёт значение из неё.

</td>
<td valign="top">

### ⚡ Бережёт устройства
`animation_quality` для настенных планшетов. Вне экрана анимация на паузе, а с настройкой «уменьшить движение» показывается неподвижный кадр. Классический вид включается одной опцией.

</td>
</tr>
</table>

<a id="installation"></a>

## 📦 Установка

### HACS (рекомендуется)

[![Открыть репозиторий в HACS вашего Home Assistant.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=teuchezh&repository=dynamic-weather-card&category=plugin)

Или найдите в HACS **Dynamic Weather Card** и нажмите **Скачать**.

<details>
<summary><b>Ручная установка</b></summary>

1. Скачайте `dynamic-weather-card.js` из [последнего релиза](https://github.com/teuchezh/dynamic-weather-card/releases/latest).
2. Положите его в `config/www/dynamic-weather-card.js`.
3. Откройте **Настройки → Панели → ⋮ → Ресурсы → Добавить ресурс**:
   - URL: `/local/dynamic-weather-card.js`
   - Тип: **JavaScript module**
4. Обновите страницу браузера (Ctrl+Shift+R).

</details>

## 🚀 Быстрый старт

Добавьте карточку в редакторе панели: найдите **Dynamic Weather Card** и выберите погодную сущность. Всё остальное настраивается в визуальном редакторе, который разбит на разделы.

То же самое в YAML:

```yaml
type: custom:dynamic-weather-card
entity: weather.home
```

Язык, единицы измерения и время восхода и заката карточка определит сама. Все настройки можно попробовать в **[демо](https://teuchezh.github.io/dynamic-weather-card/demo.html)**, прежде чем добавлять карточку на панель.

## 🖼️ Макеты

![Обычный и компактный макеты](/docs/layouts.jpg)

<table>
<tr>
<td width="50%" valign="top">

**Обычный** (`default`): полная карточка с деталями и прогнозами.

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

**Минимальный** (`minimal`): компактная полоса для шапок, боковых панелей и телефонов.

```yaml
type: custom:dynamic-weather-card
entity: weather.home
layout: minimal
```

</td>
</tr>
</table>

## 🧩 Рецепты

<details>
<summary><b>Настенный планшет</b>: плавная анимация на слабом устройстве</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
animation_quality: low      # 20 FPS, меньше частиц, разрешение 1×
show_clock: true
show_date: true
show_daily_forecast: true
```

</details>

<details>
<summary><b>Домашняя метеостанция</b>: свои датчики поверх прогноза</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home                     # по-прежнему нужна для погоды и прогноза
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
<summary><b>На севере</b>: северное сияние ясной ночью</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_aurora: true
```

</details>

<details>
<summary><b>Спокойный режим</b>: погода без лишних эффектов</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_raindrops: false
show_wind_effects: false
# или: visual_style: classic, или show_animations: false для неподвижного неба
```

</details>

<details>
<summary><b>Яндекс Погода</b>: восход и закат из отдельных датчиков</summary>

```yaml
type: custom:dynamic-weather-card
entity: weather.yandex_pogoda
sunrise_entity: sensor.yandex_pogoda_next_sunrise
sunset_entity: sensor.yandex_pogoda_next_sunset
```

</details>

<a id="configuration"></a>

## ⚙️ Настройки

Обязательна только `entity`. Остальные параметры сгруппированы так же, как в визуальном редакторе.

### Общие

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| `entity` | string | **обязательно** | Погодная сущность, например `weather.home` |
| `name` | string | – | Заголовок карточки; пустой скрывает его |
| `layout` | string | `default` | `default` или `minimal` (компактная полоса) |
| `height` | number | `200` | Минимальная высота в px (`56` для `minimal`) |

### Внешний вид

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| `visual_style` | string | `modern` | `modern`: небо по погоде, многослойные облака, дождь и снег с глубиной, звёзды и реальная фаза луны, лучи солнца. `classic`: прежняя, более простая графика |
| `animation_quality` | string | `high` | `high` (60 FPS), `medium` (30 FPS, меньше частиц и слоёв облаков) или `low` (20 FPS, минимум частиц, без эффектов, разрешение 1×) для настенных планшетов и слабых устройств |
| `show_animations` | boolean | `true` | `false` показывает неподвижный градиент неба без анимаций |
| `show_aurora` | boolean | `false` | Северное сияние ясной ночью |
| `show_raindrops` | boolean | `true` | Капли на стекле в дождь, ливень, грозу и мокрый снег (кроме качества `low`) |
| `show_wind_effects` | boolean | `true` | Порывы ветра и летящие листья в ветреную погоду, а в сухую погоду при ветре от 8 м/с |
| `overlay_opacity` | number | `0.1` | Затемнение неба (0–1), чтобы текст читался |
| `text_shadow` | number | `1` | Сила тени текста, от `0` до `3` |
| `text_color` | string | `white` | Цвет текста и значков, любой CSS-цвет (`"#1a1a2e"`, `black`, `var(--primary-text-color)`) |
| `border_radius` | number | тема | Скругление углов в px; `0` для прямых углов |
| `sun_position_x` | number | авто | Закрепить солнце или луну по горизонтали, в % ширины карточки. Не задано — движется по времени суток |
| `sun_position_y` | number | авто | Закрепить солнце или луну по вертикали, в % высоты карточки |
| `styles` | string | — | Свой CSS для карточки и всех её частей, см. [Стилизация](#styling) |

> Кроме того, вне экрана анимация ставится на паузу, а при включённой в системе настройке «уменьшить движение» карточка рисует один неподвижный кадр.

### Детали

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| `show_feels_like` | boolean | `true` | Температура «ощущается как» |
| `show_min_temp` | boolean | `true` | Минимальная температура за сегодня |
| `show_precipitation_outlook` | boolean | `false` | Когда в ближайшие 12 часов начнутся или закончатся дождь или снег, например *«Дождь ожидается около 16:00»*. Строится по почасовому прогнозу; скрыта, если ничего не меняется. Только в обычном макете |
| `show_humidity` | boolean | `true` | Влажность |
| `show_wind` | boolean | `true` | Скорость ветра |
| `show_wind_gust` | boolean | `true` | Порывы ветра, после скорости |
| `show_wind_direction` | boolean | `true` | Стрелка направления ветра |
| `wind_speed_unit` | string | `auto` | `auto` — единицы интеграции или датчика ветра. `ms`, `kmh`, `mph` или `kn` переводят весь ветер на карточке, включая прогнозы |
| `show_pressure` | boolean | `false` | Давление в единицах погодной сущности |
| `show_uv_index` | boolean | `false` | УФ-индекс |
| `show_dew_point` | boolean | `false` | Точка росы |
| `show_sunrise_sunset` | boolean | `true` | Время восхода и заката |

### Прогноз

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| `show_hourly_forecast` | boolean | `false` | Прогноз по часам |
| `hourly_forecast_hours` | number | `5` | Сколько часов показывать. Без ограничений: большое число (например, `168`) покажет весь прогноз провайдера. Если прогноз захватывает несколько дней, начало каждого дня отмечено |
| `hourly_forecast_step` | number | `1` | Показывать каждые N часов, например `3` — 00:00, 03:00, 06:00 … У каждой точки — наибольшая вероятность осадков за её часы. `hourly_forecast_hours` — число точек |
| `hourly_forecast_chart` | boolean | `false` | Температура плавной кривой, окрашенной по температуре, и вероятность осадков столбиками под ней |
| `hourly_forecast_title` | string | перевод | Свой заголовок; `""` скрывает его |
| `show_daily_forecast` | boolean | `false` | Прогноз по дням: максимум, минимум и вероятность осадков |
| `daily_forecast_days` | number | `5` | Сколько дней показывать, 1–14 |
| `daily_forecast_title` | string | перевод | Свой заголовок; `""` скрывает его |
| `show_temperature_bars` | boolean | `false` | Диапазон мин.–макс. каждого дня цветной полоской на общей шкале, с отметкой текущей температуры на сегодняшней |
| `show_forecast_wind` | boolean | `false` | Направление, скорость и порывы ветра для каждого часа и дня, если их передаёт поставщик погоды |
| `show_forecast_description` | boolean | `false` | Текстовый прогноз поставщика погоды на текущий период, например *«Partly sunny, with a high near 75.»* Есть лишь у некоторых интеграций, в основном у метеослужбы США (NWS); иначе скрыт. Только в стандартной раскладке |

### Язык, часы и дата

| Параметр | Тип | По умолчанию | Описание |
|---|---|---|---|
| `language` | string | `auto` | `auto` (язык Home Assistant) или `en`, `ru`, `de`, `fr`, `nl`, `es`, `it`, `hu`, `sk`, `pt`, `da`, `sr`, `pl`, `nb`, `tr`, `zh`, `sl`, `et` |
| `show_clock` | boolean | `false` | Текущее время |
| `show_date` | boolean | `false` | Текущая дата, например «ср, 30 сентября» |
| `clock_position` | string | `top` | `top` (вверху справа) или `details` (в строке деталей) |
| `clock_format` | string | `24h` | `24h` или `12h` |

### Датчики

Необязательные. Каждый датчик заменяет значение из погодной сущности. Если датчик недоступен, берётся значение погодной сущности.

| Параметр | Описание |
|---|---|
| `temperature_entity` | Текущая температура |
| `feels_like_entity` | Температура «ощущается как» |
| `humidity_entity` | Влажность, % |
| `wind_speed_entity` | Скорость ветра. Её единица (`km/h`, `m/s`, `mph`, `kn`…) используется для отображения, порывы пересчитываются в неё |
| `wind_gust_entity` | Скорость порывов ветра |
| `wind_bearing_entity` | Направление ветра, градусы |
| `precipitation_entity` | Осадки, с единицей датчика |
| `pressure_entity` | Давление (при `show_pressure`) |
| `uv_index_entity` | УФ-индекс (при `show_uv_index`) |
| `dew_point_entity` | Точка росы (при `show_dew_point`) |
| `aqi_entity` | Индекс качества воздуха; показывается, если задан |
| `sunrise_entity`, `sunset_entity` | Время восхода и заката, для интеграций, которые его не отдают |
| `templow_attribute` | Атрибут погодной сущности с минимальной температурой за сегодня, если у интеграции он называется необычно |

### Стилизация<a id="styling"></a>

**CSS-переменные** меняют основные размеры. Они работают из темы, из `styles` и из card-mod:

| Переменная | По умолчанию | Что |
|---|---|---|
| `--dwc-temperature-size` | `64px` (компактная: `52px`) | Текущая температура |
| `--dwc-condition-size` | `20px` (компактная: `15px`) | Состояние, например «Солнечно» |
| `--dwc-details-size` | `13px` (компактная: `14px`) | Влажность, ветер, восход и другие детали |
| `--dwc-clock-size` | `48px` (телефоны: `36px`, компактная: `32px`) | Часы |
| `--dwc-date-size` | `16px` (компактная: `14px`) | Дата |
| `--dwc-padding` | `20px` (компактная: `8px 16px`) | Отступы вокруг содержимого |
| `--dwc-text-color` | `white` | Текст и иконки (то же, что `text_color`) |
| `--dwc-border-radius` | тема | Углы (то же, что `border_radius`) |

**`styles`** добавляет ваш CSS в карточку и во все её части (детали, часы, прогнозы). Эти правила идут после встроенных, поэтому `!important` не нужен:

```yaml
type: custom:dynamic-weather-card
entity: weather.home
show_clock: true
styles: |
  ha-card { --dwc-temperature-size: 40px; --dwc-clock-size: 28px; }
  .feels-like { font-size: 14px; }
  .details { flex-direction: column; align-items: flex-start; }
  .forecast-title { letter-spacing: 0; text-transform: none; }
```

**card-mod** достаёт только до самой карточки, но не до её частей, а его правила проигрывают встроенным стилям. В нём используйте переменные:

```yaml
card_mod:
  style: |
    ha-card { --dwc-temperature-size: 40px; --dwc-clock-size: 28px; }
```

### Действия

`tap_action` (по умолчанию `more-info`), `hold_action` и `double_tap_action` принимают обычные действия Home Assistant: `more-info`, `navigate`, `url`, `call-service`, `toggle` и `none`.

```yaml
tap_action:
  action: navigate
  navigation_path: /dashboard-weather
```

## 🌤️ Погодные условия

| Условие | Что на экране |
|---|---|
| ☀️ `sunny` / `clear` | Солнце с медленно вращающимися лучами и немного облаков |
| 🌙 `clear-night` | Звёзды, падающие звёзды, луна в реальной фазе и, по желанию, северное сияние |
| ⛅ `partlycloudy` | Солнце или луна за плывущими облаками |
| ☁️ `cloudy` | Многослойная облачность |
| 🌦️ `rainy` | Дождь в три слоя глубины, брызги и капли на стекле |
| 🌧️ `pouring` | Ливень |
| ⚡ `lightning` / ⛈️ `lightning-rainy` | Грозовые тучи, молнии и вспышки, с дождём |
| ❄️ `snowy` | Мягкие снежинки в три слоя |
| 🌨️ `snowy-rainy` | Дождь со снегом |
| 🧊 `hail` | Град, отскакивающий от земли |
| 🌫️ `fog` | Полосы тумана над дымкой у земли |
| 💨 `windy` / 🌬️ `windy-variant` | Порывы и кувыркающиеся листья, с солнцем или облаками |

<details>
<summary><b>🧠 Как это работает</b></summary>

**Небо и время суток.** Цвет неба зависит и от погоды, и от времени суток. Восход и закат длятся от часа до и до часа после восхода или заката. Время солнца карточка ищет в таком порядке:

1. Датчики `sunrise_entity` / `sunset_entity`.
2. Атрибуты погодной сущности.
3. Встроенная сущность Home Assistant `sun.sun`.

Если данных о солнце нет совсем, берутся фиксированные часы: восход 6:00–8:00, день до 18:00, закат до 20:00.

**Единицы ветра.** Единицы берутся из интеграции или датчика ветра: м/с, км/ч, миль/ч, узлы или фут/с; без единиц считается, что это м/с. При `wind_speed_unit: auto` ветер показывается как есть, иначе всё (текущий ветер, порывы и прогнозы) переводится в выбранные единицы. км/ч, миль/ч и узлы округляются до целых. Анимация ветра всё переводит в м/с.

**Прогнозы.** Карточка подписывается на почасовой и дневной прогнозы Home Assistant. Старые интеграции, у которых есть только атрибут `forecast`, тоже работают: почасовые записи тогда группируются по дням, с максимумом, минимумом, вероятностью осадков и самым сильным ветром.

**Когда начнётся дождь.** Карточка смотрит на 12 часов вперёд в почасовом прогнозе. Час считается дождливым, если в нём дождь, снег, мокрый снег, град или гроза, или если вероятность осадков не меньше 50%.

</details>

## 🌍 Языки

English, Русский, Deutsch, Français, Nederlands, Español, Italiano, Magyar, Slovenčina, Português, Dansk, Srpski, Polski, Norsk (bokmål), Türkçe, 中文, Slovenščina и Eesti. Карточка следует языку Home Assistant, если не задан `language`.

Чтобы добавить или улучшить перевод, отредактируйте `src/internationalization/locales/<code>/translation.json` прямо на GitHub и откройте pull request в `main`. Программировать не нужно. Новые языки подхватываются автоматически, а недостающие ключи берутся из английского.

## 🛠️ Разработка

```bash
bun install
bun run dev        # пересборка при изменениях
bun run build      # линт + продакшн-сборка → dynamic-weather-card.js
bun run typecheck
```

Чтобы проверить изменения, откройте `demo.html` через локальный веб-сервер, например `python3 -m http.server`. Порядок работы описан в [CONTRIBUTING.md](CONTRIBUTING.md), архитектура — в [AGENTS.md](AGENTS.md).

## 🙏 Благодарности

- Иконки погоды: [Basmilius Weather Icons](https://github.com/basmilius/weather-icons) от [@basmilius](https://github.com/basmilius) (MIT)
- Сделано для сообщества [Home Assistant](https://www.home-assistant.io/)

## 📄 Лицензия

MIT © [teuchezh](https://github.com/teuchezh)

<div align="center">

**Сделано с ❤️ для сообщества Home Assistant** • [⬆ Наверх](#top)

</div>
