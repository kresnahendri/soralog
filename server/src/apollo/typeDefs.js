import { gql } from 'apollo-server'

export default gql`
  type Product {
    title: String
    slug: String
  }

  type Query {
    getProducts(offset: Int, limit: Int): [Product]
    getProductDetails(slug: String): Product
  }
`
