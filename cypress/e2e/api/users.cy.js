import TestData from '../../utils/testData'
import UsersApi from '../../services/usersApi'

describe('Users API', () => {

  it('should create a user successfully', () => {
    const user = TestData.generateUser()

    UsersApi.createUser(user).then((response) => {

      expect(response.status).to.eq(201)

      expect(response.body).to.have.property(
        'message',
        'Cadastro realizado com sucesso'
      )

      expect(response.body).to.have.property('_id')
      expect(response.body._id).to.be.a('string')
      expect(response.body._id).to.not.be.empty
    })
  })

  it('should not create a user with an existing email', () => {
    const user = TestData.generateUser()

    UsersApi.createUser(user).then((firstResponse) => {
      expect(firstResponse.status).to.eq(201)

      UsersApi.createUser(user, false).then((response) => {
        expect(response.status).to.eq(400)

        expect(response.body).to.have.property(
          'message',
          'Este email já está sendo usado'
        )
      })
    })
  })

  it('should retrieve a created user by id', () => {
  const user = TestData.generateUser()

  UsersApi.createUser(user).then((createResponse) => {
    expect(createResponse.status).to.eq(201)

    const userId = createResponse.body._id

    UsersApi.getUserById(userId).then((response) => {
      expect(response.status).to.eq(200)

      expect(response.body.nome).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
      expect(response.body.administrador).to.eq(user.administrador)
      expect(response.body._id).to.eq(userId)
    })
  })
})

})