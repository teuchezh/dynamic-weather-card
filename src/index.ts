import { AnimatedWeatherCard } from './components/card';
import { DynamicWeatherCardEditor } from './components/editor';
import { VERSION } from './constants';
import { registerSkyProperties } from './sky';
import type { CustomCardRegistration } from './types';

export { i18n } from './internationalization/index';
export { resolveLanguage } from './internationalization/resolveLanguage';

// Register custom elements
try {
  registerSkyProperties();
  customElements.define('dynamic-weather-card', AnimatedWeatherCard);
  customElements.define('dynamic-weather-card-editor', DynamicWeatherCardEditor);

  // Home Assistant custom-card badge
  console.info(
    `%cDynamic Weather Card%c${VERSION}`,
    'color: white; background: #007AFF; font-weight: bold; padding: 2px 8px; border-radius: 4px 0 0 4px',
    'color: white; background: #424242; font-weight: bold; padding: 2px 8px; border-radius: 0 4px 4px 0'
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
