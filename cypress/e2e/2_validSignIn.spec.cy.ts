import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";

describe("Valid sign up", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();

  it("Sign in", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(homePage.userNameIcon).should("exist");
  });
});
