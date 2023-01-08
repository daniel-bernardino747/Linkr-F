import React from 'react'
import { redirect } from 'react-router-dom'
import { ReactTagify } from 'react-tagify'

import * as S from './style'

export default function TextPost({ text }) {
  const viewHashtag = async (name) => {
    name = name.replace(/[.,;?!#@$%&*()]/gi, '')
    redirect('/hashtag/' + name)
  }
  return (
    <S.Container>
      <ReactTagify colors="rgba(250, 250, 250, 1)" tagClicked={viewHashtag}>
        {text}
      </ReactTagify>
    </S.Container>
  )
}
