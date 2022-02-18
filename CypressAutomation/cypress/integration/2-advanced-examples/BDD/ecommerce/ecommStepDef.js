
import { Given ,When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";
const homepage=new HomePage();
const productpage=new ProductPage();

// for tag (feature file)  npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//let name = dataTable.rawTable[1][0]
Given('I open Ecommerce page',()=>
{
  
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

When ('I add items to Cart', function(){
    homepage.GetProduct().click()
       
    this.data.productname.forEach(function(element){
        cy.selectproduct(element)
    });
    productpage.GetCheckout().click()
})
And ('Validate the total prices',()=>{
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
})
Then ('select the country submit and verify Thank You',()=>{
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

When ('I fill the form details',function(dataTable)
{
    // [bob ,male]
 //  let name = dataTable.rawTable[1][0]
    homepage.GetName().type(dataTable.rawTable[1][0])
    homepage.GetGender().select(dataTable.rawTable[1][1])
   
})

Then('validate the forms behaviour', function(){
 
    homepage.GetName().should('have.attr','minlength',2)
    homepage.GetRadio().should('be.disabled')
    homepage.GetDatabindling().should('have.value',this.data.name)
}) 

And ('select the Shop Page',()=>{
    homepage.GetSubmit().click()
    homepage.GetSuccess().contains('Success!')
    homepage.GetProduct().click()
})



