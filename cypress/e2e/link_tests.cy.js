/// <reference types="Cypress" />

describe('Tests to confirm links are working correctly', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })
    it('Link to Cypress Docs should go to correct destination', () => {
      cy.get('.home-list').find('a').contains("Querying").click();
      cy.get("h1").contains("Querying");
    })
})