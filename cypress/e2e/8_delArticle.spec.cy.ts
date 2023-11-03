import { faker } from "@faker-js/faker";
import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import UserPage from "./pages/user.page";
import EditorPage from "./pages/editor.page";
import ArticlePage from "./pages/article.page";

describe("Deleting created article", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  const userPage = new UserPage();
  const editorPage = new EditorPage();
  const articlePage = new ArticlePage();

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
