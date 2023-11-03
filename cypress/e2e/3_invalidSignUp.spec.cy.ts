import { faker } from "@faker-js/faker";
import HomePage from "./pages/home.page";
import SignUpPage from "./pages/signUp.page";
import credentials from "../fixtures/credentials.json";
import endpoints from "../fixtures/endpoints.json";

describe("Invalid sign up", () => {
  const homePage = new HomePage();
  const signUpPage = new SignUpPage();

  it("Sign up", () => {
    homePage.visit();
    cy.get(homePage.signUpButton).click();
    signUpPage.signUp(faker.internet.userName(), credentials.invalid_email, faker.internet.password());
    cy.url().should("include", endpoints.signUp);
  });
});
