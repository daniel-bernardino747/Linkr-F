import React from 'react'
import { useLoaderData } from 'react-router'

import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { hashtag } from '../../services/api/post.services'

export const loader = async ({ params }) => {
  const { hashtag: name } = params
  const {
    data: { posts, hashtags },
  } = await hashtag(name)

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
          <Snippet
            key={post.id}
            image={post.image}
            name={post.name}
            text={post.text}
            urlTitle={post.urlTitle}
            urlDescription={post.urlDescription}
            urlLink={post.urlLink}
            urlImage={post.urlImage}
          />
        ))}
      </div>
      <Trending hashtagList={hashtags} />
    </Main>
  )
}
