/// <reference types= "cypress" />
describe("This test is to verify that CRUD operations can be performed on the quales app", () => {

    let courseId = "";

    it("Verify user can create a course using the POST method", () => {
      const baseUrl = "https://api.quales.tech/";  
      const path = "api/courses/";
      cy.api({
       method: "POST", 
       url: baseUrl + path,   
       body: {
        title: "API Testing Using Cypress",
        categoryId: 2,
        description: "I love Cypress",
        courseUrl: "https://www.youtube.com/watch?v=8vXoMqWgbQQ",
        imageUrl: "https://source.unsplash.com/user/c_v_r/900x800",
        location: "online",
        isPremium: false
       }, 
       // the request is renamed as a createACourseRequest variable
      }).as("createACourseRequest");
      // the variable is now fetched and the converted to a response
      cy.get("@createACourseRequest").then((res) => {
        // the response is now assigned to a new variable
        const responseBody = res.body;
        // Assertions or Tests
        expect(res.status).to.eq(200);
        expect(responseBody).to.have.property("title");
        expect(responseBody).to.have.property("description");
      }); 
    });





    it("Verify user can search a course using the GET method", () => {
        const baseUrl = "https://api.quales.tech/";  
        const path = "api/courses/";
        cy.api({
         method: "GET", 
         url: baseUrl + path + courseId,   

         // the request is renamed as a readACourseRequest variable
        }).as("searchACourseRequest");
        // the variable is now fetched and the converted to a response
        cy.get("@searchACourseRequest").then((res) => {
          // the response is now assigned to a new variable
          const responseBody = res.body;
          // Assertions or Tests
          expect(res.status).to.eq(200);
        });  
    });





    it("Verify user can list all courses using the GET method", () => {
        const baseUrl = "https://api.quales.tech/";  
        const path = "api/courses/";
        cy.api({
         method: "GET", 
         url: baseUrl + path,   

         // the request is renamed as a readACourseRequest variable
        }).as("listAllCoursesRequest");
        // the variable is now fetched and the converted to a response
        cy.get("@listAllCoursesRequest").then((res) => {
          // the response is now assigned to a new variable
          const responseBody = res.body;
          // Assertions or Tests
          expect(res.status).to.eq(200);
        }); 
    });
    
});