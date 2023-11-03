import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";

describe("Valid sign up", () => {

  it("Sign in", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(homePage.userNameIcon).should("exist");
  });
});
