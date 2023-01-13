import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

import Header from '../../components/Header'
import { LoadingPage } from '../../components/LoadingPage'
import Snippet from '../../components/Snippet'
import Main from '../../components/Template/Main'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
import { loaderHelper } from '../../helpers/api/loaders.helpers'
import { useElementOnScreen } from '../../helpers/hooks/useElementOnScreen'
import { api } from '../../services/api'
import * as S from './style'

export const loader = async ({ params }) => {
  const { id } = params
  const { body } = await loaderHelper.user({ id })
  console.log(body)

  return {
    ...body,
    title: {
      user: `${body.user.name}'s posts`,
      image: body.user.image,
      id: body.user.id,
    },
  }
}

export default function User() {
  const { title, posts: apiPosts, hashtags, users, follow } = useLoaderData()
  const { searchResults, setSearchResults } = useSearchContext()
  const { id: idUser } = useParams()
  let infoUser = JSON.parse(localStorage.getItem('user'))

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
          `/users/${idUser}?page=${currentPage}`,
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
      <Main title={title} follow={follow} user={Number(idUser) !== infoUser.id}>
        {posts.length ? (
          <S.Content>
            {posts?.map((post) => (
              <Snippet key={post.id} {...post} username={post.name} />
            ))}
            <LoadingPage ref={sentinelRef} loading={loading} />
          </S.Content>
        ) : (
          <S.Title>
            <h1>No posts yet :(</h1>
          </S.Title>
        )}
        <Trending hashtagList={hashtags} />
      </Main>
    </S.Container>
  )
}
