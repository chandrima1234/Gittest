/// <reference types ="Cypress"/>

class ProductPage
{
  GetCheckout(){
      return cy.get(".nav-link.btn")
  }
  ShopCheckout(){
      return cy.get(".btn-success")
  }
  GetAddress(){
      return cy.get(".filter-input")
  }
  GetchooseAddress(){
      return cy.get(".suggestions > ul > li > a")
  }
  GetCheckBox(){
      return cy.get("#checkbox2")
  }
  GetProduct(){
      return cy.get("input[value='Purchase']")
  }
   GetText(){
       return cy.get('.alert')
   }
 GetAmmount(){
     return cy.get("tr td:nth-child(4) strong")
 }
 GetTotal(){
     return cy.get("h3 strong")
 }
  
}
export default ProductPage