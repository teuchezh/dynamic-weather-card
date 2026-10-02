/**
 * The `styles` option: the user's own CSS, added to the card and to each of its parts (details, clock,
 * forecasts), which have their own shadow roots that outside CSS (card-mod included) can't reach.
 * It is added after the built-in styles, so a rule with the same selector wins without !important.
 */
const added = new WeakMap<ShadowRoot, CSSStyleSheet | HTMLStyleElement>();

export function applyUserStyles(root: ShadowRoot | null | undefined, css: string | null | undefined): void {
  if (!root) return;
  const text = css ?? '';
  const existing = added.get(root);
  if (!existing && !text) return;

  if ('adoptedStyleSheets' in root && 'replaceSync' in CSSStyleSheet.prototype) {
    const sheet = existing instanceof CSSStyleSheet ? existing : new CSSStyleSheet();
    sheet.replaceSync(text);
    added.set(root, sheet);
    // Last, so it overrides the component's own styles
    if (root.adoptedStyleSheets[root.adoptedStyleSheets.length - 1] !== sheet) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets.filter(s => s !== sheet), sheet];
    }
    return;
  }

  // Browsers without constructable stylesheets: a <style> element at the end of the shadow root
  const style = existing instanceof HTMLStyleElement ? existing : document.createElement('style');
  style.textContent = text;
  added.set(root, style);
  root.appendChild(style);
}
