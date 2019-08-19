import request from 'supertest'
import app from '../src'

describe('Product - REST API', () => {
  describe('GET /api/products', () => {
    it('should get all products record', (done) => {
      request(app)
        .get('/api/products')
        .expect('Content-Type', /json/)
        .expect(200)
      setTimeout(done, 500)
    })
  })

  describe('GET /api/products/:id', () => {
    it('should get single products record', (done) => {
      request(app)
        .get('/api/products/5d597753f2428e9ae7cc2375')
        .expect('Content-Type', /json/)
        .expect(200)
      setTimeout(done, 500)
    })
  })

  describe('POST /api/products', () => {
    it('should get updated products record - Unauthorized', (done) => {
      request(app)
        .post('/api/products')
        .send({ title: 'Baju Baru' })
        .expect('Content-Type', /json/)
        .expect(401)
      setTimeout(done, 500)
    })
  })

  describe('PUT /api/products', () => {
    it('should get create products record - Unauthorized', (done) => {
      request(app)
        .put('/api/products/5d597753f2428e9ae7cc2375')
        .send({ title: 'Baju Baru Update' })
        .expect('Content-Type', /json/)
        .expect(401)
      setTimeout(done, 500)
    })
  })

  describe('DELETE /api/products', () => {
    it('should get delete products record - Unauthorized', (done) => {
      request(app)
        .delete('/api/products/5d597753f2428e9ae7cc2375')
        .expect('Content-Type', /json/)
        .expect(401)
      setTimeout(done, 500)
    })
  })
})

describe('Product - GRAPHQL', () => {
  describe('POST /graphql', () => {
    it('should get all products record', (done) => {
      request(app)
        .post('/graphql')
        .send({
          body: `
            getProducts(offset: 0, limit: 1, sort: "-createdAt") {
              title
              images
              slug
            }
          `,
        })
        .expect('Content-Type', /json/)
        .expect(200, {
          data: {
            title: 'Baju Baru',
            images: [{ fullUrl: 'http://image-link.jpg' }],
            slug: 'baju-baru',
          },
        })
      setTimeout(done, 500)
    })
  })
})
