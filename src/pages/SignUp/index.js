import React from 'react'

import MensagePublic from '../../components/MensagePublic/index'
import AuthForm from '../../components/Authform'
import { ContainerForm } from '../../components/Authform/style'
export default function SignUp() {
  return(
    <>
      <ContainerForm>
        <MensagePublic />
        <AuthForm signUp/>
      </ContainerForm>
    </>
  )
}
