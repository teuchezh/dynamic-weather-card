import { directive, PartType } from 'lit/directive.js';
import { AsyncDirective } from 'lit/async-directive.js';
import i18next from './init.js';

class I18nDirective extends AsyncDirective {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error('i18n directive can only be used in text content');
    }

    this._key = null;
    this._options = null;
  }

  render(key, options = {}) {
    this._key = key;
    this._options = options;

    if (!i18next.isInitialized) {
      return key;
    }

    return i18next.t(key, options);
  }

  update(part, [key, options]) {
    this._key = key;
    this._options = options;

    i18next.on('initialized', this._updateValue);
    i18next.on('languageChanged', this._updateValue);
    i18next.on('loaded', this._updateValue);

    if (i18next.isInitialized) {
      return i18next.t(key, options);
    }

    return key;
  }

  _updateValue = () => {
    if (this._key) {
      this.setValue(i18next.t(this._key, this._options));
    }
  };

  disconnected() {
    i18next.off('initialized', this._updateValue);
    i18next.off('languageChanged', this._updateValue);
    i18next.off('loaded', this._updateValue);
  }

  reconnected() {
    i18next.on('initialized', this._updateValue);
    i18next.on('languageChanged', this._updateValue);
    i18next.on('loaded', this._updateValue);
  }
}

export const t = directive(I18nDirective);
