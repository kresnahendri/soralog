import { switchMap } from 'rxjs/operators'
import { from, zip } from 'rxjs'
import mongoose from 'mongoose'
import db from '../lib/db'
import logger from '../lib/logger'
import Product from '../models/product'
import User from '../models/user'
import initialData from './data/initialData'

db.connectMongo()
  .pipe(
    switchMap(() => Product.deleteMany()),
    switchMap(() => User.deleteMany()),
    switchMap(() => {
      const createProductObservables = initialData
        .map((data) => {
          return Product({
            descriptionMarkdown: data.descriptionMarkdown,
            detailMarkdown: data.detailMarkdown,
            images: data.images,
            material: data.material,
            price: data.price,
            quantity: data.quantity,
            slug: data.slug,
            title: data.title,
            variants: data.variants,
            category: data.category,
          })
        })
        .map((newProduct) => from(newProduct.save()))
      const admin = User({ username: 'admin', password: 'admin' })
      const createAdminObservables = from(admin.save())

      return zip(...createProductObservables, createAdminObservables)
    })
  )
  .subscribe({
    error: (error) => logger.error(error),
    next: (x) => {
      mongoose.disconnect()
        .then(() => logger.info(`Data migration is completed: ${x.length} total data inserted`))
    },
  })
