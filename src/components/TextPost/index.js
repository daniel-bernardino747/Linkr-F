import React from 'react'
import { redirect } from 'react-router-dom'
import { ReactTagify } from 'react-tagify'

// import { postHelpers } from '../../helpers/api/posts.helpers'
import * as S from './style'

export default function TextPost({ children, text }) {
  //console.log(text)
  const viewHashtag = async (name) => {
    const statusOK = 200
    name = name.replace(/[.,;?!#@$%&*()]/gi, '')
    // const result = await postHelpers.viewTag({ name })
    let result = { statusData: 200 }
    alert(name)

    if (result.statusData === statusOK) {
      redirect('/hashtag/' + name)
    }
  }
  return (
    <S.Container>
      <ReactTagify colors="rgba(250, 250, 250, 1)" tagClicked={viewHashtag}>
        {text}
        {/*         “You might not think that #programmers! are #artists, but programming is
        an extremely creative #profession. Its logic-based creativity”
        @JohnRomero */}
      </ReactTagify>
      <div>{children}</div>
    </S.Container>
  )
}
