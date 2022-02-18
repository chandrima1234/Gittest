Feature: End to end Ecommerce validation

   @Regression
   Scenario: Ecommerce products delivery
   Given I open Ecommerce page
   When I add items to Cart
   And Validate the total prices
   Then select the country submit and verify Thank You 

   @Smoke 
   Scenario: filling the form to shop
   Given I open Ecommerce page
   When I fill the form details
       |name | gender |
       |bob  | Male  |
   Then validate the forms behaviour
   And select the Shop Page
 