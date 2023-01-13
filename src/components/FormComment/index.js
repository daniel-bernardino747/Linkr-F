import React from 'react'
import { useForm } from 'react-hook-form'
export default function FormComment() {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm()

  const CommentSubmit = (data) => {
    console.log('Hello', data)
  }

  return (
    <form onSubmit={handleSubmit(CommentSubmit)}>
      <input
        placeholder="escreve aqui"
        {...register('comment', {
          required: true,
          maxLength: 300,
        })}
      />
      <button>Enviar</button>
    </form>
  )
}
