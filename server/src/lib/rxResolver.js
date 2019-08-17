import logger from './logger'

export const rxResolver = (obs) => {
  return new Promise((resolve, reject) => {
    obs.subscribe(
      (result) => resolve(result),
      (error) => {
        logger.error(error.message)
        reject(error)
      }
    )
  })
}
