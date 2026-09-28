import LoginPage from '../../pages/LoginPage'
import TestData from '../../utils/testData'

describe('Login', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('should display an error for invalid credentials', () => {

    // generate data
    const invalidCredentials = TestData.generateInvalidCredentials()
   
    // actions
    LoginPage.typeEmail(invalidCredentials.email)
    LoginPage.typePassword(invalidCredentials.password)
    LoginPage.submit()

    // assertions
    LoginPage.errorAlert()
        .should('be.visible')
        .and('contain', 'Email e/ou senha inválidos')

  })

})