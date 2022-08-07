describe('Homeview page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.punkapi.com/v2/beers", {
        fixture: "mockData",
      })
    cy.visit('http://localhost:3000/')
  })

  it("should display a title, summary, and saves button", () => {
    cy.get('[data-cy="title"]').contains("Brew Match")
      .get('[data-cy="title"]').contains("Choose a beer, find a delicious food match.")
      .get('[data-cy="home-save-button"]')
  })

  it("should display beer cards", () => {
    cy.get('[data-cy="beer-cards"]')
  })

  it("should be able to flip card on click and show description, food pair options, save button and go back button", () => {
    cy.get('[data-cy="beer-card-front"]').eq(0).click()
      .get('[data-cy="beer-card-back"]')
      .get('[data-cy="description"]')
      .get('[data-cy="sounds-good"]')
      .get('[data-cy="food-pair"]')
      .get('[data-cy="save-to-try-later"]')
      .get('[data-cy="go-back"]')
  })
})