import { faker } from "@faker-js/faker";
import HomePage from "./pages/home.page";
import SignInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import UserPage from "./pages/user.page";
import EditorPage from "./pages/editor.page";
import endpoints from "../fixtures/endpoints.json";
import ArticlePage from "./pages/article.page";

describe("Writing articles", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  const userPage = new UserPage();
  const editorPage = new EditorPage();
  const articlePage = new ArticlePage();

  it("Write article", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(userPage.newArticleButton).click();
    editorPage.writeArticle(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
    cy.get(editorPage.publishButton).click();
    cy.url().should("include", endpoints.user_article);
    cy.get(articlePage.delButton).eq(1).click();
  });
});
