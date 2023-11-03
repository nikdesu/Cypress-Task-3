import { faker } from "@faker-js/faker";
import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";

describe("Invalid sign up", () => {
  it("Sign in", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(faker.internet.email(), faker.internet.password());
    cy.get(signInPage.errorMsg).should("exist");
  });
});
