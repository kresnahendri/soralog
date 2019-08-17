import React, { useState } from 'react'
import styled from 'styled-components'
import marked from 'marked'
import {
  Container, Text, Flex, Divider, Button,
} from '../../../components'
import asset from '../../../constants/asset'
import theme from '../../../constants/theme'

const Root = styled.div`
`
const MainInfo = ({
  title, price, material, variants,
}) => {
  const [isLoved, setIsLoved] = useState(false)
  const handleSave = () => {
    setIsLoved(!isLoved)
  }
  return (
    <Root>
      <Container style={{ padding: '10px 16px' }}>
        <Flex jc="space-between">
          <div>
            <Text bold>{title}</Text>
            <Text bold style={{ color: theme.color.primary }}>{price}</Text>
          </div>
          <Flex>
            <img style={{ width: '24px' }} src={asset.icon.hanger} alt="" />
            <Text style={{ color: 'rgb(48, 172, 48)' }}>Bisa Coba Dulu</Text>
          </Flex>
        </Flex>
      </Container>
      <Divider />
      <Container style={{ padding: '10px 16px' }}>
        <Text medium>BAHAN UTAMA</Text>
        <Text>{material}</Text>
      </Container>
      <Divider />
      <Container style={{ padding: '10px 16px' }}>
        {/* <Text dangerouslySetInnerHTML={{ __html: marked(detailMarkdown) }} /> */}
        <Text>Warna: {[...new Set(variants.map((v) => v.color))].join(', ')}</Text>
        <Text>Ukuran: {[...new Set(variants.map((v) => v.size))].join(', ')}</Text>
      </Container>
      <Divider />
      <Container style={{ padding: '10px 16px 15px' }}>
        <Flex>
          <Button color="white" style={{ flex: 1, marginRight: '8px' }} onClick={() => handleSave()}>
            <Flex>
              <img style={{ width: '24px', marginRight: '4px' }} src={isLoved ? asset.icon.heartActive : asset.icon.heart} alt="" />
              <Text style={{ color: isLoved ? theme.color.primary : theme.color.grey01 }}>SIMPAN</Text>
            </Flex>
          </Button>
          <Button style={{ flex: 4 }}>BELI SEKARANG</Button>
        </Flex>
      </Container>
    </Root>
  )
}

export default MainInfo
