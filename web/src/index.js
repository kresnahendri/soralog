import 'normalize.css/normalize.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from './App'
import store from './store'
import theme from './constants/theme'
import GlobalStyles from './components/GlobalStyles'

const ConnectedApp = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>
)

render(<ConnectedApp />, document.getElementById('app'))
