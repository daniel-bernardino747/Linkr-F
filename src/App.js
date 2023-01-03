import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import GlobalStyle from './styles/global.styles'
import darkTheme from './styles/themes/dark'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
