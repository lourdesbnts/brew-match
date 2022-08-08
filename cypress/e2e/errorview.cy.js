describe("Error View", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.punkapi.com/v2/beers", {
        fixture: "mockData",
      })
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="title"]').contains("Brew Match")
    .get('[data-cy="title"]').contains("Choose a beer, find a delicious food match.")
})

it("Should display error for a broken URL", () => {
  cy.visit("http://localhost:3000/1")
    .get('[data-cy="error"]')
    .contains("Oops sorry, something went wrong!")
  })
})












