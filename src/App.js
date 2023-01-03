import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/auth.context'
import Routes from './routes'
import GlobalStyle from './styles/global.styles'
import darkTheme from './styles/themes/dark'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
