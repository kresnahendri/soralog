import { SET_PRODUCTS, RESET_PRODUCTS } from '../actionTypes'

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export const resetProducts = () => {
  return {
    type: RESET_PRODUCTS,
  }
}
