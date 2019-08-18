import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import pingReducer from './pingReducer'
import productReducer from './productReducer'

export default combineReducers({
  ping: pingReducer,
  toastr: toastrReducer,
  product: productReducer,
})
