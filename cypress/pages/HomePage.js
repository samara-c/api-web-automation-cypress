class HomePage {
  storeTitle() {
    return cy.contains('Serverest Store')
  }
}

export default new HomePage()