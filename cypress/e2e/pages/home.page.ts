class HomePage {
  readonly signUpButton = '[ui-sref="app.register"]';
  readonly signInButton = '[ui-sref="app.login"]';
  readonly userNameIcon = '[class="user-pic"]';
  readonly generalFeedButton = '.feed-toggle > .nav > :nth-child(2) > .nav-link'
  readonly favourButton = ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'  

  visit() {
    cy.visit("https://demo.realworld.io/#/");
  }
}

export default HomePage;
