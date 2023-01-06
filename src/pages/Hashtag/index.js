import React from 'react'
import { useParams } from 'react-router'

import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { postHelpers } from '../../helpers/api/posts.helpers'

export const loader = async () => {
  const { hashtag: name } = useParams()
  const posts = await postHelpers.viewTag({ name })
  console.log(posts)

  return {
    posts,
    hashtag: name,
  }
}

export default function Hashtag() {
  // const { hashtag, posts } = useLoaderData()
  const bla = [{ id: 1, name: 'l' }]
  const { hashtag } = useParams()
  const posts = []
  return (
    <Main title={hashtag}>
      <div>
        {posts?.map((post, index) => {
          const {
            image,
            name,
            text,
            urlDescription,
            urlLink,
            urlImage,
            urlTitle,
          } = post
          return (
            <Snippet
              key={index}
              image={image}
              name={name}
              text={text}
              urlTitle={urlTitle}
              urlDescription={urlDescription}
              urlLink={urlLink}
              urlImage={urlImage}
            />
          )
        })}
      </div>
      <Trending hashtagList={bla} />
    </Main>
  )
}
