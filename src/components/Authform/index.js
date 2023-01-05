import React from 'react'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ContainerAuthForm, InputCamp, ButtonCamp } from './style'
import { signup, signin } from '../../services/api/post.services';

export default function AuthForm({ signUp }) {

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting, errors } = formState;

  let typeForm = false;
  if (signUp) typeForm = true;

  const notSubmitting = typeForm ? 'Sign Up' : 'Log In';

  function onSubmit(data) {
    return new Promise((resolve) => {

      if (typeForm) {
        signup(data).then((sucess) => {
          if (sucess) {
            navigate('/');
          }
          resolve();
        }).catch((error) =>{
          console.log(error);
        });
      } else {
        signin(data).then((sucess) => {
          if (sucess) {
            console.log(sucess);
            navigate('/');
          }
          resolve();
        }).catch((error) =>{
          console.log(error);
        });
      }
    })
  }

  return (

    <ContainerAuthForm onSubmit={(handleSubmit(onSubmit))}>

      <InputCamp
        type="text"
        placeholder='e-mail'
        {...register("email", { required: true, validate: (value) => isEmail(value) })}
      />
      {errors?.email?.type === 'required' && (<p>Email is required.</p>)}
      {errors?.email?.type === 'validate' && (<p>Email is invalid.</p>)}


      <InputCamp
        type="text"
        placeholder='password'
        {...register("password", { required: true, minLength: 3 })}
      />
      {errors?.password?.type === 'required' && (<p>Password is required.</p>)}
      {errors?.password?.type === 'minLength' && (<p>Password must have at least 3 characters.</p>)}


      {typeForm && (
        <div>
          <InputCamp
            type="text"
            placeholder='username'
            {...register("name", { required: true })}
          />
          {errors?.username?.type === 'required' && (<p>Name is required.</p>)}
        </div>
      )}


      {typeForm && (
        <div>
          <InputCamp
            type="text"
            placeholder='picture url'
            {...register("image", { required: true })}
          />
          {errors?.pictureUrl?.type === 'required' && (<p>Picture url is required.</p>)}
        </div>
      )}


      <ButtonCamp
        disabled={isSubmitting}
        value={isSubmitting ? 'Carregando...' : notSubmitting}
      />



      {!typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/signup">
          <p>First time? Create an account!</p>
        </Link>
      )}

      {typeForm && (
        <Link style={{ textDecoration: 'none' }} to="/">
          <p>Switch back to log in</p>
        </Link>
      )}

    </ContainerAuthForm>

  )
}
