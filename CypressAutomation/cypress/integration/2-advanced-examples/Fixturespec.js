
/// <reference types="cypress"/>
describe("My new test",function()
{
    before(function(){
        cy.fixture('example').then(function(data)
       {
            this.data=data;
       })
    })
    it('fixture data test',function(){
        cy.visit("https://admin-demo.nopcommerce.com/");
       cy.get("[name=Email]").type(this.data.email);
       cy.get("[name=Password]").type(this.data.password);
       cy.get("button[type=submit]").click();
    })

})