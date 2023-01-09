import React from 'react'

import Like from '../Like'
import TextPost from '../TextPost'
import { Banner, Content, ContIcons, ContTimeline } from './style'

export default function Snippet({
  id,
  text,
  likes,
  image,
  urlLink,
  username,
  urlTitle,
  urlImage,
  userLiked,
  urlDescription,
}) {
  return (
    <ContTimeline>
      <ContIcons>
        <img src={image} alt={image} />
        <Like id={id} likes={likes} liked={userLiked} />
      </ContIcons>
      <div>
        <Content>
          <h1>{username}</h1>
          <TextPost text={text} />
        </Content>
        <Banner onClick={() => window.open(urlLink)}>
          <div>
            <h1>{urlTitle}</h1>
            <h2>{urlDescription}</h2>
            <h3>{urlLink}</h3>
          </div>
          <img src={urlImage} alt={urlImage} />
        </Banner>
      </div>
    </ContTimeline>
  )
}
