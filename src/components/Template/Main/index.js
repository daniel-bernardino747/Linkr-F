import React, { useState } from 'react'

import { postHelpers } from '../../../helpers/api/posts.helpers'
import * as S from './style'

export default function Main({ title, follow, user, children }) {
  const [checked, setChecked] = useState(follow)
  const [loader, setLoader] = useState(false)

  function Follow() {
    setLoader(true)
    postHelpers.follow({ id: title.id }).then((success) => {
      setLoader(false)
      if (success) {
        setChecked(success)
        return
      }
      return alert('Não foi possivel executar a ação')
    })
  }

  function Unfollow() {
    setLoader(true)
    postHelpers.unfollow({ id: checked.id }).then((success) => {
      setLoader(false)
      if (success) {
        setChecked(null)
        return
      }
      return alert('Não foi possivel executar a ação')
    })
  }

  return (
    <S.Container>
      <S.ContainerTop>
        <S.UserInfo>
          {typeof title === 'string' ? (
            <S.Title># {title}</S.Title>
          ) : (
            <>
              {title.image && (
                <S.ImageUser src={title.image} alt={title.image} />
              )}
              <S.Title>{title.user}</S.Title>
            </>
          )}
        </S.UserInfo>
        {user &&
          (checked ? (
            <S.Unfollow disabled={loader} onClick={Unfollow}>
              Unfollow
            </S.Unfollow>
          ) : (
            <S.Follow disabled={loader} onClick={Follow}>
              Follow
            </S.Follow>
          ))}
      </S.ContainerTop>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
