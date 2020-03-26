context("Test our inputs and submit our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Add text to inputs and submit form", () => {
    cy.get('input[name="name"]')
      .type("Gracee")
      .should("have.value", "Gracee");
    cy.get("input[name='email']")
      .type("gracee@gmail.com")
      .should("have.value", "gracee@gmail.com");
    cy.get("textarea[name='motivation']")
      .type("I love to help!")
      .should("have.value", "I love to help!");
    cy.get("#positions")
      .select("Yard Work")
      .should("have.value", "Yard Work");
    cy.get('[type="checkbox')
      .check()
      .should("be.checked");
    cy.get("button").click();
  });
});
