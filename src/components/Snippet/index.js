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
  imageCreator,
  urlLink,
  createdBy,
  urlTitle,
  urlImage,
  userLiked,
  urlDescription,
  reposts,
}) {
  const { setIsOpen, setModalId } = useContext(ModalContext)
  const openModal = () => {
    setModalId(idPost)
    setIsOpen(true)
  }
  return (
    <>
      {reposts && (<div>Re-posted by {reposts}</div>)}
      <ContTimeline>
        <ContIcons>
          <img src={imageCreator} alt={imageCreator} />
          <Like id={id} likes={likes} liked={userLiked} />
        </ContIcons>
        <div>
          <Content>
            <h1>{createdBy}</h1>
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
    </>
  )
}
