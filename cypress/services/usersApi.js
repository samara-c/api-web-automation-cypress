class UsersApi {
    createUser(user, failOnStatusCode = true) {
        return cy.request({
            method: 'POST',
            url: `${Cypress.expose('apiUrl')}/usuarios`,
            failOnStatusCode,
            body: {
                nome: user.name,
                email: user.email,
                password: user.password,
                administrador: user.administrador
            }
        })
    }

    getUserById(userId) {
        return cy.request({
            method: 'GET',
            url: `${Cypress.expose('apiUrl')}/usuarios/${userId}`
        })
    }
}

export default new UsersApi()