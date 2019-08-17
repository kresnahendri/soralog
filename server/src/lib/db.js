import mongoose from 'mongoose'
import { defer, from } from 'rxjs'
import { tap } from 'rxjs/operators'
import { MONGO_URL } from '../config/env'
import logger from './logger'

const connectMongo = () => {
  return defer(() => from(mongoose.connect(MONGO_URL, { useNewUrlParser: true })))
    .pipe(
      tap(() => logger.info('MongoDB Connected'))
    )
}

export default {
  connectMongo,
}
