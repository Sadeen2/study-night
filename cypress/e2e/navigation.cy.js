describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to Card Sets page", () => {
    cy.get("#cardSetPage").click();
    cy.get("h2").should("contain", "Study Set Library");
  });

  it("should navigate to About page", () => {
    cy.get("#aboutPage").click();
    cy.get("h2").should("contain", "About Study Night"); 
  });

  it("should navigate to Home page", () => {
    cy.get("#homePage").click();
    cy.get("h2").should("contain", "A Digital Study Solution for the Modern World");
  });
});
