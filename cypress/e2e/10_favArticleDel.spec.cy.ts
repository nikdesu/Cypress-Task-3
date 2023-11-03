import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import userPage from "./pages/user.page";

describe("Removing article from favourited articles", () => {
  it("Unfavour article", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(homePage.generalFeedButton).click();
    cy.get(homePage.favourButton).click();
    cy.get(homePage.userNameIcon).click();
    cy.get(userPage.favArticleButton).click();
    cy.get(userPage.favourButton).click();
    cy.reload();
    cy.get(userPage.favourButton).should("not.exist");
  });
});
