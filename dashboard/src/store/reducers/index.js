import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import pingReducer from './pingReducer'

export default combineReducers({
  ping: pingReducer,
  toastr: toastrReducer,
})
