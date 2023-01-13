import React from 'react'
import { HiOutlineArrowPath } from 'react-icons/hi2'

import { postHelpers } from '../../helpers/api/posts.helpers'
import * as s from './style'

export default function Share({ count, id }) {
  if (count >= 1) {
    count--
  }

  function repostCheck() {
    postHelpers.sendRepost({ id })
  }

  return (
    <s.ContComments>
      <s.IconComment onClick={repostCheck}>
        <HiOutlineArrowPath />
      </s.IconComment>
      <s.Text> {count} re-post </s.Text>
    </s.ContComments>
  )
}
