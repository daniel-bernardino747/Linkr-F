import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [token, setToken] = useState(localStorage.getItem('token'))

  const auth = {
    states: {
      user: JSON.parse(user),
      token,
    },
    set: {
      user: setUser,
      token: setToken,
    },
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
export default AuthContext
