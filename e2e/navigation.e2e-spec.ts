import { LoginPage } from './page-objects/login.po';
import { browser, protractor } from 'protractor';
import { UsersPage } from './page-objects/users.po';
import { ChuckPage } from './page-objects/chuck.po';
import { HomePage } from './page-objects/home.po';
import { UserCreatePage } from './page-objects/user-create.po';
import { NavPage } from './page-objects/nav.po';
import { UsersEditPage } from './page-objects/user-edit.po';
import { RegisterPage } from './page-objects/register.po';

describe('Navigation test suite', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let chuckPage: ChuckPage;
  let usersPage: UsersPage;
  let userCreatePage: UserCreatePage;
  let nav: NavPage;
  let usersEditPage: UsersEditPage;
  let registerPage: RegisterPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    loginPage = new LoginPage();
    registerPage = new RegisterPage();
    homePage = new HomePage();
    chuckPage = new ChuckPage();
    usersPage = new UsersPage();
    userCreatePage = new UserCreatePage();
    usersEditPage = new UsersEditPage();
    nav = new NavPage();
    loginPage.navigateTo();
  });

  it('can navigate to Sign Up page', () => {
    nav.getSignUpButton().click();
    browser.wait(EC.urlContains(registerPage.getPageUrl()), 5000);

    nav.getSignInButton().click();
    browser.wait(EC.urlContains(loginPage.getPageUrl()), 5000);
  });

  it('can navigate to chuck page', () => {
    loginPage.signInUser();
    nav.getMenuButton().click();
    nav.getChuckButton().click();
    browser.wait(EC.urlContains(chuckPage.getPageUrl()), 5000);
    expect(chuckPage.getTitle()).toContain('101 Chuck Norris facts');
  });

  it('can navigate to users page', () => {
    loginPage.signInUser();
    nav.getMenuButton().click();
    nav.getUsersButton().click();
    browser.wait(EC.urlContains(usersPage.getPageUrl()), 5000);
  });

  it('can navigate to create user page', () => {
    loginPage.signInUser();
    nav.getMenuButton().click();
    nav.getUsersButton().click();
    usersPage.getCreateButton().click();
    browser.wait(EC.urlContains(userCreatePage.getPageUrl()), 5000);
    userCreatePage.getCancelButton().click();
    browser.wait(EC.urlContains(usersPage.getPageUrl()), 5000);
  });

  it('can navigate to edit user page', () => {
    loginPage.signInUser();
    nav.getMenuButton().click();
    nav.getUsersButton().click();
    usersPage.getEditButtons().first().click().then(() => {
      usersEditPage.getCancelButton().click();
    });
    browser.wait(EC.urlContains(usersPage.getPageUrl()), 5000);
  });

  it('should redirect to login page after logout', () => {
    loginPage.signInUser();
    nav.getLogoutButton().click();
    browser.wait(EC.urlContains(loginPage.getPageUrl()), 5000);
  });
});
