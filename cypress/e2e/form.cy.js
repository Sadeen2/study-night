
describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
    cy.get("#cardSetPage", { timeout: 10000 }).should("be.visible").click();
    cy.get('[data-cy="toggle_form"]').should("be.visible").click();
  });

  it("should submit the Create Set form with valid input", () => {
    cy.get('[data-cy="input-set-name"]').type("Biology Set");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    cy.get('[data-cy="submit-set"]').click();

    cy.get("@alert").should("have.been.calledWith", "Set created");
  });

  it("should show error when submitting empty form", () => {
    cy.window().then((win) => {
      cy.stub(win, "alert").as("alert");
    });

    cy.get('[data-cy="submit-set"]').click();

    cy.get("@alert").should("have.been.calledWith", "TITLE CANNOT BE EMPTY");
  });
});
