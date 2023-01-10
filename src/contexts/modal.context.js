import React, { createContext, useState } from 'react'

const ModalContext = createContext({})

export function ModalProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalId, setModalId] = useState(0)

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, setIsOpen, modalId, setModalId }}
    >
      {children}
    </ModalContext.Provider>
  )
}
export default ModalContext
