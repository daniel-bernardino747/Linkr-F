import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext({})

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ status: false, id: 0 })

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}
export const useModalContext = () => {
  return useContext(ModalContext)
}
export default ModalContext
