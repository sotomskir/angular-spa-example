import { browser, element, by } from 'protractor';

export class RegisterPage {

  getPageUrl() {
    return '/signup';
  }

  navigateTo() {
    return browser.get(this.getPageUrl());
  }

  getFirstNameInput() {
    return element(by.id('firstName'));
  }

  getLastNameInput() {
    return element(by.id('lastName'));
  }

  getEmailInput() {
    return element(by.id('email'));
  }

  getPasswordInput() {
    return element(by.id('password'));
  }

  getPasswordConfirmInput() {
    return element(by.id('passwordConfirm'));
  }

  getSubmitButton() {
    return element(by.id('submit'));
  }

  getSwalTitle() {
    return element(by.className('swal2-title'));
  }

  getGoToLoginButton() {
    return element(by.className('swal2-confirm'));
  }
}
