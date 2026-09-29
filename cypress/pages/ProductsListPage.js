class ProductsListPage {
  pageTitle() {
    return cy.contains('h1', 'Lista dos Produtos')
  }

  productRow(productName) {
    return cy.contains('tbody tr', productName)
  }
}

export default new ProductsListPage()