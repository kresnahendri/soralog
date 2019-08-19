import React from 'react'
import styled from 'styled-components'
import {
  Flex, Text, Divider, Box,
} from '../../../components'
import asset from '../../../constants/asset'
import cartService from '../../../services/cartService'

const Root = styled.div`
  padding: 20px;
`
const CartItem = ({ item }) => {
  return (
    <Root>
      <Flex>
        <img src={item.images[0].fullUrl} alt="" style={{ width: '50px', borderRadius: '8px' }} />
        <Flex style={{ flex: 1, marginLeft: '10px' }} fd="column" jc="space-between">
          <Flex jc="space-between" style={{ width: '100%' }}>
            <Text medium>{item.title}</Text>
            <Flex fd="column" ai="flex-end">
              <img
                src={asset.icon.close}
                alt=""
                style={{ width: '20px', cursor: 'pointer' }}
                onClick={() => cartService.removeItem(item)}
                role="presentation"
              />
              <Box h="5" />
              <Text bold>{item.price.amount}</Text>
            </Flex>
          </Flex>
          <Box h="5" />
          <Divider style={{ width: '100%' }} />
        </Flex>
      </Flex>
    </Root>
  )
}

export default CartItem
