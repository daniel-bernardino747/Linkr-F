import React from 'react'
import { BsChatDots } from 'react-icons/bs'
import * as s from './style'

export default function Comments({
  setCommentOpen,
  commentOpen,
  countComments,
}) {
  return (
    <s.ContComments>
      <s.IconComment onClick={() => setCommentOpen(!commentOpen)}>
        <BsChatDots />
      </s.IconComment>
      <s.Text>{countComments} comments</s.Text>
    </s.ContComments>
  )
}
