import React from 'react'
import { LineWave } from 'react-loader-spinner'

import ModalComponent from '../Modal'
import Snippet from '../Snippet'
import { Title } from './style'

export default function Timeline({ posts, loading }) {
  return (
    <>
      {posts.length === 0 && !loading && <Title>There are no posts yet</Title>}
      {loading && <LineWave color="white" />}
      {posts?.map((post, i) => (
        <Snippet key={post.id ** i * i} {...post} />
      ))}
      <ModalComponent />
    </>
  )
}
