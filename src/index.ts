import { AnimatedWeatherCard } from './components/card';
import { DynamicWeatherCardEditor } from './components/editor';
import { VERSION } from './constants';
import type { CustomCardRegistration } from './types';

export { i18n } from './internalization/index';
export { t } from './internalization/directive';
export { resolveLanguage } from './internalization/resolveLanguage';

// Register custom elements
try {
  customElements.define('dynamic-weather-card', AnimatedWeatherCard);
  customElements.define('dynamic-weather-card-editor', DynamicWeatherCardEditor);

  // Log version info
  console.log(
    `%cDynamic Weather Card %c${VERSION}`,
    'color: #007AFF; font-weight: bold; font-size: 14px;',
    'color: #666; font-size: 12px;',
    '\nДинамическая карточка погоды'
  );

  // Register with Home Assistant
  window.customCards = window.customCards || [];
  const cardRegistration: CustomCardRegistration = {
    type: 'dynamic-weather-card',
    name: 'Dynamic Weather Card',
    description: 'Динамическая карточка погоды',
    preview: true,
    documentationURL: 'https://github.com/teuchezh/dynamic-weather-card'
  };
  window.customCards.push(cardRegistration);

} catch (error) {
  console.error('❌ Ошибка при регистрации Dynamic Weather Card:', error);
}
