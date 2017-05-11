import { browser, element, by } from 'protractor';

export class LoginPage {

  getPageUrl() {
    return '/login';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getEmailInput() {
    return element(by.name('username'));
  }

  getPasswordInput() {
    return element(by.name('password'));
  }

  getSubmitButton() {
    return element(by.id('submit'));
  }
}
