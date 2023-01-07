import React from 'react'
import { useState, useEffect, useContext } from 'react'

import { api } from '../../services/api'
import Snippet from '../Snippet'
import AuthContext from '../../contexts/auth.context'
import { Title } from './style'
import { LineWave } from 'react-loader-spinner'

export default function Timeline() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)
  const config = {
    headers: {
      Authorization: 'Bearer ' + user,
    },
  }
  function getPosts() {
    const promise = api.get('/posts', config)
    promise.then((res) => {
      setPosts(res.data)
      setLoading(false)
    })
    promise.catch((err) => {
      console.log(err)
      setLoading(false)
      const confirm = window.alert(
        'An error occured while trying to fetch the posts, please refresh the page'
      )
      if (confirm) {
        window.location.reload()
      }
    })
  }

  useEffect(getPosts, [])

  return (
    <>
      {posts.length === 0 && !loading && <Title>There are no posts yet</Title>}
      {loading && <LineWave color="white" />}
      {posts.map((post, index) => {
        const { image, name, text, urlDescription, url, urlImage, urlTitle } =
          post
        return (
          <>
            <Snippet
              key={index}
              image={image}
              name={name}
              text={text}
              urlTitle={urlTitle}
              urlDescription={urlDescription}
              urlLink={url}
              urlImage={urlImage}
            />
          </>
        )
      })}
    </>
  )
}
