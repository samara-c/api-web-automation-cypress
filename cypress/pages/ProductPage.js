class ProductPage {
  nameInput() {
    return cy.get('[data-testid="nome"]')
  }

  priceInput() {
    return cy.get('[data-testid="preco"]')
  }

  descriptionInput() {
    return cy.get('[data-testid="descricao"]')
  }

  quantityInput() {
    return cy.get('[data-testid="quantity"]')
  }

  registerButton() {
    return cy.get('[data-testid="cadastarProdutos"]')
  }

  typeName(name) {
    this.nameInput().type(name)
  }

  typePrice(price) {
    this.priceInput().type(price)
  }

  typeDescription(description) {
    this.descriptionInput().type(description)
  }

  typeQuantity(quantity) {
    this.quantityInput().type(quantity)
  }

  submit() {
    this.registerButton().click()
  }
}

export default new ProductPage()