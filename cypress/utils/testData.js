export function generateUser() {
    
  const timestamp = Date.now()

  return {
    name: `QA User ${timestamp}`,
    email: `qa.user.${timestamp}@test.com`,
    password: 'Qa123456!'
  }
}