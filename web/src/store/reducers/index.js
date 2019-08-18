import { combineReducers } from 'redux'
import productReducer from './productReducer'
import uiReducer from './uiReducer'

export default combineReducers({
  product: productReducer,
  ui: uiReducer,
})
