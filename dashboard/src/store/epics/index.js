import { combineEpics } from 'redux-observable'
import { pingEpic, pongEpic } from './pingEpics'
import { getProductsEpic } from './productEpics'

export default combineEpics(
  pingEpic,
  pongEpic,
  getProductsEpic
)
