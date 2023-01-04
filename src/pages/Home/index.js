import React from 'react'

import Like from '../../components/Like'
import TextPost from '../../components/TextPost'
import Trending from '../../components/Trending'

export default function Home() {
  const bla = [
    { id: 1, name: '1' },
    { id: 2, name: '1' },
    { id: 3, name: '1' },
  ]
  return (
    <>
      <h1>Home</h1>
      <Like />
      <TextPost>
        Oii, primeira #hashtag asdoasid asdoiasjdn asdoiasdml sadoiasjdm asodias
        dasoidsa #doiasijdsa doasidhj
      </TextPost>
      <Trending hashtagList={bla} />
    </>
  )
}
