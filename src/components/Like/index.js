import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

import * as S from './style'

export default function Like() {
  const [checked, setChecked] = useState(false)

  return (
    <S.Button checked={checked} onClick={() => setChecked(!checked)}>
      {checked ? <BsHeartFill /> : <BsHeart />}
    </S.Button>
  )
}
