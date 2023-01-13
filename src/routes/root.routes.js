import React from 'react'
import { Outlet } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { ContextsProviders } from '../contexts'
import GlobalStyle from '../styles/global.styles'
import darkTheme from '../styles/themes/dark'

export default function Root() {
  return (
    <ContextsProviders>
      <ThemeProvider theme={darkTheme}>
        <Outlet />
        <GlobalStyle />
      </ThemeProvider>
    </ContextsProviders>
  )
}
