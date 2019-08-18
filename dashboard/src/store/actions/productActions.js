import { GET_PRODUCTS, GET_PRODUCTS_F, SET_PRODUCTS } from '../actionTypes'

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  }
}

export const getProductsF = (products) => {
  return {
    type: GET_PRODUCTS_F,
    payload: products,
  }
}

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}
