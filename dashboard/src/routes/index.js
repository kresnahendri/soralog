import ReduxToastr from 'react-redux-toastr'
import { Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import history from './history'
import { Products, Login } from '../pages'

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
          <Route path="/" exact component={Products} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
