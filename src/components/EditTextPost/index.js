import * as s from './style'
import React, { useContext } from 'react'
import { postHelpers } from '../../helpers/api/posts.helpers'
import AuthContext from '../../contexts/auth.context'

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
      console.log('Aqui')
      const response = await postHelpers.edit(id, user)
      setLoading(false)
      if (response.statusData === 401) {
        return alert('Não autorizado')
      }
      setEditOpen(false)
    } catch (e) {
      console.log(e)
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
