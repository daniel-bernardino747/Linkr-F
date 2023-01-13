import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

import Header from '../../components/Header'
import { LoadingPage } from '../../components/LoadingPage'
import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
import { useElementOnScreen } from '../../helpers/hooks/useElementOnScreen'
import { api } from '../../services/api'
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
  const { title, posts: apiPosts, hashtags, users } = useLoaderData()
  const { searchResults, setSearchResults } = useSearchContext()
  const { hashtag } = useParams()

  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState(apiPosts)

  const [sentinelRef, loading] = useElementOnScreen({
    posts,
    setCurrentPage,
  })

  useEffect(() => {
    setSearchResults({ ...searchResults, original: users })
    if (currentPage !== 1) {
      ;(async () => {
        const token = localStorage.getItem('token')
        const config = {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
        const { data } = await api.get(
          `/hashtag/${hashtag}?page=${currentPage}`,
          config
        )
        const newPosts = data.posts
        setPosts((currentPosts) => [...currentPosts, ...newPosts])
        loading.set(false)
      })()
    }
  }, [currentPage])

  return (
    <S.Container>
      <Header />
      <Main title={title}>
        <div>
          {posts?.map((post) => (
            <Snippet key={post.id} {...post} username={post.name} />
          ))}
          <LoadingPage ref={sentinelRef} loading={loading} />
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </S.Container>
  )
}
