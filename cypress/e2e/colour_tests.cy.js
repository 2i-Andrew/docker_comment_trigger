/// <reference types="Cypress" />

describe('Tests to confirm the page colours are correct', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })
    it('Banner should be correct colour', () => {
      cy.get(".banner").should("have.css", "background-color").and('eq', 'rgb(0, 191, 136)')
    })
})