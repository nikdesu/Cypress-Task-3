class UserPage {
  readonly settingsButton = '[class="btn btn-sm btn-outline-secondary action-btn"]';
  readonly newArticleButton = '[ui-sref="app.editor"]';
  readonly favArticleButton = ".articles-toggle > .nav > :nth-child(2) > .nav-link";
  readonly favourButton = '[class="btn btn-sm btn-primary"]';
}

export default new UserPage();
