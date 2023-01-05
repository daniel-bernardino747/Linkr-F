import React from 'react'

import { useState } from 'react'

import * as s from './style'

export default function ModalComponent() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <s.Overlay isOpen={modalIsOpen} onClick={closeModal}>
        <s.Container>
          <s.Title>Are you sure you want to delete this post?</s.Title>
          <div>
            <s.ButtonExit onClick={closeModal}>No, go back</s.ButtonExit>
            <s.ButtonDelete>Yes, delete it</s.ButtonDelete>
          </div>
          <div></div>
        </s.Container>
      </s.Overlay>
    </>
  )
}
