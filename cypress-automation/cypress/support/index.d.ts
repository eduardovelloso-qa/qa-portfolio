declare namespace Cypress {
  interface Chainable {
    loginByUi(email: string, password: string): Chainable<void>;
  }
}