describe('Error Handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should show an error page if competition data is not returned', () => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/competitions', {
      statusCode: 404,
      ok: false
    });

    cy.get('.page--container')
      .get('.resource-message')
      .should('be.visible')
      .should('contain', 'We could not load data. You could try reloading.');
  });

  it('Should show an error page if climber data is not returned', () => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/climbers', {
      statusCode: 404,
      ok: false
    });

    cy.get('.page--container')
      .get('.resource-message').should('be.visible').should('contain', 'We could not load data. You could try reloading.');
  });

  it('Should show an error page if the user enters an invalid url', () => {
    cy.visit('http://localhost:3000/asdf');
    
    cy.get('.page--container')
      .get('.resource-message').should('be.visible').should('contain', 'We could not load data. You could try reloading.');
  })

  it('Should not take the user to the form page from the error page', () => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/climbers', {
      statusCode: 404,
      ok: false
    });
    
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/competitions', {
      statusCode: 404,
      ok: false
    });

    cy.visit('http://localhost:3000/asdf');

    cy.get('header')
      .get('button').eq(1).click()

    cy.url('should.be', 'http://localhost:3000/asdf');
  })

  it('Should be able to take the user to the landing page from the error page', () => {
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/climbers', {
      statusCode: 404,
      ok: false
    });
    
    cy.intercept('GET', 'https://king-climber-api.replitted.repl.co/competitions', {
      statusCode: 404,
      ok: false
    });

    cy.visit('http://localhost:3000/asdf');

    cy.get('header')
      .get('button').eq(0).click()

    cy.url('should.be', 'http://localhost:3000/');
  })
})