import { ApolloServer } from 'apollo-server'
import { switchMapTo } from 'rxjs/operators'
import { from } from 'rxjs'
import typeDefs from './apollo/typeDefs'
import resolvers from './apollo/resolvers'
import logger from './lib/logger'
import db from './lib/db'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
db.connectMongo()
  .pipe(switchMapTo(from(server.listen())))
  .subscribe(({ url }) => {
    logger.info(`🚀  Server ready at ${url}`)
  })
