describe('Form Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/climbers', {
      statusCode: 200,
      ok: true,
      fixture: 'climbers.json'
    });

    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/competitions', {
      statusCode: 200,
      ok: true,
      fixture: 'competitions.json'
    });

    cy.visit('http://localhost:3000/');

    cy.get('main')
      .get('.new-comp--button')
      .click()
  });
  
  it('Should display the header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'King Climber');
  });

  it('Should', () => {
    
  })
})