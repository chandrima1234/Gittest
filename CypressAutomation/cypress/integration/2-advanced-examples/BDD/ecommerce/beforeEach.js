import { beforeEach } from "mocha";

beforeEach(()=>{
    cy.fixture('test').then(function(data){
        this.data=data;
    })
})