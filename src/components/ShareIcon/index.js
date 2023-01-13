import React from 'react'
import { HiOutlineArrowPath } from "react-icons/hi2";

import { repost } from '../../services/api/post.services';
import * as s from './style'

export default function Share({ count, id }) {
  if (count >= 1) {
    count--
  }
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }

  function repostCheck() {
    repost(id, config)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
