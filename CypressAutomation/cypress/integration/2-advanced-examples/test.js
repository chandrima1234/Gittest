describe("My first test",function()
{
    it('Locating Elements',function()
    {
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type('ca')
       cy.wait(2000);
       cy.get('.products').as('productlocator')
      cy.get('.product:visible').should('have.length',4).then(function(){
          console.log("hello")
      })
      cy.get('@productlocator').find('.product').each(($e1, index , $list) => {
      
         const textveg= $e1.find('.product-name').text()
         if(textveg.includes('Cashews')){
             $e1.find('button').click();
         }

      })
      cy.get('.brand').should('have.text','GREENKART')
      cy.get('.brand').then(function(logoElement){ // text is not the cypress command 
          cy.log(logoElement.text())
      })
      cy.get('.cart-icon > img').click();
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.contains('Place Order').click();
     

    })
})
