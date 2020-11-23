/// <reference types="Cypress" />

describe('List Comics', () => {

  it ('Listing Comics', function() {
    cy.server();
    cy.route('GET', /comics/, 'fx:comics-list').as('getComics');

    cy.visit('http://localhost:4200/');

    cy.wait('@getComics');

    cy.get('#comics-list-layout', { timeout: 10000 })
      .children().should('have.length', 20);
  });
})
