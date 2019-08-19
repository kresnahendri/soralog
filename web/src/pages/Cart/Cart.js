import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Main, Card, Text, Box, Button, Divider, Flex,
} from '../../components'
import { setTitle } from '../../store/actions/uiActions'
import CartItem from './containers/CartItem'
import history from '../../routes/history'

const PayFooter = styled.div`
  padding: 20px;
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 480px;
`
const Cart = (props) => {
  const { cart } = props
  React.useEffect(() => {
    props.setTitle('Cart')
  }, [])

  return (
    <Main style={{ position: 'relative' }}>
      <Card>
        {
          cart.map((item) => (
            <CartItem item={item} />
          ))
        }
      </Card>
      {
        cart.length === 0 && (
          <Card style={{ padding: '20px' }}>
            <Text title>Cart masih kosong</Text>
            <Box h="20" />
            <Button primary onClick={() => history.push('/')}>MULAI BELANJA</Button>
          </Card>
        )
      }
      <PayFooter>
        <Flex jc="space-between">
          <Text>Total (Sebelum Ongkir)</Text>
          <Text bold>1230000</Text>
        </Flex>
        <Box h="5" />
        <Divider />
        <Box h="10" />
        <Button onClick={() => alert('Thank YOU')}>BAYAR</Button>
      </PayFooter>
    </Main>
  )
}

export default connect((state) => ({
  cart: state.product.wishlist,
}), { setTitle })(Cart)
