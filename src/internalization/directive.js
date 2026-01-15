import { directive } from 'lit/directive.js';
import { AsyncDirective } from 'lit/async-directive.js';
import { i18n } from './index.js';

class TDirective extends AsyncDirective {
  render(key) {
    this._key = key;
    return i18n.t(key);
  }

  connected() {
    this._onLangChange = () => {
      this.setValue(i18n.t(this._key));
    };
    window.addEventListener('language-changed', this._onLangChange);
  }

  disconnected() {
    window.removeEventListener('language-changed', this._onLangChange);
  }
}

export const t = directive(TDirective);
