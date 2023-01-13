import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import AuthContext from '../../contexts/auth.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
//import { postHelpers } from '../../helpers/api/posts.helpers'
//import { postPublish } from '../../services/api/post.services'
import * as s from './style'

export default function EditTextPost({
  newText,
  setNewText,
  setEditOpen,
  id,
  loading,
  setLoading,
}) {
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const watchInput = watch('edit')
  if (watchInput) {
    setNewText(watchInput)
  }

  const editSubmit = async (data) => {
    setLoading(true)

    const { edit } = data
    try {
      await postHelpers.edit(id, edit, user)
      setLoading(false)
      setEditOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <s.ContEditTextPost onSubmit={handleSubmit(editSubmit)}>
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
    </s.ContEditTextPost>
  )
}
