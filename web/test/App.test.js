import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from '../src/App'
import store from '../src/store'
import theme from '../src/constants/theme'
import GlobalStyles from '../src/components/GlobalStyles'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </ThemeProvider>, div
  )
  ReactDOM.unmountComponentAtNode(div)
})
