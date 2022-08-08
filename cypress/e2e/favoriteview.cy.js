describe('Favorite/saved', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.punkapi.com/v2/beers", {
        fixture: "mockData",
      })
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="title"]').contains("Brew Match")
    .get('[data-cy="title"]').contains("Choose a beer, find a delicious food match.")
    .get('[data-cy="home-save-button"]')
  })

  it("should be able to select a food and add to saved", () => {
    cy.get('[data-cy="beer-card-front"]').eq(0).click()
      .get('[data-cy="beer-card-back"]').find('[type="radio"]').eq(0).click( {force: true} )
      .get('[data-cy="save-to-try-later"]').eq(1).click( {force: true} )
      .get('[data-cy="home-save-button"]').click()
  })

  it("should be able to view saved in saved ", () => {
    cy.get('[data-cy="save-to-try-later"]').eq(1).click( {force: true} )
      .get('[data-cy="home-save-button"]').click()
      .get('[data-cy="fav-card"]')
      .get('[data-cy="fav-beer-name"]')
      .get('[data-cy="fav-beer-image"]')
      .get('[data-cy="fav-beer-image"]')
  })

  it("should show You haven't saved anything. If nothing was saved", () => {
    cy.get('[data-cy="home-save-button"]').click()
    .get('[data-cy="havent-saved"]').contains("You haven't saved anything.")
  })
})