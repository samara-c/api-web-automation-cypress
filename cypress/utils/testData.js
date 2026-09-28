class TestData {
  static generateUser() {
    const timestamp = Date.now()

    return {
      name: `QA User ${timestamp}`,
      email: `qa.user.${timestamp}@test.com`,
      password: 'Qa123456!'
    }
  }

  static generateInvalidCredentials() {
    return {
      email: `invalid.${Date.now()}@test.com`,
      password: 'InvalidSamaraPassword123!'
    }
  }
}

export default TestData