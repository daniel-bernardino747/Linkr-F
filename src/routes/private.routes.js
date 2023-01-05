import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivatePages from '../components/Private'
import Home from '../pages/Home'

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivatePages />}>
        <Route index element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
    </Routes>
  )
}
