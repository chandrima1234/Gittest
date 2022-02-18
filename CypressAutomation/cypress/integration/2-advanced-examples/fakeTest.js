describe('My first Test Suite',function(){

it('My firstTest case', function(){
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    
    cy.intercept({
        method: 'GET',
        url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

    }, // request paramter
    {
          statusCode :200,
          body: [
          {
              "book_name" : "RestAssured with Java",
              "isbn" : "RSU",
              "aisle": "2301"
          }
        ]
    }).as('bookretrievals') //response parameter
    cy.get("button[class='btn.btn-primary']").click()
    cy.wait('@bookretrievals')

    
      
})

})