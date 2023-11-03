import { faker } from "@faker-js/faker";
import HomePage from "./pages/home.page";
import SignUpPage from "./pages/signUp.page";

describe("Valid sign up", () => {
  const homePage = new HomePage();
  const signUpPage = new SignUpPage();

  it("Sign up", () => {
    homePage.visit();
    cy.get(homePage.signUpButton).click();
    signUpPage.signUp(faker.internet.userName(), faker.internet.email(), faker.internet.password());
    cy.get(homePage.userNameIcon).should("exist");
  });
});
