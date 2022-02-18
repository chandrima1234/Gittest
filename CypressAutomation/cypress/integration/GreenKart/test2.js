/// <reference types="cypress"/>
describe("My first test",function()
{
    it('Locating Elements',function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get("[value='Confirm']").click()
       cy.get("#alertbtn").click()
       // window :alert
       cy.on('window:alert',(str)=>{
           expect(str).equal('Hello , share this practice page and share your knowledge')
       })
       cy.on('window:confirm',(str)=>{
           expect(str).equal('Hello , Are you sure you want to confirm?')
       })
       cy.get('#opentab').invoke('removeAttr','target').click()
      cy.wait(2000)
       cy.url().should('include','rahulshettyacademy')
       cy.go('back')
       cy.get('tr td:nth-child(2)').each(($e1,index,$list) => {
           const text= $e1.text();
           if(text.includes('Python')){
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(pricetext){
                const price=   pricetext.text()
                expect(price).to.equal('25')
              })
           }


       })
       //cy.get('.mouse-hover-content').invoke('show');
       cy.contains('Top').click({force:true});
       cy.url().should('include','top')
       cy.get("#opentab").then(function(e){
           const url= e.prop('href')
           cy.visit(url)
       })
    })

})