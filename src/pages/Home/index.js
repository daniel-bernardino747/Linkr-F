import React, { useEffect, useRef, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useLoaderData } from 'react-router-dom'

import Header from '../../components/Header'
import PublishPost from '../../components/PublishPost'
import Main from '../../components/Template/Main'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'
import { useSearchContext } from '../../contexts/search.context'
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

  return (
    <S.ContainerHome>
      <Header />
      <Main title={'Timeline'}>
        <div>
          <PublishPost />
          <Timeline posts={posts} />
          <S.Loading ref={sentinelRef} loading={loading}>
            <Oval
              height={50}
              width={50}
              color="rgba(51,51,51, 1)"
              wrapperStyle={{}}
              wrapperClass=""
              visible={loading.state}
              ariaLabel="oval-loading"
              secondaryColor="rgba(109, 109, 109, 1)"
              strokeWidth={5}
              strokeWidthSecondary={5}
            />
            <S.LoadingText visible={loading.state}>
              Loading more posts...
            </S.LoadingText>
          </S.Loading>
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </S.ContainerHome>
  )
}

const useElementOnScreen = ({ posts, setCurrentPage }) => {
  const [loadingState, setLoading] = useState(false)

  const sentinelRef = useRef(null)

  useEffect(() => {
    const postsListsNoLongerHasPost = posts.length % 10 !== 0
    if (postsListsNoLongerHasPost) return

    const callbackFunction = (entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setLoading(entry.isIntersecting)
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    }

    const intersectionObserver = new IntersectionObserver(callbackFunction)
    if (sentinelRef.current) intersectionObserver.observe(sentinelRef.current)

    return () => {
      if (sentinelRef.current)
        intersectionObserver.unobserve(sentinelRef.current)
    }
  }, [])

  return [
    sentinelRef,
    {
      state: loadingState,
      set: setLoading,
    },
  ]
}
