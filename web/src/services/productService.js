import { map } from 'rxjs/operators'
import { requestGQL } from '../lib/request'

export const getProductDetails = (slug = '') => {
  const query = `
  {
    getProductDetails(slug: "${slug}") {
      title
      slug
      material
      variants {
        color
        size
      }
      detailMarkdown
      descriptionMarkdown
      images {
        fullUrl
      }
      price {
        amount
      }
    }
  }`

  return requestGQL({ query }).pipe(
    map((res) => res.data.getProductDetails),
  )
}

export const getProducts = (offset, limit) => {
  const query = `
  {
    getProducts(offset: ${offset}, limit: ${limit}) {
      title
      slug
      images {
        fullUrl
      }
      price {
        amount
      }
    }
  }
  `
  return requestGQL({ query }).pipe(
    map((res) => res.data.getProducts),
  )
}
