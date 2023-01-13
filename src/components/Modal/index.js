import React from 'react'
import { useState, useContext } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import AuthContext from '../../contexts/auth.context'
import ModalContext from '../../contexts/modal.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
import * as s from './style'

export default function ModalComponent() {
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const { setIsOpen, modalIsOpen, modalId } = useContext(ModalContext)

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmDelete = async (id) => {
    try {
      setLoading(true)
      const response = await postHelpers.del(id, user)
      setLoading(false)
      if (response.statusData === 401) {
        return alert('Não autorizado')
      }
      closeModal()
      window.location.reload()
    } catch (e) {
      console.log(e)
      alert('Falha ao deletar')
    }
  }

  return (
    <>
      HiOutlineArrowPath
      <s.Overlay isOpen={modalIsOpen}>
        <s.Container>
          {loading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="3"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          ) : (
            <>
              <s.Title>Are you sure you want to delete this post?</s.Title>
              <div>
                <s.ButtonExit onClick={closeModal}>No, go back</s.ButtonExit>
                <s.ButtonDelete onClick={() => confirmDelete(modalId)}>
                  Yes, delete it
                </s.ButtonDelete>
              </div>
            </>
          )}
        </s.Container>
      </s.Overlay>
    </>
  )
}
