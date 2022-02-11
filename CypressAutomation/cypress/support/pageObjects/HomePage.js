/// <reference types ="Cypress"/>
class HomePage

{
    GetUrl(){
        //base url and concate the sub domain
        return cy.visit(Cypress.env('url')+"/angularpractice/")
    }

    GetName(){
        return cy.get("input[name='name']:nth-child(2)")
    }

    GetGender(){
        return cy.get('select')
    }
    GetRadio(){
        return  cy.get('#inlineRadio3')
    }
    GetDatabindling(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    GetSubmit(){
        return cy.get("input[type='submit']")
    }
    GetSuccess(){
        return cy.get('strong')
    }
    GetProduct(){
       return cy.get(':nth-child(2) > .nav-link')
    }


}
export default HomePage