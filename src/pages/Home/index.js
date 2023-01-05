import React from 'react'

//import Header from '../../components/Header'
import PublishPost from '../../components/PublishPost'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'
import * as S from './style'

export default function Home() {
  const bla = [{ id: 1, name: 'l' }]
  //const data = JSON.parse(localStorage.getItem('user'))
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Title>timeline</S.Title>
      <S.Content>
        <div>
          <PublishPost />
          <Timeline />
        </div>
        <Trending hashtagList={bla} />
      </S.Content>
    </S.Container>
  )
}
