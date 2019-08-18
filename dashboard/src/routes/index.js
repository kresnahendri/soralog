import ReduxToastr from 'react-redux-toastr'
import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import history from './history'
import { ProductList, Login } from '../pages'

const Routes = () => {
  return (
    <Router history={history}>
      <ReduxToastr
        timeOut={2000}
        newestOnTop
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
      <div>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
