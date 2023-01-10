import React, { useContext, useState } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

import ModalContext from '../../contexts/modal.context'
import EditTextPost from '../EditTextPost'
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
  const [textPost, setTextPost] = useState(text)
  const [editOpen, setEditOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const openEditForm = () => {
    setEditOpen(true)
  }
  // const closeEditForm = () => {}

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
          {editOpen ? (
            <EditTextPost
              text={text}
              textPost={textPost}
              setTextPost={setTextPost}
              setEditOpen={setEditOpen}
              id={idPost}
              loading={loading}
              setLoading={setLoading}
            />
          ) : (
            <TextPost text={text} />
          )}
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
        <BsFillPencilFill onClick={openEditForm} />
        <BsFillTrashFill onClick={openModal} />
      </IconsEditDelete>
    </ContTimeline>
  )
}
