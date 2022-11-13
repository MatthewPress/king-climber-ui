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

    cy.get('header')
      .get('button').eq(1)
      .click()
  });
  
  it('Should display the header', () => {
    cy.get('Header')
      .should('be.visible')
      .should('contain', 'King Climber');
  });

    // it('Should', () => {
    
  // })
  
  it('Should navigate to the landing page', () => {
    cy.get('header')
      .get('button').eq(0)
      .should('be.visible')
      .click()

    cy.url('should.be', 'http://localhost:3000/')
  });
})