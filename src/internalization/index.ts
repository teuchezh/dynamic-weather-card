import ru from './locales/ru/translation.js';
import de from './locales/de/translation.js';
import nl from './locales/nl/translation.js';
import fr from './locales/fr/translation.js';
import en from './locales/en/translation.js';
import type { Translation, SupportedLanguage } from './types';

const translations: Record<SupportedLanguage, Translation> = {
  en,
  ru,
  de,
  nl,
  fr
};

class I18n {
  lang: SupportedLanguage = 'en';
  fallback: SupportedLanguage = 'en';

  t(key: string): string {
    const path = key.split('.');

    const fromCurrent = path.reduce(
      (o: any, k: string) => o?.[k],
      translations[this.lang]
    );
    if (fromCurrent != null) return fromCurrent;

    const fromFallback = path.reduce(
      (o: any, k: string) => o?.[k],
      translations[this.fallback]
    );

    return fromFallback ?? key;
  }

  setLanguage(lang: string): void {
    if (!translations[lang as SupportedLanguage] || this.lang === lang) return;
    this.lang = lang as SupportedLanguage;
    window.dispatchEvent(new CustomEvent('language-changed'));
  }
}

export const i18n = new I18n();

(window as any).i18n = i18n;

export { translations };
