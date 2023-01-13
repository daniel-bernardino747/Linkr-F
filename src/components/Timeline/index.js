import React from 'react'
import { LineWave } from 'react-loader-spinner'

import ModalComponent from '../Modal'
import Snippet from '../Snippet'
import * as S from './style'

export default function Timeline({ posts, loading, active }) {
  return (
    <S.Timeline active={active}>
      {posts.length === 0 && !loading && (
        <S.Title>There are no posts yet</S.Title>
      )}
      {loading && <LineWave color="white" />}
      <ul>
        {posts?.map((post, i) => (
          <Snippet key={post.id ** i * i} {...post} />
        ))}
      </ul>
      <ModalComponent />
    </S.Timeline>
  )
}
