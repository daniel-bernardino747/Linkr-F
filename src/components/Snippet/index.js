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

export default function Snippet({
  id,
  idPost,
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
  const { setIsOpen, setModalId } = useContext(ModalContext)
  const openModal = () => {
    setModalId(idPost)
    setIsOpen(true)
  }
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
      <IconsEditDelete>
        <BsFillTrashFill onClick={openModal} />
      </IconsEditDelete>
    </ContTimeline>
  )
}
