import ru from './locales/ru/translation';
import de from './locales/de/translation';
import nl from './locales/nl/translation';
import fr from './locales/fr/translation';
import en from './locales/en/translation';
import es from './locales/es/translation';
import it from './locales/it/translation';
import hu from './locales/hu/translation';
import type { Translation, SupportedLanguage } from './types';

const translations: Record<SupportedLanguage, Translation> = {
  en,
  ru,
  de,
  nl,
  fr,
  es,
  it,
  hu
};

class I18n {
  lang: SupportedLanguage = 'en';
  fallback: SupportedLanguage = 'en';

  t(key: string): string {
    const path = key.split('.');

    const fromCurrent = path.reduce<unknown>(
      (o, k) => (o as Record<string, unknown>)?.[k],
      translations[this.lang]
    );
    if (fromCurrent != null) return fromCurrent as string;

    const fromFallback = path.reduce<unknown>(
      (o, k) => (o as Record<string, unknown>)?.[k],
      translations[this.fallback]
    );

    return (fromFallback as string) ?? key;
  }

  setLanguage(lang: string): void {
    if (!translations[lang as SupportedLanguage] || this.lang === lang) return;
    this.lang = lang as SupportedLanguage;
    window.dispatchEvent(new CustomEvent('language-changed'));
  }
}

export const i18n = new I18n();

(window as unknown as { i18n: I18n }).i18n = i18n;

export { translations };
