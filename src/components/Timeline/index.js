import React from 'react'

import ModalComponent from '../Modal'
import Snippet from '../Snippet'
import * as S from './style'

export default function Timeline({ posts, active, users }) {
  const whoUserFollow = users.filter((user) => user.follow)
  return (
    <S.Timeline active={active}>
      {posts.length === 0 && (
        <>
          {whoUserFollow.length !== 0 ? (
            <S.Title>No posts found from your friends</S.Title>
          ) : (
            <S.Title>
              You don{"'"}t follow anyone yet. Search for new friends!
            </S.Title>
          )}
        </>
      )}
      <ul>
        {posts?.map((post, i) => (
          <Snippet key={post.id ** i * i} {...post} />
        ))}
      </ul>
      <ModalComponent />
    </S.Timeline>
  )
}
