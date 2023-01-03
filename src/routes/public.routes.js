import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PublicPage from '../components/PublicPage'
import Home from '../pages/Home'

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />}>
        <Route index element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
    </Routes>
  )
}
