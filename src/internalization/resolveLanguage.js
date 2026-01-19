export const resolveLanguage = ({ configLang, hassLang } = {}) => {
  if (configLang && configLang !== 'auto') return configLang;
  if (hassLang) return hassLang;

  // Только вне Home Assistant
  if (typeof navigator !== 'undefined' && navigator.language) {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith('ru')) return 'ru';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('nl')) return 'nl';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('es')) return 'es';
  }

  return 'en';
};
