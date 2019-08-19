import request from 'supertest'
import app from '../src'

describe('Auth', () => {
  describe('POST /api/auth/login', () => {
    it('should login with username and password', (done) => {
      request(app)
        .post('/api/auth/login')
        .send({
          username: 'admin',
          password: 'admin',
        })
        .expect('Content-Type', /json/)
        .expect(201, {
          data: {
            token: 'auniquetokencreatedbyjwt',
          },
        })
      setTimeout(done, 500)
    })
  })
})
