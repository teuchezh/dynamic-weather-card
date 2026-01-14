import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const baseUrl = new URL('.', import.meta.url).pathname;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'fr', 'de', 'nl'],
    debug: false,

    backend: {
      loadPath: `${baseUrl}locales/{{lng}}/translation.json`
    },

    detection: {
      order: ['navigator'],
      caches: []
    },

    keySeparator: '.'
  });

i18next.on('initialized', () => {
  window.dispatchEvent(new Event('i18n-ready'));
});

window.i18next = i18next;

export default i18next;
