/// <reference types= "cypress" />
describe("This test is to validate login scenarios into the quales app", () => {
    it("Verify user with correct credentials can login to the app", () => {
      //cypress visits quales academy url
      cy.visit("https://academy.quales.tech/login");
      cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
      cy.get('[data-testid="Password"]').type("pass1234");
      cy.get('.MuiButton-contained').click();
      cy.get('.Toastify__toast-body > :nth-child(2)').should("be.visible");
      cy.get('.css-1deacqj > .MuiTypography-root').should("be.visible");

    });
});