import React from 'react'
import { useForm } from 'react-hook-form'
import { IoPaperPlaneOutline } from 'react-icons/io5'

import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'

export default function FormComment({
  idPost,
  idCreator,
  dados,
  setCommentsPost,
}) {
  const { register, handleSubmit } = useForm()
  const { id, name, image } = dados

  const CommentSubmit = async ({ comment }) => {
    const data = { comment, idCreator, id, name, image }
    const newArray = [{ id, image, user: name, comment }]

    postHelpers.comment({ id: idPost, data }).then((success) => {
      if (success) setCommentsPost((comment) => [...comment, ...newArray])
    })
  }

  return (
    <S.ContainerFormComment onSubmit={handleSubmit(CommentSubmit)}>
      <img src={image} alt="image profile" />
      <input
        placeholder="write a comment..."
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
