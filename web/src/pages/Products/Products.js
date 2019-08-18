import React from 'react'
import { Main } from '../../components'
// import ProductNewestList from './containers/ProductNewestList'
import ProductList from './containers/ProductList'

const Products = () => {
  return (
    <Main>
      {/* <ProductNewestList /> */}
      <ProductList withFilter />
    </Main>
  )
}

export default Products
