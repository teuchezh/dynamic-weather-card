import { translations } from './locales.generated';
import type { SupportedLanguage } from './locales.generated';
import type { Translation } from './types';

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

  /**
   * Merge extra strings into a loaded language, e.g. the demo page's strings,
   * which are not part of the card bundle
   */
  addTranslations(lang: string, extra: Partial<Translation>): void {
    const current = translations[lang as SupportedLanguage];
    if (!current) return;
    translations[lang as SupportedLanguage] = { ...current, ...extra };
  }

  setLanguage(lang: string): void {
    if (!translations[lang as SupportedLanguage] || this.lang === lang) return;
    this.lang = lang as SupportedLanguage;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('language-changed'));
    }
  }
}

export const i18n = new I18n();

if (typeof window !== 'undefined') {
  (window as unknown as { i18n: I18n }).i18n = i18n;
}

export { translations };
export type { SupportedLanguage };
