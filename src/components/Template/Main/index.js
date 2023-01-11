import React, { useState } from 'react'

//import Header from '../../components/Header'
import { followUser, unfollow } from '../../../services/api/post.services'
import * as S from './style'

export default function Main({ title, follow, user, children }) {
  const [checked, setChecked] = useState(follow)
  const [loader, setLoader] = useState(false)
  const token = localStorage.getItem('token')

  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }

  function Follow() {
    setLoader(true);
    followUser(title.id, config)
      .then((res) => { setChecked(res.data) })
      .catch(() => { alert("Não foi possivel executar a ação") })
    setLoader(false);
  }

  function Unfollow() {
    setLoader(true);
    unfollow(checked.id, config)
      .then(() => { setChecked(null) })
      .catch(() => { alert("Não foi possivel executar a ação") })
    setLoader(false);
  }

  return (
    <S.Container>
      <S.ContainerTop>
        <S.UserInfo>
          {title.image && (<S.ImageUser src={title.image} alt={title.image} />)}
          <S.Title>{title.user}</S.Title>
        </S.UserInfo>
        {
          user && (
            checked ?
              <S.Unfollow
                disabled={loader}
                onClick={Unfollow}>
                Unfollow
              </S.Unfollow>
              :
              <S.Follow
                disabled={loader}
                onClick={Follow}>
                Follow
              </S.Follow>
          )
        }
      </S.ContainerTop>
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}
