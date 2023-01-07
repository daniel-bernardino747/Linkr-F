import React from 'react'
import { useState, useEffect, useContext } from 'react'

import AuthContext from '../../contexts/auth.context'
import { api } from '../../services/api'
import Snippet from '../Snippet'

export default function Timeline() {
  //const [loading, setLoading] = useState(true)
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
      //setLoading(false)
      setPosts(res.data.posts)
      console.log(res.data.posts)
    })
    promise.catch((err) => {
      console.log(err)
      const confirm = window.confirm(
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
