import React, { useContext, useState, useEffect } from 'react'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import ModalContext from '../../contexts/modal.context'
import { metadata } from '../../services/api/post.services'
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
  url,
  imageCreator,
  createdBy,
  idCreator,
  userLiked,
}) {
  const { setIsOpen, setModalId } = useContext(ModalContext)
  const [urlTitle, seturlTitle] = useState(null);
  const [urlImage, seturlImage] = useState(null);
  const [urlDescription, seturlDescription] = useState(null);
  const [textPost, setTextPost] = useState(text)
  const [editOpen, setEditOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const routerUser = `/users/${idCreator}`

  const openEditForm = () => {
    setEditOpen(true)
  }
  // const closeEditForm = () => {}

  const openModal = () => {
    setModalId(idPost)
    setIsOpen(true)
  }

  useEffect(() => {
    metadata(url)
      .then((res) => {
        seturlTitle(res.data.urlTitle)
        seturlImage(res.data.urlImage)
        seturlDescription(res.data.urlDescription)
      })
  }, [])

  return (
    <ContTimeline>
      <ContIcons>
        <img src={imageCreator} alt={imageCreator} />
        <Like id={id} likes={likes} liked={userLiked} />
      </ContIcons>
      <div>
        <Content>
          <Link style={{ textDecoration: 'none' }} to={routerUser}>
            <h1>{createdBy}</h1>
          </Link>
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
        </Content >
        <Banner onClick={() => window.open(url)}>
          <div>
            <h1>{urlTitle}</h1>
            <h2>{urlDescription}</h2>
            <h3>{url}</h3>
          </div>
          <img src={urlImage} alt={urlImage} />
        </Banner>
      </div >
      <IconsEditDelete>
        <BsFillPencilFill onClick={openEditForm} />
        <BsFillTrashFill onClick={openModal} />
      </IconsEditDelete>
    </ContTimeline >
  )
}
