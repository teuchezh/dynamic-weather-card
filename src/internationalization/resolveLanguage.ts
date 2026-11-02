import { translations } from './locales.generated';
import type { SupportedLanguage } from './locales.generated';

interface ResolveLanguageOptions {
  configLang?: string;
  hassLang?: string;
}

const normalize = (lang?: string): SupportedLanguage | undefined => {
  if (!lang) return undefined;
  const lower = lang.toLowerCase();
  const codes = Object.keys(translations) as SupportedLanguage[];

  // Exact match, case-insensitive (keeps tagged locales such as sr-Latn)
  const exact = codes.find((code) => code.toLowerCase() === lower);
  if (exact) return exact;

  // Fallback to the base language (e.g. de-CH → de). Must not strip script
  // subtags that have their own locale file before this point.
  const base = lower.split('-')[0];
  return codes.find((code) => code.toLowerCase() === base);
};

export const resolveLanguage = ({ configLang, hassLang }: ResolveLanguageOptions = {}): SupportedLanguage => {
  if (configLang && configLang !== 'auto') return normalize(configLang) ?? 'en';

  return (
    normalize(hassLang) ??
    normalize(typeof navigator !== 'undefined' ? navigator.language : undefined) ??
    'en'
  );
};
