import React from 'react'
import { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import { useModalContext } from '../../contexts/modal.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
import * as s from './style'

export default function ModalComponent() {
  const [loading, setLoading] = useState(false)
  const { modal, setModal } = useModalContext()

  const closeModal = () => {
    setModal({ ...modal, status: false })
  }

  const confirmDelete = async (id) => {
    setLoading(true)
    postHelpers.del({ id }).then((success) => {
      if (success) {
        closeModal()
        setLoading(false)
        window.location.reload()
        return
      }
      return alert('Falha ao deletar')
    })
  }

  return (
    <s.Overlay isOpen={modal.status}>
      <s.Container>
        {loading ? (
          <IconLoading />
        ) : (
          <>
            <s.Title>Are you sure you want to delete this post?</s.Title>
            <div>
              <s.ButtonExit onClick={closeModal}>No, go back</s.ButtonExit>
              <s.ButtonDelete onClick={() => confirmDelete(modal.id)}>
                Yes, delete it
              </s.ButtonDelete>
            </div>
          </>
        )}
      </s.Container>
    </s.Overlay>
  )
}

const IconLoading = () => (
  <RotatingLines
    strokeColor="grey"
    strokeWidth="3"
    animationDuration="0.75"
    width="60"
    visible={true}
  />
)
