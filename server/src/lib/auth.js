import bcrypt from 'bcrypt'
import { from } from 'rxjs'

const hash = (data) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(data, 10, (err, encrypted) => {
      if (err) {
        return reject(err.message)
      }

      return resolve(encrypted)
    })
  })
}

const compare = (orgData, encryptedData) => {
  return from(new Promise((resolve, reject) => {
    bcrypt.compare(orgData, encryptedData, (_, result) => {
      if (result) {
        return resolve(result)
      }
      return reject(Error('Invalid authentication'))
    })
  }))
}

export default { hash, compare }
