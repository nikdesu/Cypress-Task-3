import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import UserPage from "./pages/user.page";
import endpoints from "../fixtures/endpoints.json";

describe("Adding article to favourited articles", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  const userPage = new UserPage();

  it("Favour article", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(homePage.generalFeedButton).click();
    cy.get(homePage.favourButton).click();
    cy.get(homePage.userNameIcon).click();
    cy.get(userPage.favArticleButton).click();
    cy.url().should("include", endpoints.favourites);
    cy.get(userPage.favourButton).click();
  });
});
