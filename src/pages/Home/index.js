import React from 'react'

//import Header from '../../components/Header'
import PublishPost from '../../components/PublishPost'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'

export default function Home() {
  const bla = [{ id: 1, name: 'l' }]
  //const data = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      {/* <Header /> */}
      <h1>timeline</h1>
      <PublishPost />
      <Timeline />
      <Trending hashtagList={bla} />
    </>
  )
}

