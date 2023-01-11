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
  const config = {
    headers: {
      Authorization: 'Bearer ' + 'c03b32e1-fa8a-417d-a016-202e41aa9dc6',
    },
  }
  const { data } = await user(id, config)

  return {
    ...data,
    title: `${data.user.name}'s posts`,
  }
}

export default function User() {
  const { title, posts, hashtags, users } = useLoaderData()
  const { searchResults, setSearchResults } = useSearchContext()
  console.log(users)
  useEffect(() => setSearchResults({ ...searchResults, original: users }), [])
  return (
    <S.Container>
      <Header />
      <Main title={title}>
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
