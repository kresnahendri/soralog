import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Products, ProductDetails, Wishlist, Cart,
} from '../pages'
import { Navbar } from '../containers'
import asset from '../constants/asset'
import { Text, Flex, Badge } from '../components'
import history from './history'

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  ${Badge} {
    position: absolute;
    top: -5px;
    right: -5px;
  }
`
const NavContentIcons = (props) => {
  const imgStyles = {
    height: '24px',
    marginLeft: '14px',
  }
  return (
    <Flex>
      {/* <img style={imgStyles} src={asset.icon.search} alt="" /> */}
      <IconWrapper onClick={() => history.push('/wishlist')}>
        <img style={imgStyles} src={asset.icon.heart} alt="" />
        {
          props.wishlist.length !== 0 &&
          <Badge primary>{props.wishlist.length}</Badge>
        }
      </IconWrapper>
      <IconWrapper onClick={() => history.push('/cart')}>
        <img style={imgStyles} src={asset.icon.cart} alt="" />
      </IconWrapper>
    </Flex>
  )
}
const Routes = (props) => {
  return (
    <Router history={history}>
      <div>
        <Navbar
          icon={asset.icon.back}
          title={<Text title>{props.title}</Text>}
          right={<NavContentIcons wishlist={props.wishlist} />}

        />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:slug" exact component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default connect((state) => ({
  title: state.ui.title,
  wishlist: state.product.wishlist,
}))(Routes)
