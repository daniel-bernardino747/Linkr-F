import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { ReactTagify } from 'react-tagify'

import * as S from './style'

export default function TextPost({ text }) {
  const [navigation, setNavigation] = useState(undefined)
  const viewHashtag = async (name) => {
    name = name.replace(/[.,;?!#@$%&*()]/gi, '')
    setNavigation(`/hashtag/${name}`)
  }
  return (
    <S.Container>
      {navigation && <Navigate to={navigation} />}

      <ReactTagify colors="rgba(250, 250, 250, 1)" tagClicked={viewHashtag}>
        {text}
      </ReactTagify>
    </S.Container>
  )
}
