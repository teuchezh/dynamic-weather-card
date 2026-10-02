/**
 * The visual editor shows every option with its default, but the YAML it saves should only hold what the
 * user changed: `type` and `entity` first, then the options that differ from the defaults. Empty values
 * (a cleared text or number field) are left out too, so the card falls back to its default.
 */
export function cleanEditorConfig(
  value: Record<string, unknown>,
  defaults: Record<string, unknown>
): Record<string, unknown> {
  const config: Record<string, unknown> = {};
  for (const key of ['type', 'entity']) {
    if (value[key] !== undefined) config[key] = value[key];
  }
  for (const [key, option] of Object.entries(value)) {
    if (key in config) continue;
    if (option === undefined || option === null || option === '') continue;
    if (key in defaults && defaults[key] === option) continue;
    config[key] = option;
  }
  return config;
}
