import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

import { functionHelper } from '../../helpers/functions'
import { dislikePost, likePost } from '../../services/api/post.services'
import * as S from './style'

export default function Like({ id, likes, liked }) {
  const [checked, setChecked] = useState(liked)
  const [likesLength, setLikesLength] = useState(likes.length)

  const whoLiked = functionHelper.tooltipWhoLiked(liked, likes)

  const handleLike = async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + '219b35ff-16e0-49df-9438-2219ce81ea8e',
      },
    }
    if (checked) {
      setChecked(false)
      try {
        await dislikePost(id, config)
        setChecked(false)
        setLikesLength(likesLength - 1)
      } catch (error) {
        setChecked(true)
        console.log(error)
      }
    } else {
      setChecked(true)
      try {
        await likePost(id, config)
        setChecked(true)
        setLikesLength(likesLength + 1)
        console.log('curti')
      } catch (error) {
        setChecked(false)
        console.log(error)
      }
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
