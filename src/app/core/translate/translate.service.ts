import {Injectable, Inject} from '@angular/core';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_PL_NAME, LANG_PL_TRANS } from './lang-pl';

@Injectable()
export class TranslateService {
  private _currentLang = 'pl';

  private translations = {
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

  public translate(key: string): string {
    // private perform translation
    const translation = key;
    if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
      return this.translations[this.currentLang][key];
    }

    return translation;
  }

}
