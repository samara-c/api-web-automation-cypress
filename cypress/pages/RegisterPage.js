class RegisterPage {
  visit() {
    cy.visit('/cadastrarusuarios')
  }

  nameInput() {
    return cy.get('[data-testid="nome"]')
  }

  emailInput() {
    return cy.get('[data-testid="email"]')
  }

  passwordInput() {
    return cy.get('[data-testid="password"]')
  }

  registerButton() {
    return cy.get('[data-testid="cadastrar"]')
  }

  typeName(name) {
    this.nameInput().type(name)
  }

  typeEmail(email) {
    this.emailInput().type(email)
  }

  typePassword(password) {
    this.passwordInput().type(password)
  }

  submit() {
    this.registerButton().click()
  }
}

export default new RegisterPage()