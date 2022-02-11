/// <reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";


describe("My first framework test",function()
{

    before(function(){
        cy.fixture('test').then(function(data){
            this.data=data;
        })
    })
    it('form filling',function()
    {
        const homepage= new HomePage();
        const productpage = new ProductPage();
        cy.fixture('test.json').as('data')
        homepage.GetUrl()
        homepage.GetName().type(this.data.name)
        homepage.GetGender().select(this.data.gender)
        homepage.GetName().should('have.attr','minlength',2)
        homepage.GetRadio().should('be.disabled')
        homepage.GetDatabindling().should('have.value',this.data.name)
        homepage.GetSubmit().click()
       
        homepage.GetSuccess().contains('Success!')
        homepage.GetProduct().click()
       
        this.data.productname.forEach(function(element){
            cy.selectproduct(element)
        }) 
      
        productpage.GetCheckout().click()
        var sum =0
        productpage.GetAmmount().each(($el,index,list) =>{
           const amount = $el.text()
           var res= amount.split(" ")
            const result=res[1].trim()
            sum= Number(sum)+Number(result)
            

        }).then(function(){

            cy.log(sum)
        })
       productpage.GetTotal().then(function(element){
        const amount = element.text()
        var res= amount.split(" ")
         const result=res[1].trim()
         expect(Number(sum)).to.equal(Number(result))
       })
        productpage.ShopCheckout().click()
        productpage.GetAddress().type("India")
        productpage.GetchooseAddress().should('be.visible').click()
        productpage.GetCheckBox().click({force: true})
        productpage.GetProduct().click()
        productpage.GetText().then(function(element){
               const actualtext = element.text()
               expect(actualtext.includes("Success!")).to.be.true
        })



    })
})   

