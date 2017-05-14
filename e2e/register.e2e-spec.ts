
import { RegisterPage } from './page-objects/register.po';
import { LoginPage } from './page-objects/login.po';
import { browser, protractor } from 'protractor';
describe('Register test suite', () => {
  let page: RegisterPage;
  let loginPage: LoginPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new RegisterPage();
    loginPage = new LoginPage();
    page.navigateTo();
  });

  it('should register user successfully', () => {
    page.getFirstNameInput().sendKeys('Jan');
    page.getLastNameInput().sendKeys('Kowalski');
    page.getEmailInput().sendKeys('jan.kowalski@example.com');
    page.getPasswordInput().sendKeys('secret');
    page.getPasswordConfirmInput().sendKeys('secret');
    page.getSubmitButton().click();

    browser.wait(EC.presenceOf(page.getSwalTitle()), 5000);

    expect(page.getSwalTitle().getText()).toEqual('Success');
  });

  it('should fail to register same user twice', () => {
    page.getFirstNameInput().sendKeys('Jan');
    page.getLastNameInput().sendKeys('Nowak');
    page.getEmailInput().sendKeys('jan.nowak@example.com');
    page.getPasswordInput().sendKeys('secret');
    page.getPasswordConfirmInput().sendKeys('secret');
    page.getSubmitButton().click();
    browser.wait(EC.presenceOf(page.getSwalTitle()), 5000);

    expect(page.getSwalTitle().getText()).toEqual('Success');

    page.navigateTo();
    page.getFirstNameInput().sendKeys('Jan');
    page.getLastNameInput().sendKeys('Nowak');
    page.getEmailInput().sendKeys('jan.nowak@example.com');
    page.getPasswordInput().sendKeys('secret');
    page.getPasswordConfirmInput().sendKeys('secret');
    page.getSubmitButton().click();
    browser.wait(EC.presenceOf(page.getSwalTitle()), 5000);

    expect(page.getSwalTitle().getText()).toEqual('Error');
  });

});
