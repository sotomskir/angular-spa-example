import { browser } from 'protractor';
import { Page } from './page';

export class HomePage implements Page {

  getPageUrl() {
    return '/home';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

}
