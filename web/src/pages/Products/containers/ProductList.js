import React, { useEffect, useState } from 'react'
import {
  Flex, Text, Container, Button,
} from '../../../components'
import { ProductCardB } from '../../../containers'
import { useScroll } from '../../../lib/hooks'

const ProductList = () => {
  const { isReachedBottom } = useScroll()
  const [products, setProducts] = useState([0, 1])
  useEffect(() => {
    if (isReachedBottom) {
      setProducts([...products, [0, 1]])
    }
  })

  return (
    <div style={{ background: 'white' }}>
      <Container>
        <Flex style={{ height: '56px' }} jc="flex-start">
          <Text title>Rekomendasi Produk</Text>
        </Flex>
        <Flex jc="flex-start" style={{ marginBottom: '15px' }}>
          <Button color="white" style={{ minWidth: '0', marginRight: '20px' }}>Urutkan</Button>
          <Button color="white" style={{ minWidth: '0' }}>Filter</Button>
        </Flex>
      </Container>
      {
        products.map((_, i) => (
          <ProductCardB
            key={i}
            img="https://imager-next.freetls.fastly.net/images/resized/480/15f5793a-bb0d-41f0-b57e-624309695fa0"
            name="Dulitya Stripes Bodycon Mini Dress"
            price="159.000"
            sizes="L, M, S, XL"
            label="Produk Terlaris"
          />
        ))
      }
    </div>
  )
}

export default ProductList
