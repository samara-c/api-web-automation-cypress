import RegisterPage from '../../pages/RegisterPage'

describe('User Registration', () => {

  beforeEach(() => {
    RegisterPage.visit()
  })

  it('should register a regular user successfully', () => {

    const timestamp = Date.now()

    const user = {
        name: `QA User ${timestamp}`,
        email: `qa.user.${timestamp}@test.com`,
        password: 'Qa123456!'
    }
    
  })

})