import { browser, element, by } from 'protractor';
import { Page } from './page';

export class ChuckPage implements Page {

  getPageUrl() {
    return '/chuck';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getTitle() {
    return element(by.id('title')).getText();
  }
}
