import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '../../contexts/auth.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'
import { IoPaperPlaneOutline } from 'react-icons/io5'

//import { user } from '../../services/api/post.services'
export default function FormComment({ idPost, idCreator, dados }) {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm()
  const { id, name, image } = dados
  const { user } = useContext(AuthContext)
  const CommentSubmit = async (data) => {
    const { comment } = data

    const body = { comment, idCreator, id, name, image }

    try {
      await postHelpers.comment(idPost, body, user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.ContainerFormComment onSubmit={handleSubmit(CommentSubmit)}>
      <img src={image} alt="image profile" />
      <input
        placeholder="escreve aqui"
        {...register('comment', {
          required: true,
          maxLength: 300,
        })}
      />

      <button>
        <IoPaperPlaneOutline />
      </button>
    </S.ContainerFormComment>
  )
}
