/// <reference types="Cypress" />

describe('Detail Comic', () => {

  it ('Detailing Comic', function() {
    cy.server();
    cy.route('GET', /comics/, 'fx:comic-detail').as('getComic');

    cy.visit('http://localhost:4200/comics/77241');

    cy.wait('@getComic');

    cy.get('#comic-detail', { timeout: 10000 })
      .children().should('have.length', 2);
  });
})
