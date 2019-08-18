import express from 'express'
import { from, throwError } from 'rxjs'
import { map, switchMap, mapTo } from 'rxjs/operators'
import jwt from 'jsonwebtoken'
import User from '../models/user'
import { responseSuccess, responseError } from '../lib/response'
import auth from '../lib/auth'
import { JWT_SECRET } from '../config/env'

const userRouter = express.Router()

userRouter.post('/login', (req, res) => {
  from(User.findOne({ username: req.body.username })).pipe(

    switchMap((user) => {
      if (user === null) {
        return throwError({ message: 'Login Failed', status: 404 })
      }

      return auth.compare(req.body.password, user.password).pipe(
        mapTo(user)
      )
    }),
    map((user) => {
      return jwt.sign(
        {
          username: user.username,
          userId: user._id,
        },
        JWT_SECRET
      )
    })
  )
    .subscribe(
      (token) => responseSuccess(res, { token }),
      (err) => responseError(res, err.message, 401)
    )
})

export default userRouter
