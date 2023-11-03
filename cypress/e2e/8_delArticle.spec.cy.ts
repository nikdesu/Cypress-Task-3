import { faker } from "@faker-js/faker";
import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import userPage from "./pages/user.page";
import editorPage from "./pages/editor.page";
import articlePage from "./pages/article.page";

describe("Deleting created article", () => {
  it("Delete article", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(userPage.newArticleButton).click();
    editorPage.writeArticle(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
    cy.get(editorPage.publishButton).click();
    cy.get(articlePage.delButton).eq(1).click();
    cy.url().should("include", "https://demo.realworld.io/#/");
  });
});
