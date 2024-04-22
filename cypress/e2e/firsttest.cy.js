describe('template spec', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="cypress-title"]').should("exist").should('have.text','To-Do List');



  });
});