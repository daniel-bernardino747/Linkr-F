import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Hashtag, { loader as loaderHashtag } from '../pages/Hashtag'
import Home, { loader as loaderHome } from '../pages/Home'
import Login from '../pages/Login'
import ProtectedLayout from '../pages/ProtectedLayout'
import SignUp from '../pages/SignUp'
import User, { loader as loaderUser } from '../pages/User'
import Root from './root.routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/oauth/login" element={<Login />} />
      <Route path="/oauth/register" element={<SignUp />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Home />} loader={loaderHome} />
        <Route path="/users/:id" element={<User />} loader={loaderUser} />
        <Route
          path="/hashtag/:hashtag"
          element={<Hashtag />}
          loader={loaderHashtag}
        />
      </Route>
    </Route>
  )
)
export default router
