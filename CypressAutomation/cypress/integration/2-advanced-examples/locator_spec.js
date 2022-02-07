/// <reference types="cypress"/>


describe("My first test",function()
{
    it('Locating Elements',function()
    {
          cy.visit('https://demo.nopcommerce.com/');
          cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch");
          cy.wait(5000);
         cy.get("[type='submit']").click();
         cy.get('.product-box-add-to-cart-button').click();
         cy.get("#product_enteredQuantity_4").clear().type(2);
        cy.get("#add-to-cart-button-4").click();
        cy.wait(5000);
        cy.get("#topcartlink > a > span.cart-label").click();
        cy.wait(5000);
        cy.get(".product-unit-price").contains('$1,800.00');
    })
});