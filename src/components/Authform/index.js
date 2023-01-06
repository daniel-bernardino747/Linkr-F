import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { isEmail } from 'validator'

import { signup, signin } from '../../services/api/post.services'
import {
  ContainerAuthForm,
  InputCamp,
  ButtonCamp,
  TextError,
  Text,
} from './style'

export default function AuthForm({ signUp }) {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm()
  const { isSubmitting, errors } = formState

  let typeForm = false
  if (signUp) typeForm = true

  const notSubmitting = typeForm ? 'Sign Up' : 'Log In'

  function onSubmit(data) {
    return new Promise((resolve) => {
      if (typeForm) {
        signup(data)
          .then((sucess) => {
            if (sucess) {
              navigate('/oauth/login')
            }
            resolve()
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        signin(data)
          .then((sucess) => {
            if (sucess) {
              const user = JSON.stringify(sucess.data.user)
              localStorage.setItem('token', sucess.data.token)
              localStorage.setItem('user', user)

              navigate('/')
            }
            resolve()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  return (
    <ContainerAuthForm onSubmit={handleSubmit(onSubmit)}>
      <InputCamp
        type="text"
        placeholder="e-mail"
        {...register('email', {
          required: true,
          validate: (value) => isEmail(value),
        })}
      />
      {errors?.email?.type === 'required' && (
        <TextError>Email is required.</TextError>
      )}
      {errors?.email?.type === 'validate' && (
        <TextError>Email is invalid.</TextError>
      )}

      <InputCamp
        type="text"
        placeholder="password"
        {...register('password', { required: true, minLength: 3 })}
      />
      {errors?.password?.type === 'required' && (
        <TextError>Password is required.</TextError>
      )}
      {errors?.password?.type === 'minLength' && (
        <TextError>Password must have at least 3 characters.</TextError>
      )}

      {typeForm && (
        <>
          <InputCamp
            type="text"
            placeholder="username"
            {...register('name', { required: true })}
          />
          {errors?.name?.type === 'required' && (
            <TextError>Name is required.</TextError>
          )}
        </>
      )}

      {typeForm && (
        <>
          <InputCamp
            type="text"
            placeholder="picture url"
            {...register('image', { required: true })}
          />
          {errors?.image?.type === 'required' && (
            <TextError>Picture url is required.</TextError>
          )}
        </>
      )}

      <ButtonCamp
        disabled={isSubmitting}
        value={isSubmitting ? 'Carregando...' : notSubmitting}
      />

      {!typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/oauth/register">
          <Text>First time? Create an account!</Text>
        </Link>
      )}

      {typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/oauth/login">
          <Text>Switch back to log in</Text>
        </Link>
      )}
    </ContainerAuthForm>
  )
}
