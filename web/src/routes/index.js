import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import { Products, ProductDetails } from '../pages'
import { Navbar } from '../containers'
import asset from '../constants/asset'
import { Text, Flex } from '../components'
import history from './history'

const NavContentIcons = () => {
  const imgStyles = {
    height: '24px',
    marginLeft: '14px',
  }

  return (
    <Flex>
      <img style={imgStyles} src={asset.icon.search} alt="" />
      <img style={imgStyles} src={asset.icon.heart} alt="" />
      <img style={imgStyles} src={asset.icon.cart} alt="" />
    </Flex>
  )
}
const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar
          icon={asset.icon.back}
          title={<Text title>Dress</Text>}
          right={<NavContentIcons />}
        />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/products/:slug" exact component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
