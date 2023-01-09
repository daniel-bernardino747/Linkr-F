import React from 'react'
import { useLoaderData } from 'react-router'

import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { user } from '../../services/api/post.services'

export const loader = async ({ params }) => {
  const { id } = params
  const config = {
    headers: {
      Authorization: 'Bearer ' + 'c03b32e1-fa8a-417d-a016-202e41aa9dc6',
    },
  }
  const {
    data: { posts, hashtags, user: infosUser },
  } = await user(id, config)

  console.log(infosUser)

  return {
    posts,
    title: `${infosUser.name}'s posts`,
    hashtags,
  }
}

export default function User() {
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
