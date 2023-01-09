import React from 'react'
import { useState, useContext } from 'react'
import { RotatingLines } from 'react-loader-spinner'

import { postHelpers } from '../../helpers/api/posts.helpers'
import AuthContext from '../../contexts/auth.context'
import * as s from './style'
import ModalContext from '../../contexts/modal.context'

export default function ModalComponent() {
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)
  const { setIsOpen, modalIsOpen, modalId } = useContext(ModalContext)
  console.log(modalId)

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmDelete = async (id) => {
    // return new Promise((resolve) => {
    //   postHelpers
    //     .del(id, user)
    //     .then((sucess) => {
    //       setLoading(true)
    //       console.log(sucess)
    //       resolve()
    //       setLoading(false)
    //       closeModal()
    //     })
    //     .catch((error) => {
    //       alert('Error', error)
    //     })
    // })
    try {
      console.log(id)
      setLoading(true)
      const response = await postHelpers.del(id, user)
      console.log(response)
      setLoading(false)
      if (response.statusData === 401) {
        return alert('Não autorizado')
      }
    } catch (e) {
      console.log(e)
      alert('Falha ao deletar')
    }
  }

  return (
    <>
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
