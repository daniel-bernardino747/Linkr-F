import React from 'react'

import { AuthProvider } from '../contexts/auth.context'
import { ModalProvider } from '../contexts/modal.context'
import { SearchProvider } from '../contexts/search.context'

export function ContextsProviders({ children }) {
  return (
    <AuthProvider>
      <ModalProvider>
        <SearchProvider>{children}</SearchProvider>
      </ModalProvider>
    </AuthProvider>
  )
}
