import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { isEmail } from 'validator'

import { authHelper } from '../../helpers/api/auth.helpers'
import * as S from './style'

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
        authHelper.register({ data }).then((sucess) => {
          if (sucess) navigate('/oauth/login')
          resolve()
        })
      } else {
        authHelper.login({ data }).then((sucess) => {
          if (sucess) navigate('/')
          resolve()
        })
      }
    })
  }

  return (
    <S.ContainerAuthForm onSubmit={handleSubmit(onSubmit)}>
      <S.InputCamp
        type="text"
        placeholder="e-mail"
        {...register('email', {
          required: true,
          validate: (value) => isEmail(value),
        })}
      />
      {errors?.email?.type === 'required' && (
        <S.TextError>Email is required.</S.TextError>
      )}
      {errors?.email?.type === 'validate' && (
        <S.TextError>Email is invalid.</S.TextError>
      )}

      <S.InputCamp
        type="text"
        placeholder="password"
        {...register('password', { required: true, minLength: 3 })}
      />
      {errors?.password?.type === 'required' && (
        <S.TextError>Password is required.</S.TextError>
      )}
      {errors?.password?.type === 'minLength' && (
        <S.TextError>Password must have at least 3 characters.</S.TextError>
      )}

      {typeForm && (
        <>
          <S.InputCamp
            type="text"
            placeholder="username"
            {...register('name', { required: true })}
          />
          {errors?.name?.type === 'required' && (
            <S.TextError>Name is required.</S.TextError>
          )}
        </>
      )}

      {typeForm && (
        <>
          <S.InputCamp
            type="text"
            placeholder="picture url"
            {...register('image', { required: true })}
          />
          {errors?.image?.type === 'required' && (
            <S.TextError>Picture url is required.</S.TextError>
          )}
        </>
      )}

      <S.ButtonCamp
        disabled={isSubmitting}
        value={isSubmitting ? 'Carregando...' : notSubmitting}
      />

      {!typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/oauth/register">
          <S.Text>First time? Create an account!</S.Text>
        </Link>
      )}

      {typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/oauth/login">
          <S.Text>Switch back to log in</S.Text>
        </Link>
      )}
    </S.ContainerAuthForm>
  )
}
