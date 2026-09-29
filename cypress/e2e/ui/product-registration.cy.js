import TestData from '../../utils/testData'
import UsersApi from '../../services/usersApi'
import LoginPage from '../../pages/LoginPage'
import ProductPage from '../../pages/ProductPage'

describe('Product Registration', () => {

  it('should register a product successfully as admin', () => {
    const admin = TestData.generateAdmin()

    UsersApi.createUser(admin).then((response) => {
      expect(response.status).to.eq(201)

      LoginPage.visit()
      LoginPage.typeEmail(admin.email)
      LoginPage.typePassword(admin.password)
      LoginPage.submit()

      //assertions

      cy.url({ timeout: 10000 }).should('include', '/admin/home')
      cy.contains('Este é seu sistema para administrar seu ecommerce.')
            .should('be.visible')
    })
  })

})