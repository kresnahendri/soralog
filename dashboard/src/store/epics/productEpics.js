import 'rxjs'
import { map, switchMapTo, catchError } from 'rxjs/operators'
import { toastr } from 'react-redux-toastr'
import { GET_PRODUCTS } from '../actionTypes'
import { getProductsF } from '../actions/productActions'
import productService from '../../services/productService'

export const getProductsEpic = (action$) => {
  return action$.ofType(GET_PRODUCTS).pipe(
    switchMapTo(productService.getProducts()),
    map((products) => getProductsF(products)),
    catchError((error) => toastr.error('Error', error.response.data.message))
  )
}
