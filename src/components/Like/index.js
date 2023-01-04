import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'

export default function Like({ id, likes = 0, names }) {
  // const { token } = useContext(AuthContext)
  const [checked, setChecked] = useState(false)

  let token = 'bla'

  const handleLike = () => {
    const result = postHelpers.like({ id, token })
    setChecked(!checked)
    return result
  }

  return (
    <S.Container>
      <S.IconHeart checked={checked} onClick={handleLike}>
        {checked ? <BsHeartFill /> : <BsHeart />}
      </S.IconHeart>

      <S.ContainerText>
        <S.Text>{likes} likes</S.Text>
        <S.Text>{names}</S.Text>
      </S.ContainerText>
    </S.Container>
  )
}
