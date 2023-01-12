import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

export default function Trending({ hashtagList }) {
  return (
    <S.Container>
      <S.Title>Trendings</S.Title>
      <S.Line />
      {hashtagList.map((tag, i) => (
        <S.Tags key={i}>
          <Link to={`/hashtag/${tag.name}`}>{tag.name}</Link>
        </S.Tags>
      ))}
    </S.Container>
  )
}
