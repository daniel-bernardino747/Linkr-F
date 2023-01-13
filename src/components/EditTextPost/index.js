import React from 'react'
import { useForm } from 'react-hook-form'

import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'

export default function EditTextPost({
  newText,
  setNewText,
  setEditOpen,
  id,
  loading,
  setLoading,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const watchInput = watch('edit')

  if (watchInput) setNewText(watchInput)

  const editSubmit = async ({ edit }) => {
    setLoading(true)
    postHelpers.edit({ id, data: edit }).then((sucess) => {
      if (sucess) {
        setLoading(false)
        setEditOpen(false)
      }
    })
  }

  return (
    <S.ContEditTextPost onSubmit={handleSubmit(editSubmit)}>
      <input
        type="text"
        {...register('edit', {
          required: true,
          maxLength: 100,
        })}
        disabled={loading}
        value={newText}
      />
      {errors?.edit?.type === 'required' && <span>*Required field !*</span>}
      {errors?.edit?.type === 'maxLength' && (
        <span>*Maximum size reached !*</span>
      )}
    </S.ContEditTextPost>
  )
}
