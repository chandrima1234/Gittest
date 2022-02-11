/// <reference types ="Cypress"/>
class loginPage

{

visit(){
    cy.visit("https://demo.nopcommerce.com/login");
}
fillEmail(value){
    const field = cy.get('[id=Email]')
   field.clear();
   field.type(value);
   return this
}
fillPassword(value){
    const field = cy.get('[id=Password]')
    field.clear();
    field.type(value);
    return this
 }

 submit(){
     const button =cy.get('.login-button')
     button.click()
 }
}
export default loginPage



