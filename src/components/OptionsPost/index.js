import React from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'

import * as s from './style'

export function OptionPost({
  setModalId,
  setEditOpen,
  setIsOpen,
  id,
  //backdropClose = false,
  idModal = 'modal',
  setOptionOpen,
}) {
  const openModal = () => {
    setModalId(id)
    setIsOpen(true)
    setOptionOpen(false)
  }

  const openEdit = () => {
    setEditOpen(true)
    setOptionOpen(false)
  }

  const handleBackdropClick = (e) => {
    e.stopPropagation()
    if (e) e.preventDefault()

    if (e.target.idModal === idModal) return
    setOptionOpen(false)
  }

  return (
    <>
      <s.Overlay id={id} onClick={handleBackdropClick}></s.Overlay>
      <s.ContOptionPost>
        <s.Option onClick={openEdit}>
          <BsFillPencilFill />
          <span>Edit post</span>
        </s.Option>
        <s.Option onClick={openModal}>
          <BsFillTrashFill />
          <span>Delete post</span>
        </s.Option>
      </s.ContOptionPost>
    </>
  )
}
