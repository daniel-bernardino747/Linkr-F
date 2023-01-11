import React from 'react'
import { useLoaderData } from 'react-router'

import Header from '../../components/Header'
import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { user } from '../../services/api/post.services'
import { ContainerUser } from './style'

export const loader = async ({ params }) => {
  const { id } = params
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  const {
    data: { posts, hashtags, user: infosUser, follow },
  } = await user(id, config)

  console.log(infosUser)

  return {
    posts,
    title: {
      user: `${infosUser.name}'s posts`,
      image: infosUser.image,
      id: infosUser.id
    },
    hashtags,
    follow
  }
}

export default function User() {
  const { title, posts, hashtags, follow } = useLoaderData()
  console.log(follow)
  return (
    <ContainerUser>
      <Header />
      <Main title={title} follow={follow} user={true}>
        <div>
          {posts?.map((post) => (
            <Snippet key={post.id} {...post} username={post.name} />
          ))}
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </ContainerUser>
  )
}
