import { gql } from 'apollo-server'

export default gql`
  type ProductImage {
    fullUrl: String
  }

  type ProductPrice {
    amount: Int
  }

  type ProductVariant {
    color: String
    size: String
  }

  type Product {
    descriptionMarkdown: String
    detailMarkdown: String
    images: [ProductImage]
    price: ProductPrice
    title: String
    slug: String
    material: String
    variants: [ProductVariant]
  }

  type Query {
    getProducts(offset: Int, limit: Int): [Product]
    getProductDetails(slug: String): Product
  }
`
