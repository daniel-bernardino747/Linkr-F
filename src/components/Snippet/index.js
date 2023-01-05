import React from 'react'

import Like from '../Like'
import TextPost from '../TextPost'
import { Banner, Content, ContIcons, ContTimeline } from './style'

export default function Snippet(props) {
  const { image, name, urlTitle, urlDescription, urlLink, urlImage } =
    props
  console.log(image)
  return (
    <ContTimeline>
      <ContIcons>
        <img src={image} alt={image} />
        <Like />
      </ContIcons>
      <div>
        <Content>
          <h1>{name}</h1>
          <TextPost />
        </Content>
        <Banner>
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
