import { switchMap } from 'rxjs/operators'
import { from, zip } from 'rxjs'
import db from '../src/lib/db'
import logger from '../src/lib/logger'
import Product from '../src/models/product'
import initialData from './data/initialData'

db.connectMongo()
  .pipe(
    switchMap(() => Product.deleteMany()),
    switchMap(() => {
      const createObservables = initialData
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
          })
        })
        .map((newProduct) => from(newProduct.save()))

      return zip(...createObservables)
    })
  )
  .subscribe({
    error: (error) => logger.error(error),
    next: (x) => logger.info(`Data migration is completed: ${x.length} total data inserted`),
  })
