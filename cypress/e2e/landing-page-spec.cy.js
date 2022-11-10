describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should display the header', () => {
    cy.get('header').should('contain', 'King Climber');
  });

  it('Should display information about the current king climber', () => {
    cy.get('main')
      .get('.current-king--container')
      .get('h2').should('contain', 'Sed Tummer')
  });

  it('Should', () => {
    
  });

})