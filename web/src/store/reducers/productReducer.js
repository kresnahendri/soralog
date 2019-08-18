import { SET_PRODUCTS } from '../actionTypes'

const initialState = {
  products: [],
  limit: 5,
  offset: 0,
}

export default (state = initialState, action) => {
  const generateOffset = (length) => {
    return (length !== 0)
      ? state.offset + length
      : state.offset
  }

  switch (action.type) {
  case SET_PRODUCTS:
    return {
      ...state,
      products: [...state.products, ...action.payload],
      offset: generateOffset(action.payload.length),
    }

  default:
    return state
  }
}
