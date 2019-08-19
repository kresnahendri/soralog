import { combineEpics } from 'redux-observable'
import { getProductsEpic } from './productEpics'

export default combineEpics(
  getProductsEpic
)
