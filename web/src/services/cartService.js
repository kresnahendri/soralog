/* eslint-disable import/no-cycle */
import store from '../store'
import { SET_CART } from '../store/actionTypes'

const addItem = (product) => {
  let newCart = []
  const current = localStorage.getItem('cart')
  if (current !== null) {
    newCart = [...newCart, ...JSON.parse(current)]
  }
  newCart.push(product)
  store.dispatch({ type: SET_CART, payload: newCart })
  localStorage.setItem('cart', JSON.stringify(newCart))
}

const getCart = () => {
  const current = localStorage.getItem('cart')
  return (current !== null) ? JSON.parse(current) : []
}

const removeItem = (product) => {
  const current = JSON.parse(localStorage.getItem('cart'))
  const removedIdx = current.findIndex((x) => x._id === product._id)
  const newCart = (removedIdx === 0)
    ? current.splice(1, current.length - 1)
    : [
      ...current.splice(0, removedIdx),
      ...current.splice(removedIdx, current.length - 1),
    ]
  store.dispatch({ type: SET_CART, payload: newCart })
  localStorage.setItem('cart', JSON.stringify(newCart))
}

export default {
  addItem,
  getCart,
  removeItem,
}
