import React from 'react'

import AuthForm from '../../components/Authform'
import { ContainerForm } from '../../components/Authform/style'
import MensagePublic from '../../components/MensagePublic'

export default function Login() {
  return (
    <ContainerForm>
      <MensagePublic />
      <AuthForm />
    </ContainerForm>
  )
}
