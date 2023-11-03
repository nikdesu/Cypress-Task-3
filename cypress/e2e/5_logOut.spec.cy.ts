import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import userPage from "./pages/user.page";
import settingsPage from "./pages/settings.page";

describe("Log out feature", () => {
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
