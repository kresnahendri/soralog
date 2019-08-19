import React from 'react'
import styled from 'styled-components'
import {
  Flex, Text, Button, Container,
} from '../components'
import asset from '../constants/asset'
import theme from '../constants/theme'
import history from '../routes/history'
import wishlistService from '../services/wishlistService'

const Image = styled.img`
  width: 100%;
`
const Name = styled(Text)`
  margin: 0px;
  color: rgb(82, 82, 82);
  width: 100%;
`
const TextWrapper = styled.div`
`
const Label = styled.div`
  z-index: 2;
  background: rgb(190, 138, 35);
  display: inline-block;
  padding: 3px 8px;
  color: white;
  bottom: 40px;
  position: absolute;
  left: 0;
  font-weight: border-left;
`
const ProductCard = ({
  img, name, price, sizes, isLoved, label, link, product,
}) => {
  const [loved, setLoved] = React.useState(isLoved)
  const selectedHeart = loved ? asset.icon.heartActive : asset.icon.heart

  const handleLoved = () => {
    if (loved) {
      wishlistService.removeWishlist(product)
    } else {
      wishlistService.addWishlist(product)
    }
    setLoved(!loved)
  }

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Image src={img} onClick={() => history.push(link)} />
        {
          label &&
          <Label><Text medium>{label}</Text></Label>
        }
      </div>
      <Container style={{ padding: '16px' }}>
        <Flex jc="space-between" style={{ width: '100%' }}>
          <TextWrapper>
            <Name>{name}</Name>
            <div style={{ padding: '3px 8px', background: theme.color.grey03, display: 'inline-block' }}>
              <Text small>{sizes}</Text>
            </div>
            <Text bold>{price}</Text>
          </TextWrapper>
          <Flex>
            <img
              style={{ height: '24px', cursor: 'pointer', margin: '0 15px' }}
              src={selectedHeart}
              alt="Loved"
              onClick={() => handleLoved()}
              role="presentation"
            />
            <Button>BELI</Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}

export default ProductCard
