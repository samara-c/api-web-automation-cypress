class UsersApi {
  createUser(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.expose('apiUrl')}/usuarios`,
      body: {
        nome: user.name,
        email: user.email,
        password: user.password,
        administrador: user.administrador
      }
    })
  }
}

export default new UsersApi()