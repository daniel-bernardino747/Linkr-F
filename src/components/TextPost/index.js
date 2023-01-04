import React from 'react'
import { redirect } from 'react-router-dom'

import ReactHashtag from '@mdnm/react-hashtag'

// import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'

export default function TextPost({ children }) {
  const viewHashtag = async (name) => {
    const statusOK = 200
    name = name.substring(1)
    // const result = await postHelpers.viewTag({ name })
    let result = { statusData: 200 }
    alert(name)

    if (result.statusData === statusOK) {
      redirect('/hashtag/' + name)
    }
  }
  return (
    <S.Container>
      <ReactHashtag onHashtagClick={viewHashtag}>{children}</ReactHashtag>
    </S.Container>
  )
}
