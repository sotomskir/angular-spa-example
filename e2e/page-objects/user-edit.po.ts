import { browser, element, by } from 'protractor';
import { Page } from './page';

export class UsersEditPage implements Page {

  getPageUrl() {
    return '/users/1/edit';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getCancelButton() {
    return element(by.id('cancel'));
  }
}
