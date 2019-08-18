import {
  GET_PRODUCTS_F, SET_PRODUCTS, GET_PRODUCTS, GET_PRODUCTS_R,
} from '../actionTypes'

const initialState = {
  products: [],
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_PRODUCTS: {
    return {
      ...state,
      isLoading: true,
    }
  }
  case GET_PRODUCTS_F:
  case SET_PRODUCTS:
    return {
      ...state,
      products: action.payload,
      isLoading: false,
    }
  case GET_PRODUCTS_R: {
    return {
      ...state,
      isLoading: false,
    }
  }
  default:
    return state
  }
}
