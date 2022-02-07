/// <reference types="cypress"/>

/// <reference types="cypress"/>
describe("My third test",function()
{
    it('Handling ui  Elements with check box, radio buttons and dropdown',function(){

        cy.visit("http://demo.automationtesting.in/Register.html");
        cy.wait(5000);
       cy.get("[value=FeMale]").should('not.be.checked').click();
        cy.get("[id=checkbox1]").check().should('be.checked').should('have.value', 'Cricket');
        cy.get("[id=checkbox2]").check().should('be.checked').should('have.value','Movies');
        cy.get("[id=checkbox3]").check().should('be.checked').should('have.value','Hockey');
        cy.get("[id=checkbox1]").uncheck().should('not.be.checked').should('have.value','Cricket');
        cy.get("[id=msdd]").click();
        cy.get(".ui-corner-all").contains('English').click();
        cy.get(".ui-corner-all").contains('French').click();
    

});
   it('Handling ui  Elements with check box, radio buttons and dropdown',function(){
       cy.get("[role=combobox]").click({force:true});
       cy.get("[type=search]").type("ind").type('{enter}');
});

});