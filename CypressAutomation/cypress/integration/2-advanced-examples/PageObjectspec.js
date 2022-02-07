
/// <reference types ="Cypress"/>

import loginPage from '../pageObjects/loginPage'
describe("Test suite",function()
{
    it('Valid login test',function(){
     
         const lp = new loginPage()
         lp.visit();
         lp.fillEmail("admin@yourstore.com")
         lp.fillPassword('admin')
         lp.submit()
         cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })
})