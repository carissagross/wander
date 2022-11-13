import { getByAltText } from "@testing-library/react"

describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://wander-hikes-api.herokuapp.com/api/v1/hikes/', {fixture: 'hikeList'})
    cy.visit('http://localhost:3000/')
  })

  it('on page load, it should see a header with a logo, a view favorites button and view all hikes button', () => {
    cy.get('.header')
    cy.get('.logo').should('have.attr', 'src').should('include', 'static/media/logo.208f56df337527ff007a.png')
      .get('.view-favorites').should('be.visible')
      .get('.view-hikes').should('be.visible')
  })

  // it('should receive an error message if ')
  // it(should) add a hike as a favorite to a favorites page when favorites is clicked
  // the favorite hike should appear on the favorites page

  it('on page load, it should see hike cards with hike details', () => {
    cy.get('.hikes-container')
      .url().should('include', '/')
      .get('.hike-card').should('be.visible')
      .get('.hike-name').get('.hike-image')
      .get('.hike-distance').get('.hike-location')
  })

  it('should click on a hike and view the hike details', () => {
    cy.get('.hike-card').first().click()
      .url().should('include', '/1')
      .get('.details-name')
      .get('.details-description')
      .get('.details-difficulty')
      .get('.details-distance')
      .get('.details-elevation')
      .get('.details-image')
      .get('.favorite-button').should('be.visible')
  })

  it('should click view all hikes button to go back and view all hikes', () => {
    cy.get('.view-hikes').click()
      .url().should('include', '/')
  })

  it('should be able to click the logo to be taken to all hikes page', () => {
    cy.get('.logo').click()
      .url().should('include', '/')
  })

  it('should click view favorites to view favorite hikes', () => {
    cy.get('.view-favorites').click()
      .url().should('include', '/favorites')
  })

  it('should show a message if there are no favorites', () => {
    cy.get('.view-favorites').click()
      .url().should('include', '/favorites')
      .get('.title').contains('FAVORITE HIKES')
      .get('.fav-error').contains('You have no favorites, yet! Add some!')
  })
})