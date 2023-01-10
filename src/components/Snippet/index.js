import React, { useContext, useState, useEffect } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

import ModalContext from '../../contexts/modal.context'
import { metadata } from '../../services/api/post.services'
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
  url,
  createdBy,
  userLiked,
  reposts,
}) {
  const { setIsOpen, setModalId } = useContext(ModalContext)
  const [urlTitle, seturlTitle] = useState(null);
  const [urlImage, seturlImage] = useState(null);
  const [urlDescription, seturlDescription] = useState(null);

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
        console.log(res.data);
      })
  }, [])

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
          <Banner onClick={() => window.open(url)}>
            <div>
              <h1>{urlTitle}</h1>
              <h2>{urlDescription}</h2>
              <h3>{url}</h3>
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
