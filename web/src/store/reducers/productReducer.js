import { SET_PRODUCTS, SET_WISHLIST, RESET_PRODUCTS } from '../actionTypes'

const getWishlist = () => {
  const current = localStorage.getItem('wishlist')
  return (current !== null) ? JSON.parse(current) : []
}

const initialState = {
  products: [],
  limit: 5,
  offset: 0,
  wishlist: getWishlist(),
  cart: [],
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
  case SET_WISHLIST:
    return {
      ...state,
      wishlist: action.payload,
    }
  case RESET_PRODUCTS: {
    return {
      ...state,
      products: [],
      offset: initialState.offset,
    }
  }
  default:
    return state
  }
}
