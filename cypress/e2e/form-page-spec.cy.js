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

  it('Should render a form for adding new competitions', () => {
    cy.get('form')
      .should('be.visible')
  })
  
  it('Should allow the user to add a new competition', () => {
    cy.get('form')
      .get('#climber_id').click({force: true}).get('option[value=1]').click()
      .get('#date').click()
      .get('#location').select('Movement RiNo')
      .get('#climb_type').select(1)
      .get('#climb_grade').select(1)
      .get('#climb_description').select(1)
      .get('.add-comp--button').click()
  })
  
  it('Should not allow a user to add a competition if all of the fields are not filled out', () => {
    cy.get('form')
      .get('.add-comp--button')
      .click()
      .get('.post-status--content')
      .should('be.visible')
      .should('contain', 'All fields must be filled out')
  })

  it('Should show an error if post is unsuccessful', () => {
    cy.intercept('POST', 'https://king-climber-api.replitted.repl.co/competitions', {
      statusCode: 401,
      ok: false,
      body: {
        message: 'Sorry an error has occurred. Please try again.'
      }
    });

    cy.get('form')
      .get('.add-comp--button')
      .click()
      .get('.post-status--content')
      .should('be.visible')
      .should('contain', 'Unable to add competition')
  })

  it('Should navigate to the landing page', () => {
    cy.get('header')
      .get('button').eq(0)
      .should('be.visible')
      .click()

    cy.url('should.be', 'http://localhost:3000/')
  });
})