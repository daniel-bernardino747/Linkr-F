import React from 'react'
import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import Snippet from '../Snippet'

export default function Timeline() {
  //const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  function getPosts() {
    const promise = api.get('/posts')
    promise.then((res) => {
      //setLoading(false)
      setPosts(res.data)
      //console.log(res.data)
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
