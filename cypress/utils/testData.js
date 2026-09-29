class TestData {
  static generateUser() {
  const timestamp = Date.now()

  return {
    name: `QA User ${timestamp}`,
    email: `qa.user.${timestamp}@test.com`,
    password: 'Qa123456!',
    administrador: 'false'
  }
}

  static generateInvalidCredentials() {
    return {
      email: `invalid.${Date.now()}@test.com`,
      password: 'InvalidSamaraPassword123!'
    }
  }

  static generateAdmin() {
    const timestamp = Date.now()

    return {
      name: `QA Admin ${timestamp}`,
      email: `qa.admin.${timestamp}@test.com`,
      password: 'QaSamara123456!',
      administrador: 'true'
    }
  }

  static generateProduct() {
    const timestamp = Date.now()

    return {
      name: `QA Product S ${timestamp}`,
      price: 150,
      description: `Automation product ${timestamp}`,
      quantity: 10
    }
  }
}

export default TestData