import React, { useEffect, useState } from 'react'
import {
  tap, catchError, delay,
} from 'rxjs/operators'
import { connect } from 'react-redux'
import { of } from 'rxjs'
import {
  Flex, Text, Container, LoadingIcon, Box,
} from '../../../components'
import { ProductCardB } from '../../../containers'
import { useScroll } from '../../../lib/hooks'
import * as productService from '../../../services/productService'
import { setProducts } from '../../../store/actions/productActions'
import wishslistService from '../../../services/wishlistService'
import FilterCategory from './FilterCategory'

const ProductList = (props) => {
  const { isReachedBottom } = useScroll()
  const [isAllFetched, setIsAllFetched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (props.products.length === 0) {
      getProducts().subscribe()
    }
  }, [])

  useEffect(() => {
    if (isReachedBottom && !isLoading && !isAllFetched) {
      getProducts().subscribe()
    }
  })

  const getProducts = (offset = props.offset, limit = props.limit, sort = '-createdAt') => {
    setIsLoading(true)
    return productService.getProducts(offset, limit, sort).pipe(
      tap((res) => {
        props.setProducts(res)
        if (res.length === 0) {
          setIsAllFetched(true)
        }
        setIsLoading(false)
      }),
      catchError((error) => {
        return of(error).pipe(
          delay(10000),
          tap(() => setIsLoading(false))
        )
      }),
    )
  }

  return (
    <>
      <div style={{ background: 'white' }}>

        <Container>
          <Flex style={{ height: '56px' }} jc="flex-start">
            <Text title>Rekomendasi Produk</Text>
          </Flex>
          {
            props.withFilter && <FilterCategory onFilter={getProducts} onSort={getProducts} />
          }
        </Container>
        {
          props.products
            .filter((product) => {
              if (props.match === undefined) return product
              const { slug } = props.match.params
              return (slug) ? product.slug !== slug : product
            })
            .map((product) => {
              const wishslist = wishslistService.getWishlist()
              const isLoved = wishslist.find((w) => w._id === product._id)
              return (
                <ProductCardB
                  key={product._id}
                  img={product.images.length > 0 ? product.images[0].fullUrl : ''}
                  name={product.title}
                  price={product.price.amount}
                  sizes="L, M, S, XL"
                  link={`/products/${product.slug}`}
                  isLoved={isLoved && true}
                  product={product}
                />
              )
            })
        }
      </div>
      {
        isLoading
          ? (
            <Flex fd="column">
              <LoadingIcon />
              <Text caption>Sedang Memuat...</Text>
            </Flex>
          )
          : <Box h="50" />
      }
    </>
  )
}

export default connect(
  (state) => ({
    products: state.product.products,
    offset: state.product.offset,
    limit: state.product.limit,
  }), {
    setProducts,
  }
)(ProductList)
