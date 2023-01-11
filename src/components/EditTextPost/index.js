import React, { useContext } from 'react'

import AuthContext from '../../contexts/auth.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
import * as s from './style'

export default function EditTextPost({
  text,
  textPost,
  setTextPost,
  setEditOpen,
  id,
  loading,
  setLoading,
}) {
  const { user } = useContext(AuthContext)
  const editSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      console.log(textPost)
      const response = await postHelpers.edit(id, textPost, user)
      setLoading(false)
      if (response.statusData === 401) {
        return alert('Não autorizado')
      }
      window.location.reload()
      setEditOpen(false)
    } catch (e) {
      setLoading(false)
      setTextPost(text)
      alert('Erro ao editar')
    }

    setEditOpen(false)
  }

  return (
    <s.ContEditTextPost onSubmit={editSubmit}>
      <input
        type="text"
        required
        value={textPost}
        onChange={(e) => setTextPost(e.target.value)}
        disabled={loading}
      />
    </s.ContEditTextPost>
  )
}
