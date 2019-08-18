import { PONG_F, PING_F } from '../actionTypes'

const initialState = {
  result: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case PING_F:
    return { ...state, result: action.payload }
  case PONG_F:
    return { ...state, result: action.payload }
  default:
    return state
  }
}
