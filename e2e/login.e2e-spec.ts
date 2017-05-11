import { LoginPage } from './page-objects/login.po';
import { browser, protractor } from 'protractor';

describe('Login test suite', () => {
  let page: LoginPage;
  const EC = protractor.ExpectedConditions;
  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it('should authorize chuck', () => {
    page.getEmailInput().clear();
    page.getEmailInput().sendKeys('chuck@example.com');
    page.getPasswordInput().clear();
    page.getPasswordInput().sendKeys('password');
    page.getSubmitButton().click();

    browser.wait(EC.urlContains('home'), 5000);
  });
});
