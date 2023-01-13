import React from 'react'
import { useState, useContext } from 'react'
import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons'
import { Link, useNavigate } from 'react-router-dom'

import AuthContext from '../../contexts/auth.context'
import { logout } from '../../services/api/post.services'
import SearchBar from '../SearchBar'
import { ContHeader, Menu, Opitions } from './style'

export default function Header() {
  const navigate = useNavigate()
  const userSerializada = localStorage.getItem('user')
  const userInfo = JSON.parse(userSerializada)
  const [status, setStatus] = useState(true)
  const { user } = useContext(AuthContext)

  function flipMenu() {
    const newStatus = !status
    setStatus(newStatus)
  }

  function logOut() {
    flipMenu()
    const config = {
      headers: {
        Authorization: 'Bearer ' + user,
      },
    }
    logout(config)
      .then(() => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        navigate('/oauth/login')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <ContHeader>
        <Link to="/">
          <h1>Linkr</h1>
        </Link>
        <SearchBar />
        <Menu>
          {status ? (
            <ChevronUpOutline
              color={'#00000'}
              title={'Open'}
              height="30px"
              width="35px"
              onClick={flipMenu}
            />
          ) : (
            <ChevronDownOutline
              color={'#00000'}
              title={'Close'}
              height="30px"
              width="35px"
              onClick={flipMenu}
            />
          )}

          <img src={userInfo.image} onClick={flipMenu} />
        </Menu>
        {!status && <Opitions onClick={logOut}>Logout</Opitions>}
      </ContHeader>
    </>
  )
}
