import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import AuthContext from '../../contexts/auth.context'

export default function ProtectedLayout() {
  const { signed } = useContext(AuthContext)
  const bla = 1

  if (1 !== bla) {
    console.log(signed)
    return <Navigate to="/oauth/login" />
  }
  return <Outlet />
}
