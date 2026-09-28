import RegisterPage from '../../pages/RegisterPage'
import { generateUser } from '../../utils/testData'
import HomePage from '../../pages/HomePage'

describe('User Registration', () => {

  beforeEach(() => {
    RegisterPage.visit()
  })

  it('should register a regular user successfully', () => {

    //user generation
    const user = generateUser()
    
    RegisterPage.typeName(user.name)
    RegisterPage.typeEmail(user.email)
    RegisterPage.typePassword(user.password)
    RegisterPage.submit()

    //assertions
    cy.url({ timeout: 10000 }).should('include', '/home')
    HomePage.storeTitle().should('be.visible')

    

  })

})