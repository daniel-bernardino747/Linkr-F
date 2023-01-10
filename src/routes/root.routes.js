import React from 'react'
import { Outlet } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../contexts/auth.context'
import { ModalProvider } from '../contexts/modal.context'
import GlobalStyle from '../styles/global.styles'
import darkTheme from '../styles/themes/dark'

export default function Root() {
  return (
    <AuthProvider>
      <ModalProvider>
        <ThemeProvider theme={darkTheme}>
          <Outlet />
          <GlobalStyle />
        </ThemeProvider>
      </ModalProvider>
    </AuthProvider>
  )
}
