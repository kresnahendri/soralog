import { pluck } from 'rxjs/operators'
import { requestApi } from '../lib/request'

const getProducts = () => {
  return requestApi({
    uri: '/products',
    method: 'get',
  }).pipe(
    pluck('data', 'data', 'products')
  )
}

const deleteProduct = (id) => {
  return requestApi({
    uri: `/products/${id}`,
    method: 'delete',
    withAuth: true,
  })
}

export default {
  getProducts,
  deleteProduct,
}
