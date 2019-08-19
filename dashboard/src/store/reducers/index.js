import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import productReducer from './productReducer'

export default combineReducers({
  toastr: toastrReducer,
  product: productReducer,
})
