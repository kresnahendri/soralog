import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<ConnectedApp />, document.getElementById('app'))
