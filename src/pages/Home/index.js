import React from 'react'
import { useLoaderData } from 'react-router-dom'

import Header from '../../components/Header'
import PublishPost from '../../components/PublishPost'
import Main from '../../components/Template/Main'
import Timeline from '../../components/Timeline'
import Trending from '../../components/Trending'
import { api } from '../../services/api'
import { ContainerHome } from './style'

export const loader = async () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  try {
    const result = await api.get('/posts', config)
    return result.data
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
  const { posts, hashtags } = useLoaderData()
  return (
    <ContainerHome>
      <Header users={hashtags} />
      <Main title={'Timeline'}>
        <div>
          <PublishPost />
          <Timeline posts={posts} />
        </div>
        <Trending hashtagList={hashtags} />
      </Main>
    </ContainerHome>
  )
}
