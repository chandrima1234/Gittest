describe("My new test",function()
{
    it('Handling alert',function(){
   /*   cy.visit("http://demo.automationtesting.in/Alerts.html");
      cy.get(".btn-danger").click();
      cy.on('window:alert',(str) =>
      
      {

        expect(str).equal('I am an alert box!');
      }
      )
      */
      cy.visit("http://testautomationpractice.blogspot.com/");
       cy.get("  #HTML9 > div.widget-content > button").click();
       cy.on('window.confirm',(str)=>{
        expect(str).equal('Press a button!');
       })
    });
});