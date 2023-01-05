import React from 'react'

import AuthForm from '../../components/Authform'
import { ContainerForm } from '../../components/Authform/style'
import MensagePublic from '../../components/MensagePublic/index'
export default function SignUp() {
  return (
    <>
      <ContainerForm>
        <MensagePublic />
        <AuthForm signUp/>
      </ContainerForm>
    </>
  )
}
