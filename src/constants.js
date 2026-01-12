// Version is injected from package.json during build
export const VERSION = __VERSION__;

// Weather condition names
export const CONDITION_NAMES = {
  en: {
    'sunny': 'Sunny',
    'clear': 'Clear',
    'overcast': 'Overcast',
    'cloudy': 'Cloudy',
    'partlycloudy': 'Partly Cloudy',
    'rainy': 'Rainy',
    'rain': 'Rain',
    'snowy': 'Snowy',
    'snow': 'Snow',
    'foggy': 'Foggy',
    'fog': 'Fog',
    'lightning': 'Lightning',
    'lightning-rainy': 'Thunderstorm',
    'pouring': 'Heavy Rain',
    'snowy-rainy': 'Sleet',
    'hail': 'Hail',
    'clear-night': 'Clear Night'
  },
  ru: {
    'sunny': 'Солнечно',
    'clear': 'Ясно',
    'overcast': 'Пасмурно',
    'cloudy': 'Облачно',
    'partlycloudy': 'Переменная облачность',
    'rainy': 'Дождь',
    'rain': 'Дождь',
    'snowy': 'Снег',
    'snow': 'Снег',
    'foggy': 'Туман',
    'fog': 'Туман',
    'lightning': 'Гроза',
    'lightning-rainy': 'Гроза с дождем',
    'pouring': 'Сильный дождь',
    'snowy-rainy': 'Мокрый снег',
    'hail': 'Град',
    'clear-night': 'Ясная ночь'
  }
};

// Translations
export const TRANSLATIONS = {
  en: {
    'feels_like': 'Feels like',
    'forecast_title': 'Today\'s Forecast',
    'no_data': 'No data',
    'forecast_unavailable': 'Forecast unavailable',
    'weather': 'Weather'
  },
  ru: {
    'feels_like': 'Ощущается как',
    'forecast_title': 'Прогноз на сегодня',
    'no_data': 'Нет данных',
    'forecast_unavailable': 'Прогноз недоступен',
    'weather': 'Погода'
  }
};

// Time of day thresholds (in minutes from midnight)
export const TIME_THRESHOLDS = {
  SUNRISE_START: 360, // 6:00
  SUNRISE_END: 480, // 8:00
  DAY_END: 1080, // 18:00
  SUNSET_END: 1200 // 20:00
};

// Known attribute names for minimum temperature from various weather providers
export const TEMPLOW_ATTRIBUTES = [
  'templow',
  'temperature_low',
  'temp_low',
  'min_temp',
  'yandex_pogoda_minimal_forecast_temperature'
];

// Default configuration
export const DEFAULT_CONFIG = {
  showFeelsLike: true,
  showWind: false,
  showWindGust: false,
  showWindDirection: false,
  showHumidity: false,
  showMinTemp: true,
  showForecast: false,
  showSunriseSunset: false,
  language: 'auto',
  height: null
};
