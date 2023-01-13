import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuthContext } from '../../contexts/auth.context'

export default function ProtectedLayout() {
  const { signed } = useAuthContext()

  if (!signed) {
    return <Navigate to="/oauth/login" />
  }
  return <Outlet />
}
