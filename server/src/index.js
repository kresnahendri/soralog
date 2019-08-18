import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import typeDefs from './apollo/typeDefs'
import resolvers from './apollo/resolvers'
import logger from './lib/logger'
import db from './lib/db'
import { PORT } from './config/env'
import authHandler from './handlers/authHandler'
import productHandler from './handlers/productHandler'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/api/auth', authHandler)
app.use('/api/products', productHandler)
server.applyMiddleware({ app, path: '/graphql' })

db.connectMongo()
  .subscribe(() => {
    app.listen({ port: PORT }, () => {
      logger.info(`🚀  Server ready at port ${PORT}`)
    })
  })
