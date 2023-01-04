import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivatePages from '../components/Private'
import SignIn from '../pages/Login'
import SignUp from '../pages/SignUp'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivatePages />}>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
