import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

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
      console.log(res.data)
    })
    promise.catch((err) => {
      console.log(err)
      /*const confirm = window.confirm(
        'An error occured while trying to fetch the posts, please refresh the page'
      )
      if (confirm) {
        window.location.reload()
      } */
    })
  }

  useEffect(getPosts, [])

  /*const posts = [
    {
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      name: 'teste1',
      text: `Oii, primeira #hashtag asdoasid asdoiasjdn asdoiasdml sadoias
    asodias dasoidsa #doiasijdsa doasidhj uiyiu yuiyi ghjg jkj`,
      urlTitle: 'titulo1',
      urlDescription: 'Description url',
      urlLink:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      urlImage:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      name: 'teste2',
      text: `Oii, primeira #hash asdoasid asdoiasjdn asdoiasdml sadoias
    asodias dasoidsa #doia doasidhj uiyiu yuiyi ghjg jkj`,
      urlTitle: 'titulo2',
      urlDescription: 'Description url',
      urlLink:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      urlImage:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
  ]*/

  return (
    <>
      {posts &&
        posts.map((post, index) => {
          const {
            image,
            name,
            text,
            urlDescription,
            urlLink,
            urlImage,
            urlTitle,
          } = post
          return (
            <Snippet
              key={index}
              image={image}
              name={name}
              text={text}
              urlTitle={urlTitle}
              urlDescription={urlDescription}
              urlLink={urlLink}
              urlImage={urlImage}
            />
          )
        })}
    </>
  )
}
