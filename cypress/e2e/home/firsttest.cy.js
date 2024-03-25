/// <reference types="cypress" />

context('Navigation', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:5173')
        cy.get('.navbar-nav').contains('Commands').click()
        cy.get('.dropdown-menu').contains('Navigation').click()
      })
      it('cy.go() - go back or forward in the browser\'s history', () => {
        
      }
    }
)
  