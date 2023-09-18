/// <reference types= "cypress" />
describe("This test is to ensure validate user coverage on the swag store app", () => {
  
  it("Verify that user with valid username and invalid password cannot login to the app", () => {
    //cy.visit("https://www.saucedemo.com/");
   cy.visit(Cypress.env('url'));
   cy.get('[data-test="username"]').type("problem_user");
   cy.get('[data-test="password"]').type("sauce");
   cy.get('[data-test="login-button"]').click();
   cy.get('[data-test="error"]').should("be.visible");

  });
  
  
  it("Verify that user with invalid username and valid password cannot login to the app", () => {
    cy.visit(Cypress.env('url'));
    cy.get('[data-test="username"]').type("unknown");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
 
  });

  it("Verify that user with invalid username and invalid password cannot login to the app", () => {
    cy.visit(Cypress.env('url'));
    cy.get('[data-test="username"]').type("unknown");
    cy.get('[data-test="password"]').type("secret");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
 
  });

  
  it("Verify user with correct credentials can login to the app", () => {
      //cy.visit("https://www.saucedemo.com/");
    cy.visit(Cypress.env('url'));
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('.app_logo').should("be.visible");
    cy.get('#item_4_img_link > .inventory_item_img').should("be.visible");
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should("be.visible");
  
      
  });


  it("Verify that valid user can add items on the menu to cart", () => {
      //cypress selects items to add to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    
  });

});