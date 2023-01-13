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
import { useElementOnScreen } from '../../helpers/hooks/useElementOnScreen'
import { api } from '../../services/api'
import * as S from './style'

export const loader = async () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  try {
    const { data } = await api.get('/posts?page=1', config)
    return data
  } catch (error) {
    console.log(error)
    const confirm = window.alert(
      'An error occured while trying to fetch the posts, please refresh the page'
    )
    if (confirm) {
      window.location.reload()
    }
    return error
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
        const token = localStorage.getItem('token')
        const config = {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
        const { data } = await api.get(`/posts?page=${currentPage}`, config)
        const newPosts = data.posts
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
      { datetime: firstPost.createdAt },
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
          <Timeline posts={posts} active={activeAnimation} />
          <LoadingPage ref={sentinelRef} loading={loading} />
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </S.ContainerHome>
  )
}
