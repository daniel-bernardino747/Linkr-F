import React from 'react'

//import Header from '../../components/Header'
import PublishPost from '../../components/PublishPost'
import Main from '../../components/Template/Main'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'
import Header from '../../components/Header'
import { ContainerHome } from './style'

export default function Home() {
  const bla = [{ id: 1, name: 'l' }]
  //const data = JSON.parse(localStorage.getItem('user'))
  return (
    <ContainerHome>
      <Header/>
      <Main title={'Timeline'}>
        <div>
          <PublishPost />
          <Timeline />
        </div>
        <Trending hashtagList={bla} />
      </Main>
    </ContainerHome>
  )
}
