import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import store from './store'
import theme from './constants/theme'
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}

export default App
