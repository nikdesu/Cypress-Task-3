import { faker } from "@faker-js/faker";
import homePage from "./pages/home.page";
import signUpPage from "./pages/signUp.page";
import credentials from "../fixtures/credentials.json";
import endpoints from "../fixtures/endpoints.json";

describe("Invalid sign up", () => {
  it("Sign up", () => {
    homePage.visit();
    cy.get(homePage.signUpButton).click();
    signUpPage.signUp(faker.internet.userName(), credentials.invalid_email, faker.internet.password());
    cy.url().should("include", endpoints.signUp);
  });
});
