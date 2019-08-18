import { from, defer } from 'rxjs'
import axios from 'axios'
import { API_URL } from '../config/env'

export const requestApi = ({
  uri,
  method,
  body = null,
  withAuth = false,
  params = '',
}) => {
  return defer(() => {
    const opts = {
      url: API_URL + uri,
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    }

    if (withAuth) {
      const accessToken = localStorage.getItem('accessToken')
      opts.headers.Authorization = `Bearer ${accessToken}`
    }

    if (body !== null) {
      opts.data = JSON.stringify(body)
    }

    return from(axios(opts))
  })
}
