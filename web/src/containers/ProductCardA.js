import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '../components'
import asset from '../constants/asset'

const Image = styled.img`
  width: 100%;
`
const Name = styled(Text)`
  margin: 0px;
  color: rgb(82, 82, 82);
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const TextWrapper = styled.div`
  max-width: 170px;
  @media screen and (max-width: 375px){
    /* max-width: 120px; */
  }
`
const ProductCard = ({
  img, name, price, isLoved,
}) => {
  const [loved, setLoved] = React.useState(isLoved)
  const selectedHeart = loved ? asset.icon.heartActive : asset.icon.heart

  const handleLoved = () => {
    setLoved(!loved)
  }

  return (
    <Flex fd="column">
      <Image src={img} />
      <Flex jc="space-between" style={{ padding: '8px', width: '100%' }}>
        <TextWrapper>
          <Name>{name}</Name>
          <Text>{price}</Text>
        </TextWrapper>
        <img
          style={{ height: '24px', cursor: 'pointer', marginLeft: '10px' }}
          src={selectedHeart}
          alt="Loved"
          onClick={() => handleLoved()}
          role="presentation"
        />
      </Flex>
    </Flex>
  )
}

export default ProductCard
