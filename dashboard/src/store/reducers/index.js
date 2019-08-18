import { combineReducers } from 'redux'
import pingReducer from './pingReducer'

export default combineReducers({
  ping: pingReducer,
})
