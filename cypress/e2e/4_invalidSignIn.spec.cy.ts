import { faker } from "@faker-js/faker";
import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";

describe("Invalid sign up", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();

  it("Sign in", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(faker.internet.email(), faker.internet.password());
    cy.get(signInPage.errorMsg).should("exist");
  });
});
