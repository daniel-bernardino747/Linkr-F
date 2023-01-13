import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import useInterval from 'use-interval'

import Header from '../../components/Header'
import { LoadingPage } from '../../components/LoadingPage'
import PublishPost from '../../components/PublishPost'
import Main from '../../components/Template/Main'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
import { useLocalStorage } from '../../helpers/api'
import { loaderHelper } from '../../helpers/api/loaders.helpers'
import { useElementOnScreen } from '../../helpers/hooks/useElementOnScreen'
import { api } from '../../services/api'
import { getPosts } from '../../services/api/posts'
import * as S from './style'

export const loader = async () => {
  try {
    const [config] = useLocalStorage()
    const { data } = await getPosts(1, config)
    return data
  } catch (error) {
    const confirm = window.alert(
      'An error occured while trying to fetch the posts, please refresh the page'
    )
    if (confirm) {
      return window.location.reload()
    }
    return null
  }
}

export default function Home() {
  const { posts: apiPosts, hashtags, users } = useLoaderData()

  const { searchResults, setSearchResults } = useSearchContext()

  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState(apiPosts)
  const [recentPosts, setRecentPosts] = useState([])
  const [activeAnimation, setActiveAnimation] = useState(false)

  const [sentinelRef, loading] = useElementOnScreen({
    posts,
    setCurrentPage,
  })

  useEffect(() => {
    setSearchResults({ ...searchResults, original: users })
    if (currentPage !== 1) {
      ;(async () => {
        const { body } = await loaderHelper.timeline({ page: currentPage })
        const newPosts = body.posts
        setPosts((currentPosts) => [...currentPosts, ...newPosts])
        loading.set(false)
      })()
    }
  }, [currentPage])

  useInterval(async () => {
    const firstPost = [...posts].shift()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    const { data: newPosts } = await api.post(
      `/refresh`,
      { id: firstPost.id },
      config
    )
    setRecentPosts([...newPosts])
    setActiveAnimation(false)
  }, 15000)

  const handleLoadNewPosts = () => {
    const removedPosts = posts.splice(
      recentPosts.length,
      10 - recentPosts.length
    )
    setPosts([...recentPosts, ...removedPosts])
    setRecentPosts([])
    setActiveAnimation(true)
  }

  return (
    <S.ContainerHome>
      <Header />
      <Main title={'Timeline'}>
        <div>
          <PublishPost />
          {recentPosts.length !== 0 && (
            <S.messageNewPosts onClick={handleLoadNewPosts}>
              {recentPosts.length} new posts, load more! ⟳
            </S.messageNewPosts>
          )}
          <Timeline posts={posts} active={activeAnimation} users={users} />
          <LoadingPage ref={sentinelRef} loading={loading} />
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </S.ContainerHome>
  )
}
