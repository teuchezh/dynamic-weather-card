import { translations } from './locales.generated';
import type { SupportedLanguage } from './locales.generated';

interface ResolveLanguageOptions {
  configLang?: string;
  hassLang?: string;
}

/** Browser / HA region tags that mean Traditional Chinese, not Simplified `zh`. */
const TRADITIONAL_CHINESE_ALIASES = new Set(['zh-tw', 'zh-hk', 'zh-mo']);

const findCode = (codes: SupportedLanguage[], targetLower: string): SupportedLanguage | undefined =>
  codes.find((code) => code.toLowerCase() === targetLower);

const normalize = (lang?: string): SupportedLanguage | undefined => {
  if (!lang) return undefined;
  const lower = lang.toLowerCase();
  const codes = Object.keys(translations) as SupportedLanguage[];

  // Exact match, case-insensitive (keeps tagged locales such as sr-Latn / zh-Hant)
  const exact = findCode(codes, lower);
  if (exact) return exact;

  // zh-TW / zh-HK / zh-MO (and zh-Hant-*) must not fall through to Simplified `zh`
  if (TRADITIONAL_CHINESE_ALIASES.has(lower) || lower.startsWith('zh-hant-')) {
    const hant = findCode(codes, 'zh-hant');
    if (hant) return hant;
  }

  // Fallback to the base language (e.g. de-CH → de). Must not strip script
  // subtags that have their own locale file before this point.
  const base = lower.split('-')[0];
  return findCode(codes, base);
};

export const resolveLanguage = ({ configLang, hassLang }: ResolveLanguageOptions = {}): SupportedLanguage => {
  if (configLang && configLang !== 'auto') return normalize(configLang) ?? 'en';

  return (
    normalize(hassLang) ??
    normalize(typeof navigator !== 'undefined' ? navigator.language : undefined) ??
    'en'
  );
};
