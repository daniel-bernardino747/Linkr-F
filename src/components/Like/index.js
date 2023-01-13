import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'
import { postHelpers } from '../../helpers/api/posts.helpers'
import { functionHelper } from '../../helpers/functions'
import * as S from './style'

export default function Like({ id, likes, liked }) {
  const [checked, setChecked] = useState(liked)
  const [likesLength, setLikesLength] = useState(likes.length)

  const whoLiked = functionHelper.tooltipWhoLiked(liked, likes)

  const handleLike = async () => {
    if (checked) {
      setChecked(false)
      postHelpers.dislike({ id }).then((success) => {
        if (success) {
          setChecked(false)
          setLikesLength(likesLength - 1)
        }
      })
    } else {
      setChecked(true)
      postHelpers.like({ id }).then((success) => {
        if (success) {
          setChecked(true)
          setLikesLength(likesLength + 1)
        }
      })
    }
  }

  return (
    <S.Container>
      <S.IconHeart checked={checked} onClick={handleLike}>
        {checked ? <BsHeartFill /> : <BsHeart />}
      </S.IconHeart>

      <S.Text id={id}>
        {likesLength} {likesLength === 1 ? 'like' : 'likes'}
      </S.Text>
      <ReactTooltip anchorId={id} place="top" content={whoLiked.tooltip} />
    </S.Container>
  )
}
