import React from 'react'
import { connect } from 'react-redux'
import { ProductCardB } from '../../containers'
import {
  Main, Text, Box, Button, Card,
} from '../../components'
import { setTitle } from '../../store/actions/uiActions'
import history from '../../routes/history'

const Wishlist = ({ wishlist, ...props }) => {
  React.useEffect(() => {
    props.setTitle('Whislist')
  }, [])
  return (
    <Main>
      <div style={{ background: 'white' }}>
        {
          wishlist.map((product) => (
            <ProductCardB
              key={product._id}
              img={product.images.length > 0 ? product.images[0].fullUrl : ''}
              name={product.title}
              price={product.price.amount}
              sizes="L, M, S, XL"
              link={`/products/${product.slug}`}
              isLoved
              product={product}
            />
          ))
        }
        {
          wishlist.length === 0 && (
            <Card style={{ padding: '20px' }}>
              <Text title>Wishlist masih kosong</Text>
              <Box h="20" />
              <Button primary onClick={() => history.push('/')}>MULAI BELANJA</Button>
            </Card>
          )
        }
      </div>
    </Main>
  )
}

export default connect((state) => ({
  wishlist: state.product.wishlist,
}), { setTitle })(Wishlist)
