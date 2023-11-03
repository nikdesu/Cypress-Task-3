import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import UserPage from "./pages/user.page";
import SettingsPage from "./pages/settings.page";

describe("Log out feature", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  const userPage = new UserPage();
  const settingsPage = new SettingsPage();

  it("Log out", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(homePage.userNameIcon).click();
    cy.get(userPage.settingsButton).click();
    cy.get(settingsPage.logOutButton).click();
    cy.get(homePage.signInButton).should("exist");
  });
});
