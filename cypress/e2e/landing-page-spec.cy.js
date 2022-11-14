describe('Landing Page', () => {
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

    cy.visit('http://localhost:3000/')
  });

  it('Should display the header', () => {
    cy.get('Header').should('be.visible').should('contain', 'King Climber');
  });

  it('Should render information about the current king climber', () => {
    cy.get('main')
      .get('.current-king--container')
      .get('h2').should('be.visible').should('contain', 'Bogan Lishop')
      .get('p').first().should('contain', '12/13/2022')
  });

  it('Should render information about past king climbers', () => {
    cy.get('main')
      .get('table')
      .get('tr').first().should('contain', 'Location')
  });

  it('Should navigate to the form page', () => {
    cy.get('header')
      .get('button').eq(1).should('be.visible').click()

    cy.url('should.be', 'http://localhost:3000/form')
  });

})