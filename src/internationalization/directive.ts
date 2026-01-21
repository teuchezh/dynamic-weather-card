import { directive } from 'lit/directive.js';
import { AsyncDirective } from 'lit/async-directive.js';
import { i18n } from './index';

class TDirective extends AsyncDirective {
  private _key: string = '';
  private _onLangChange: (() => void) | null = null;

  render(key: string): string {
    this._key = key;
    return i18n.t(key);
  }

  override reconnected(): void {
    this._onLangChange = () => {
      this.setValue(i18n.t(this._key));
    };
    window.addEventListener('language-changed', this._onLangChange);
  }

  override disconnected(): void {
    if (this._onLangChange) {
      window.removeEventListener('language-changed', this._onLangChange);
    }
  }
}

export const t = directive(TDirective);
