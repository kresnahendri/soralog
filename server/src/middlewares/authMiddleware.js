import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env'
import { responseError } from '../lib/response'

export const chechkAuth = (req, res, next) => {
  try {
    const authroizationHeader = req.headers.authorization.split(' ')
    const bearer = authroizationHeader[0]
    const token = authroizationHeader[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded !== null && bearer === 'Bearer') {
      return next()
    }
    return responseError(res, 'Unauthorized', 401)
  } catch (err) {
    return responseError(res, 'Unauthorized', 401)
  }
}
