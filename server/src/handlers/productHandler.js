import express from 'express'
import { from } from 'rxjs'
import Product from '../models/product'
import { responseSuccess, responseError } from '../lib/response'
import { chechkAuth } from '../middlewares/authMiddleware'

const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  from(Product.find().sort('-createdAt'))
    .subscribe(
      (products) => responseSuccess(res, { products }),
      (err) => responseError(res, err.message)
    )
})

productRouter.get('/:id', (req, res) => {
  from(Product.findOne({ _id: req.params.id }))
    .subscribe(
      (product) => responseSuccess(res, { product }),
      (err) => responseError(res, err.message)
    )
})

productRouter.post('/', chechkAuth, (req, res) => {
  const newProduct = Product({
    ...req.body,
  })
  from(newProduct.save())
    .subscribe(
      (product) => responseSuccess(res, { product }),
      (err) => responseError(res, err.message)
    )
})

productRouter.put('/:id', chechkAuth, (req, res) => {
  const newProduct = req.body
  from(Product.updateOne({ _id: req.params.id }, { $set: { ...newProduct } }))
    .subscribe(
      (product) => responseSuccess(res, { product }),
      (err) => responseError(res, err.message)
    )
})

productRouter.delete('/:id', chechkAuth, (req, res) => {
  from(Product.deleteOne({ _id: req.params.id }))
    .subscribe(
      (product) => responseSuccess(res, { product }),
      (err) => responseError(res, err.message)
    )
})

export default productRouter
