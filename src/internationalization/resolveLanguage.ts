import type { SupportedLanguage } from './types';

interface ResolveLanguageOptions {
  configLang?: string;
  hassLang?: string;
}

export const resolveLanguage = ({ configLang, hassLang }: ResolveLanguageOptions = {}): SupportedLanguage => {
  if (configLang && configLang !== 'auto') return configLang as SupportedLanguage;
  if (hassLang) return hassLang as SupportedLanguage;

  // Only outside Home Assistant
  if (typeof navigator !== 'undefined' && navigator.language) {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith('ru')) return 'ru';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('nl')) return 'nl';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('it')) return 'it';
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('hu')) return 'hu';
  }

  return 'en';
};
