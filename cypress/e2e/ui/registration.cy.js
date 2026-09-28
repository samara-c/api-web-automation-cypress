import RegisterPage from '../../pages/RegisterPage'
import TestData from '../../utils/testData'
import HomePage from '../../pages/HomePage'

describe('User Registration', () => {

  beforeEach(() => {
    RegisterPage.visit()
  })

  it('should register a regular user successfully', () => {

    // generate data
    const user = TestData.generateUser()

    // actions
    RegisterPage.typeName(user.name)
    RegisterPage.typeEmail(user.email)
    RegisterPage.typePassword(user.password)
    RegisterPage.submit()

    // assertions
    cy.url({ timeout: 10000 }).should('include', '/home')
    HomePage.storeTitle().should('be.visible')

    

  })

})