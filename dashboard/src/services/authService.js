import { tap, pluck } from 'rxjs/operators'
import { requestApi } from '../lib/request'

const login = (username, password) => {
  const body = { username, password }

  return requestApi({ uri: '/auth/login', method: 'post', body }).pipe(
    pluck('data', 'data', 'token'),
    tap((token) => {
      localStorage.setItem('accessToken', token)
    })
  )
}

export default {
  login,
}
