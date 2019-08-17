import React from 'react'
import {
  Card, Flex, Text, Container,
} from '../../../components'
import theme from '../../../constants/theme'
import { ProductCardA } from '../../../containers'

const ProductNewestList = () => {
  return (
    <Card>
      <Container>
        <Flex jc="space-between" style={{ height: '56px' }}>
          <Text title>Terbaru</Text>
          <Text
            tag="a"
            style={{ fontWeight: 'bold', color: theme.color.primary, cursor: 'pointer' }}
            onClick={() => {}}
          >{'LIHAT SEMUA >'}
          </Text>
        </Flex>
      </Container>
      <Flex style={{ padding: '0 12px' }}>
        <div style={{ padding: '0 4px' }}>
          <ProductCardA
            img="https://imager-next.freetls.fastly.net/images/resized/480/e49a4fa5-b2c6-4d44-a8df-b66af7881c01"
            name="HALA Nasia Texture Flare Muslim Dress"
            price="229000"
          />
        </div>
        <div style={{ padding: '0 4px' }}>
          <ProductCardA
            img="https://imager-next.freetls.fastly.net/images/resized/480/e49a4fa5-b2c6-4d44-a8df-b66af7881c01"
            name="HALA Nasia Texture Flare Muslim Dress"
            price="229000"
            isLoved
          />
        </div>
      </Flex>
    </Card>
  )
}

export default ProductNewestList
