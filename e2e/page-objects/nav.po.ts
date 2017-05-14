import { by, element } from 'protractor';

export class NavPage {

  getMenuButton() {
    return element(by.id('menu'));
  }

  getChuckButton() {
    return element(by.id('chuck'));
  }

  getUsersButton() {
    return element(by.id('users'));
  }

  getLogoutButton() {
    return element(by.id('logout'));
  }

  getSignInButton() {
    return element(by.id('signin'));
  }

  getSignUpButton() {
    return element(by.id('signup'));
  }
}
