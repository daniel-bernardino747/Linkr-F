import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import ModalContext from '../../contexts/modal.context'
import Like from '../Like'

import TextPost from '../TextPost'
import {
  Banner,
  Content,
  ContIcons,
  ContTimeline,
  IconsEditDelete,
} from './style'

export default function Snippet(props) {
  const {
    idPost,
    image,
    name,
    text,
    urlTitle,
    urlDescription,
    urlLink,
    urlImage,
  } = props
  const { setIsOpen, setModalId } = useContext(ModalContext)
  console.log(idPost)
  console.log(name)
  const openModal = () => {
    setModalId(idPost)
    setIsOpen(true)
  }

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
        <BsFillTrashFill onClick={openModal} />
      </IconsEditDelete>
    </ContTimeline>
  )
}
