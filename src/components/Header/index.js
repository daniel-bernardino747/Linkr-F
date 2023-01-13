import React from 'react'
import { useState } from 'react'
import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons'
import { Link, useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/auth.context'
import { authHelper } from '../../helpers/api/auth.helpers'
import SearchBar from '../SearchBar'
import { ContHeader, Menu, Opitions } from './style'

export default function Header() {
  const navigate = useNavigate()
  const {
    auth: { states },
  } = useAuthContext()

  const [statusMenu, setStatusMenu] = useState(true)

  const toggleMenu = () => {
    setStatusMenu(!statusMenu)
  }

  const logOut = () => {
    authHelper.logout().then((sucess) => {
      if (sucess) navigate('/oauth/login')
    })
  }

  return (
    <ContHeader>
      <Link to="/">
        <h1>Linkr</h1>
      </Link>
      <SearchBar />
      <Menu>
        {statusMenu ? (
          <IconUp toggle={toggleMenu} />
        ) : (
          <IconDown toggle={toggleMenu} />
        )}
        <img src={states.user.image} onClick={toggleMenu} />
      </Menu>
      {!statusMenu && <Opitions onClick={logOut}>Logout</Opitions>}
    </ContHeader>
  )
}

const IconUp = ({ toggle }) => (
  <ChevronUpOutline
    color={'#00000'}
    title={'Open'}
    height="30px"
    width="35px"
    onClick={toggle}
  />
)

const IconDown = ({ toggle }) => (
  <ChevronDownOutline
    color={'#00000'}
    title={'Close'}
    height="30px"
    width="35px"
    onClick={toggle}
  />
)
