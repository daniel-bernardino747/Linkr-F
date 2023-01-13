import React from 'react'

import * as S from './style'

export default function Comments({ image, user, comment, id, idCreator }) {
  return (
    <S.Comment>
      <img src={image} alt="image comment" />
      <S.ContainerTextComment>
        <S.InfoComment>
          <S.UsernameComment>{user}</S.UsernameComment>
          <S.InfoUser>
            {id === idCreator ? '• author post' : '• following'}
          </S.InfoUser>
        </S.InfoComment>
        <S.TextComment>{comment}</S.TextComment>
      </S.ContainerTextComment>
    </S.Comment>
  )
}
