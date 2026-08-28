describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('deve logar com credenciais válidas', () => {
    cy.fixture('users').then((users) => {
      cy.loginByUi(users.valid.email, users.valid.password);
      cy.get('a').contains('Logged in as').should('be.visible');
    });
  });

  it('deve mostrar erro com credenciais inválidas', () => {
    cy.fixture('users').then((users) => {
      cy.loginByUi(users.invalid.email, users.invalid.password);
      cy.get('p').contains('Your email or password is incorrect!').should('be.visible');
    });
  });
});