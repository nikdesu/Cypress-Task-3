class EditorPage {
  readonly articleTitle = '[ng-model="$ctrl.article.title"]';
  readonly articleAbout = '[ng-model="$ctrl.article.description"]';
  readonly articleBody = '[ng-model="$ctrl.article.body"]';
  readonly publishButton = '[type="button"]';

  writeArticle(title: string, about: string, body: string) {
    cy.get(this.articleTitle).type(title);
    cy.get(this.articleAbout).type(about);
    cy.get(this.articleBody).type(body);
  }
}

export default EditorPage;
