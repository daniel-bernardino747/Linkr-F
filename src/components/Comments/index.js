import React from 'react'
import * as S from './style'
export default function Comments({
  image,
  username,
  comment,
  idUser,
  idCreator,
}) {
  return (
    <>
      <S.Comment>
        <img src={image} alt="image comment" />
        <S.ContainerTextComment>
          <S.InfoComment>
            <S.UsernameComment>{username}</S.UsernameComment>
            <S.InfoUser>
              {idUser === idCreator ? '• author post' : '• following'}
            </S.InfoUser>
          </S.InfoComment>
          <S.TextComment>{comment}</S.TextComment>
        </S.ContainerTextComment>
      </S.Comment>
    </>
  )
}
