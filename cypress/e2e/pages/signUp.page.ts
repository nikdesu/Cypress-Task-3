class SignUpPage {
  readonly usernameInput = '[placeholder="Username"]';
  readonly emailImput = '[placeholder="Email"]';
  readonly passwordInput = '[placeholder="Password"]';
  readonly signUpButton = '[type="submit"]';

  signUp(username: string, email: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.emailImput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.signUpButton).click();
  }
}
export default SignUpPage;
