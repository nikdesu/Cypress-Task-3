class SignInPage {
  readonly emailInput = '[placeholder="Email"]';
  readonly passwordInput = '[placeholder="Password"]';
  readonly signInButton = '[type="submit"]';
  readonly errorMsg = '[class="error-messages"]';

  signIn(email: string, password: string) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.signInButton).click();
  }
}
export default SignInPage;
