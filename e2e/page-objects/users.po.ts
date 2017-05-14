import { browser, element, by } from 'protractor';
import { Page } from './page';

export class UsersPage implements Page {

  getPageUrl() {
    return '/users';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getCreateButton() {
    return element(by.id('create-user'));
  }

  getEditButtons() {
    return element.all(by.css('.users a'));
  }
}
