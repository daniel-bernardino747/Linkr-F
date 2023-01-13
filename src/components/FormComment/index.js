import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '../../contexts/auth.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
//import { user } from '../../services/api/post.services'
export default function FormComment({ idPost }) {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm()
  const { user } = useContext(AuthContext)
  const CommentSubmit = async (data) => {
    const { comment } = data
    console.log(comment)
    try {
      await postHelpers.comment(id, comment, user)
    } catch (error) {
      console.log(error)
    }
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
