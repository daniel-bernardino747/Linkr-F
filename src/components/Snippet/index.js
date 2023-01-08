import React, { useState } from 'react'

import Like from '../Like'
import ModalComponent from '../Modal'
import TextPost from '../TextPost'
import {
  Banner,
  Content,
  ContIcons,
  ContTimeline,
  IconsEditDelete,
} from './style'

export default function Snippet(props) {
  const { image, name, text, urlTitle, urlDescription, urlLink, urlImage } =
    props

  const [modalIsOpen, setIsOpen] = useState(false)
  return (
    <ContTimeline>
      <ContIcons>
        <img src={image} alt={image} />
        <Like />
      </ContIcons>
      <div>
        <Content>
          <h1>{name}</h1>
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
      <IconsEditDelete>
        <ModalComponent setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      </IconsEditDelete>
    </ContTimeline>
  )
}
