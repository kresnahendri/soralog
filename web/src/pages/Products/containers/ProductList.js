import React, { useEffect, useState } from 'react'
import {
  tap, catchError, delay,
} from 'rxjs/operators'
import { connect } from 'react-redux'
import { of } from 'rxjs'
import {
  Flex, Text, Container, Button, LoadingIcon, Box,
} from '../../../components'
import { ProductCardB } from '../../../containers'
import { useScroll } from '../../../lib/hooks'
import { getProducts } from '../../../services/productService'
import { setProducts } from '../../../store/actions/productActions'

const ProductList = (props) => {
  const { isReachedBottom } = useScroll()
  const [isAllFetched, setIsAllFetched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log('INIT FETCH')
    _getProducts().subscribe()
  }, [])

  useEffect(() => {
    if (isReachedBottom && !isLoading && !isAllFetched) {
      console.log('FETCH MORE')
      _getProducts().subscribe()
    }
  })

  const _getProducts = () => {
    setIsLoading(true)
    console.log(props.offset)
    return getProducts(props.offset, props.limit).pipe(
      tap((res) => {
        props.setProducts(res)
        if (res.length === 0) {
          setIsAllFetched(true)
        }
        setIsLoading(false)
      }),
      catchError((error) => {
        console.log('ERROR')
        return of(error).pipe(
          delay(10000),
          tap(() => setIsLoading(false))
        )
      }),
    )
  }

  // console.log(products)
  return (
    <>
      <div style={{ background: 'white' }}>

        <Container>
          <Flex style={{ height: '56px' }} jc="flex-start">
            <Text title>Rekomendasi Produk</Text>
          </Flex>
          {
            props.withFilter && (
              <Flex jc="flex-start" style={{ marginBottom: '15px' }}>
                <Button color="white" style={{ minWidth: '0', marginRight: '20px' }}>Urutkan</Button>
                <Button color="white" style={{ minWidth: '0' }}>Filter</Button>
              </Flex>
            )
          }
        </Container>
        {
          props.products.map((product, i) => {
            return (
              <ProductCardB
                key={i}
                img={product.images.length > 0 ? product.images[0].fullUrl : ''}
                name={product.title}
                price={product.price.amount}
                sizes="L, M, S, XL"
                // label="Produk Terlaris"
                link={`/products/${product.slug}`}
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
