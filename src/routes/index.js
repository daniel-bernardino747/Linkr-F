import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Hashtag from '../pages/Hashtag'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProtectedLayout from '../pages/ProtectedLayout'
import SignUp from '../pages/SignUp'
import Root from './root.routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/oauth/login" element={<Login />} />
      <Route path="/oauth/register" element={<SignUp />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path="/user" element={<Home />} />
        <Route path="/hashtag/:hashtag" element={<Hashtag />} />
      </Route>
    </Route>
  )
)
export default router
