import { faker } from "@faker-js/faker";
import homePage from "./pages/home.page";
import signUpPage from "./pages/signUp.page";

describe("Valid sign up", () => {

  it("Sign up", () => {
    homePage.visit();
    cy.get(homePage.signUpButton).click();
    signUpPage.signUp(faker.internet.userName(), faker.internet.email(), faker.internet.password());
    cy.get(homePage.userNameIcon).should("exist");
  });
});
