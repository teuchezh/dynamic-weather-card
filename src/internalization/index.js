import ru from './locales/ru/translation.js';
import de from './locales/de/translation.js';
import nl from './locales/nl/translation.js';
import fr from './locales/fr/translation.js';
import en from './locales/en/translation.js';

const translations = {
  en,
  ru,
  de,
  nl,
  fr
};

const detectLang = () => {
  const lang = (navigator.language || 'en').toLowerCase();
  if (lang.startsWith('ru')) return 'ru';
  if (lang.startsWith('de')) return 'de';
  if (lang.startsWith('nl')) return 'nl';
  if (lang.startsWith('fr')) return 'fr';
  return 'en';
};

class I18n {
  lang = detectLang();
  fallback = 'en';

  t(key) {
    const path = key.split('.');

    const fromCurrent = path.reduce(
      (o, k) => o?.[k],
      translations[this.lang]
    );

    if (fromCurrent != null) {
      return fromCurrent;
    }

    const fromFallback = path.reduce(
      (o, k) => o?.[k],
      translations[this.fallback]
    );

    return fromFallback ?? key;
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.lang = lang;
    window.dispatchEvent(new CustomEvent('language-changed'));
  }
}

export const i18n = new I18n();

window.i18n = i18n;

export { translations };
