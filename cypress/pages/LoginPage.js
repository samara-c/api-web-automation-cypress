class LoginPage {
  visit() {
    cy.visit('/login')
  }

  emailInput() {
    return cy.get('[data-testid="email"]')
  }

  passwordInput() {
    return cy.get('[data-testid="senha"]')
  }

  loginButton() {
    return cy.get('[data-testid="entrar"]')
  }

  typeEmail(email) {
    this.emailInput().type(email)
  }

  typePassword(password) {
    this.passwordInput().type(password)
  }

  submit() {
    this.loginButton().click()
  }

  errorAlert() {
     return cy.get('[role="alert"]')
  }
}

export default new LoginPage()