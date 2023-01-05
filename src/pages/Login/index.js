import React from 'react'

import MensagePublic from '../../components/MensagePublic/index'
import AuthForm from '../../components/Authform'
import { ContainerForm } from '../../components/Authform/style'

export default function Login() {
  return (
    <>
      <ContainerForm>
        <MensagePublic />
        <AuthForm /> 
      </ContainerForm>
    </>
  )
}
