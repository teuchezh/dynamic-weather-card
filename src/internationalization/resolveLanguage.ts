import { translations } from './locales.generated';
import type { SupportedLanguage } from './locales.generated';

interface ResolveLanguageOptions {
  configLang?: string;
  hassLang?: string;
}

const normalize = (lang?: string): SupportedLanguage | undefined => {
  if (!lang) return undefined;
  const lower = lang.toLowerCase();

  // 1. Prvo tražimo tačno poklapanje za ceo kod (npr. 'sr-latn')
  if (Object.hasOwn(translations, lower)) return lower as SupportedLanguage;

  // 2. Posebna provera za srpski jezik da se ne bi polomila latinica
  if (lower.startsWith('sr')) {
    const srLang = lower.includes('latn') ? 'sr-latn' : 'sr';
    if (Object.hasOwn(translations, srLang)) return srLang as SupportedLanguage;
  }

  // 3. Standardni fallback na bazični kod jezika (npr. 'de' iz 'de-CH')
  const base = lower.split('-')[0];
  if (Object.hasOwn(translations, base)) return base as SupportedLanguage;

  return undefined;
};

export const resolveLanguage = ({ configLang, hassLang }: ResolveLanguageOptions = {}): SupportedLanguage => {
  if (configLang && configLang !== 'auto') return normalize(configLang) ?? 'en';

  return (
    normalize(hassLang) ??
    normalize(typeof navigator !== 'undefined' ? navigator.language : undefined) ??
    'en'
  );
};
