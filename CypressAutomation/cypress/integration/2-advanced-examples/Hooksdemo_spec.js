describe("My Testsuite",function()
{

    before(function(){
        cy.log("*****this is setup block");
    });
   beforeEach(function(){
    cy.log("*****tlogin");
});
afterEach(function(){
    cy.log("*****logout");
});
after(function(){
    cy.log("*****this is tear block");
});
    it('searching',function()
    {
        cy.log('***this is searchign test****');
    })

    it('advanced searching',function()
    {
        cy.log('***this is advanced searchign test****');
    })

    it('listing products',function()
    {
        cy.log('***listing products ****');
    })

})