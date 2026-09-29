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

})