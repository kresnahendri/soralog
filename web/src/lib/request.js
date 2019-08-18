import { defer, from } from 'rxjs'
import { GQL_URL } from '../config/env'

export const requestGQL = (body) => {
  return defer(() => from(
    fetch(GQL_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
  ))
}
