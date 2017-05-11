import {Injectable, Inject} from '@angular/core';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_PL_NAME, LANG_PL_TRANS } from './lang-pl';

@Injectable()
export class TranslateService {
  private _currentLang = 'pl';

  private _translations = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_PL_NAME]: LANG_PL_TRANS,
  };

  public get currentLang() {
    return this._currentLang;
  }

  // inject our translations
  constructor() {
  }

  public use(lang: string): void {
    // set current language
    this._currentLang = lang;
  }

  private translate(key: string): string {
    // private perform translation
    const translation = key;
    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }

    return translation;
  }

  public instant(key: string) {
    // call translation
    return this.translate(key);
  }
}
