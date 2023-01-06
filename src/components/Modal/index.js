import React from 'react'

import { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { deletePost } from '../../services/api/post.services'

import * as s from './style'

export default function ModalComponent() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [request, setRequest] = useState(true)

  const id = 1

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmDelete = (id) => {
    deletePost(id)
    setRequest(false)
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <s.Overlay isOpen={modalIsOpen}>
        <s.Container>
          {request ? (
            <>
              <s.Title>Are you sure you want to delete this post?</s.Title>
              <div>
                <s.ButtonExit onClick={closeModal}>No, go back</s.ButtonExit>
                <s.ButtonDelete onClick={() => confirmDelete(id)}>
                  Yes, delete it
                </s.ButtonDelete>
              </div>
            </>
          ) : (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="3"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          )}
        </s.Container>
      </s.Overlay>
    </>
  )
}
