import React, { useContext } from 'react'

import AuthContext from '../contexts/auth.context'
import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

export default function Routes() {
  const { signed } = useContext(AuthContext)
  return signed ? <PublicRoutes /> : <PrivateRoutes />
}
