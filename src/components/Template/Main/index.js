import React from 'react'

//import Header from '../../components/Header'
import * as S from './style'

export default function Main({ title, children }) {
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
