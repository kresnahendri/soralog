/* eslint-disable import/no-cycle */
import store from '../store'
import { SET_WISHLIST } from '../store/actionTypes'

const addWishlist = (product) => {
  let newWishlist = []
  const current = localStorage.getItem('wishlist')
  if (current !== null) {
    newWishlist = [...newWishlist, ...JSON.parse(current)]
  }
  newWishlist.push(product)
  store.dispatch({ type: SET_WISHLIST, payload: newWishlist })
  localStorage.setItem('wishlist', JSON.stringify(newWishlist))
}
const getWishlist = () => {
  const current = localStorage.getItem('wishlist')
  return (current !== null) ? JSON.parse(current) : []
}
const removeWishlist = (product) => {
  const current = JSON.parse(localStorage.getItem('wishlist'))
  const removedIdx = current.findIndex((x) => x._id === product._id)
  const newWishlist = (removedIdx === 0)
    ? current.splice(1, current.length - 1)
    : [
      ...current.splice(0, removedIdx),
      ...current.splice(removedIdx, current.length - 1),
    ]
  store.dispatch({ type: SET_WISHLIST, payload: newWishlist })
  localStorage.setItem('wishlist', JSON.stringify(newWishlist))
}

export default {
  addWishlist,
  getWishlist,
  removeWishlist,
}
