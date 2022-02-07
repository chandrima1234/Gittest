/// <reference types="cypress"/>


describe("My second test",function()
{
    it('Handling ui  Elements',function()
    {
          cy.visit('https://www.tripodeal.com/portal/login.php');
          cy.url().should('include','tripodeal');
        cy.get("[name=email]").should('be.visible').should('be.enabled').type("cchatterjee19@gmail.com");
        cy.get("[name=password]").should('be.visible').should('be.enabled').type("123456");
        cy.get("button[type=submit]").click();
        cy.viewport(2000, 1000); 
        cy.title().should('eq',"Dashboard - TripOdeal.com");
        cy.get(".navbar-nav .nav-item:nth-child(2) .nav-link").click();
        cy.get("#returnDateRequiredNo").should('be.checked');
        cy.get("#returnDateRequiredYes").should('not.be.checked').click();
        cy.get("[name=destination]").type("New Delhi (DEL)");
        cy.get("[name=destination]").type('{enter}');
        cy.get("button[name=search]").click();
        cy.title().should('eq',"Flights, Cheap Flights, Discounted Flight Deals - TripOdeal.com");

    })
});