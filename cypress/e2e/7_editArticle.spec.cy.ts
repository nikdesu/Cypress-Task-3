import { faker } from "@faker-js/faker";
import homePage from "./pages/home.page";
import signInPage from "./pages/signIn.page";
import credentials from "../fixtures/credentials.json";
import userPage from "./pages/user.page";
import editorPage from "./pages/editor.page";
import articlePage from "./pages/article.page";

describe("Editing created article", () => {
  const randObj = {
    title: faker.lorem.word(),
    about: faker.lorem.word(),
    body: faker.lorem.word()
  }

  it("Edit article", () => {
    homePage.visit();
    cy.get(homePage.signInButton).click();
    signInPage.signIn(credentials.email, credentials.password);
    cy.get(userPage.newArticleButton).click();
    editorPage.writeArticle(faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence());
    cy.get(editorPage.publishButton).click();
    cy.get(articlePage.editButton).eq(1).click();
    editorPage.writeArticle(randObj.title, randObj.about, randObj.body);
    cy.get(editorPage.publishButton).click();
    cy.get(articlePage.articleBody).should("contain", randObj.body);
    cy.get(articlePage.articleTitle).should("contain", randObj.title);
    cy.get(articlePage.delButton).eq(1).click();
  });
});
