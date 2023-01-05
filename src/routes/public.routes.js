import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PublicPage from '../components/Public'

import SignIn from '../pages/Login'
import SignUp from '../pages/SignUp/index'

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />}>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
