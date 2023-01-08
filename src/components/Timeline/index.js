import React from 'react'
import { LineWave } from 'react-loader-spinner'

import Snippet from '../Snippet'
import { Title } from './style'

export default function Timeline({ posts, loading }) {
  // const [loading, setLoading] = useState(true)
  // const { user } = useContext(AuthContext)

  return (
    <>
      {posts.length === 0 && !loading && <Title>There are no posts yet</Title>}
      {loading && <LineWave color="white" />}
      {posts.map((post) => (
        <Snippet
          key={post.id}
          image={post.image}
          name={post.name}
          text={post.text}
          urlTitle={post.urlTitle}
          urlDescription={post.urlDescription}
          urlLink={post.url}
          urlImage={post.urlImage}
        />
      ))}
    </>
  )
}
