import React from 'react'
import { LineWave } from 'react-loader-spinner'
import ModalComponent from '../Modal'
import Snippet from '../Snippet'
import { Title } from './style'

export default function Timeline({ posts, loading }) {
  // const [loading, setLoading] = useState(true)
  // const { user } = useContext(AuthContext)
  console.log(posts)

  return (
    <>
      {posts.length === 0 && !loading && <Title>There are no posts yet</Title>}
      {loading && <LineWave color="white" />}
      <ModalComponent />
      {posts.map((post) => (
        <Snippet
          key={post.idPost}
          idPost={post.idPost}
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
