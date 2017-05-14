import { browser, element, by, protractor } from 'protractor';
import { Page } from './page';

export class LoginPage implements Page {
  private EC = protractor.ExpectedConditions;

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

  signInUser() {
    this.navigateTo();
    this.getEmailInput().sendKeys('chuck@example.com');
    this.getPasswordInput().sendKeys('password');
    return this.getSubmitButton().click();
    // browser.wait(this.EC.urlContains('/home'), 5000);
  }
}
