import { SET_TITLE } from '../actionTypes'

const initialState = {
  title: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_TITLE:
    return {
      ...state,
      title: action.payload,
    }

  default:
    return state
  }
}
