import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router'

import Header from '../../components/Header'
import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
import { user } from '../../services/api/post.services'
import * as S from './style'

export const loader = async ({ params }) => {
  const { id } = params
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  const { data } = await user(id, config)
  console.log(data.users)

  return {
    ...data,
    title: {
      user: `${data.user.name}'s posts`,
      image: data.user.image,
      id: data.user.id,
    },
  }
}

export default function User() {
  const { title, posts, hashtags, users, follow } = useLoaderData()
  const { searchResults, setSearchResults } = useSearchContext()
  useEffect(() => setSearchResults({ ...searchResults, original: users }), [])
  return (
    <S.Container>
      <Header />
      <Main title={title} follow={follow} user>
        <div>
          {posts?.map((post) => (
            <Snippet key={post.id} {...post} username={post.name} />
          ))}
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </S.Container>
  )
}
