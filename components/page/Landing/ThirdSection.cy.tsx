import React from 'react'
import ThirdSection from './ThirdSection'

describe('<ThirdSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ThirdSection />)
  })
})