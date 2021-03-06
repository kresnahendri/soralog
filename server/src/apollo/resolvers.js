import { defer, from } from 'rxjs'
import Product from '../models/product'
import { rxResolver } from '../lib/rxResolver'

const getProducts = (_, {
  offset = 0, limit = 5, sort = '-createdAt', filter = '{ "quantity": { "$gt": 0 } }',
}) => {
  return rxResolver(
    defer(() => from(
      Product.find(JSON.parse(filter))
        .skip(offset)
        .limit(limit)
        .sort(sort)
    ))
  )
}

const getProductDetails = (_, { slug }) => {
  return rxResolver(
    defer(() => from(Product.findOne({ slug })))
  )
}

const Query = {
  getProducts,
  getProductDetails,
}

export default {
  Query,
}
