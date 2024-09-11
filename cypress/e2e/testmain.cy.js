

describe('OrderForm Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/orderform');
  });



  it('allows user to select size and crust option', () => {
    cy.get('input[type="radio"][value="Küçük"]').click();
    cy.get('select').select('İnce kenar');
    cy.get('input[type="radio"][value="Küçük"]').should('be.checked');
    cy.get('select').should('have.value', 'İnce kenar');
  });

  it('allows user to select toppings', () => {
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').first().should('be.checked');
  });



  it('disables order button if form is invalid', () => {
    cy.get('[data-testid="order-form-button"]').should('be.disabled');
    cy.get('input[type="text"]').type('John Doe');
    cy.get('select').select('İnce kenar');
    cy.get('input[type="checkbox"]').first().check();
    cy.get('[data-testid="order-form-button"]').should('be.disabled');
  });

});
