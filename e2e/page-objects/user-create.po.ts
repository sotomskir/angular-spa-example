import { browser, element, by } from 'protractor';
import { Page } from './page';

export class UserCreatePage implements Page {

  getPageUrl() {
    return '/users/create';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getCancelButton() {
    return element(by.id('cancel'));
  }
}
