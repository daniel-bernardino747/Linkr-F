import React from 'react'
import { useLoaderData } from 'react-router'

import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { hashtag } from '../../services/api/post.services'

export const loader = async ({ params }) => {
  const { hashtag: name } = params
  const config = {
    headers: {
      Authorization: 'Bearer ' + 'c03b32e1-fa8a-417d-a016-202e41aa9dc6',
    },
  }
  const {
    data: { posts, hashtags },
  } = await hashtag(name, config)

  return {
    posts,
    title: name,
    hashtags,
  }
}

export default function Hashtag() {
  const { title, posts, hashtags } = useLoaderData()
  console.log(posts)
  return (
    <Main title={title}>
      <div>
        {posts?.map((post) => (
          <Snippet key={post.id} {...post} />
        ))}
      </div>
      <Trending hashtagList={hashtags} />
    </Main>
  )
}
