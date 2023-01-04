import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

export default function Trending({ hashtagList }) {
  return (
    <S.Container>
      <S.Title>Trendings</S.Title>
      <S.Line />
      {hashtagList.map((tag) => (
        <S.Tags key={tag.id}>
          <Link to={`/hashtag/${tag.name}`}>{tag.name}</Link>
        </S.Tags>
      ))}
    </S.Container>
  )
}
