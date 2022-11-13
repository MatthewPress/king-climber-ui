describe('Error Handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/climbers', {
      statusCode: 404,
      ok: false
    });

    cy.visit('http://localhost:3000/');
  });

  it('Should', () => {
    cy.get('.page--container')
  });
})