class AdminHomePage {
  registerProductButton() {
    return cy.get('[data-testid="cadastrarProdutos"]')
  }

  clickRegisterProduct() {
    this.registerProductButton().click()
  }
}

export default new AdminHomePage()