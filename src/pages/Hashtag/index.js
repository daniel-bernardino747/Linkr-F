import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router'

import Header from '../../components/Header'
import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
import { hashtag } from '../../services/api/post.services'
import * as S from './style'

export const loader = async ({ params }) => {
  const { hashtag: name } = params
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  const { data } = await hashtag(name, config)
  return {
    ...data,
    title: name,
  }
}

export default function Hashtag() {
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
