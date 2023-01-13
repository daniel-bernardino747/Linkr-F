import React, { useContext, useState, useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
//import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

import ModalContext from '../../contexts/modal.context'
import { metadata } from '../../services/api/post.services'
import Comments from '../Comments'
import CommentsIcon from '../CommentsIcon'

import EditTextPost from '../EditTextPost'
import FormComment from '../FormComment'
import Like from '../Like'
import { OptionPost } from '../OptionsPost'
import TextPost from '../TextPost'
import {
  Banner,
  ContainerComment,
  Content,
  ContIcons,
  ContPost,
  ContTimeline,
  IconsEditDelete,
  ListComments,
} from './style'

export default function Snippet({
  id,
  text,
  likes,
  imageCreator,
  url,
  createdBy,
  userLiked,
  idCreator,
}) {
  const userData = localStorage.getItem('user')
  const dados = JSON.parse(userData)

  const { setIsOpen, setModalId } = useContext(ModalContext)

  const [newText, setNewText] = useState(text)
  const [urlTitle, seturlTitle] = useState(null)
  const [urlImage, seturlImage] = useState(null)
  const [urlDescription, seturlDescription] = useState(null)
  const [editOpen, setEditOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [optionOpen, setOptionOpen] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false)
  // const closeEditForm = () => {}

  useEffect(() => {
    metadata(url).then((res) => {
      seturlTitle(res.data.urlTitle)
      seturlImage(res.data.urlImage)
      seturlDescription(res.data.urlDescription)
      console.log(res.data)
    })
  }, [])

  return (
    <ContPost>
      <ContTimeline>
        <ContIcons>
          <img src={imageCreator} alt={imageCreator} />
          <Like id={id} likes={likes} liked={userLiked} />
          <CommentsIcon
            setCommentOpen={setCommentOpen}
            commentOpen={commentOpen}
          />
        </ContIcons>
        <div>
          <Content>
            <h1>{createdBy}</h1>
            {editOpen ? (
              <EditTextPost
                newText={newText}
                setNewText={setNewText}
                id={id}
                loading={loading}
                setLoading={setLoading}
                setEditOpen={setEditOpen}
              />
            ) : (
              <TextPost text={newText} />
            )}
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

        {optionOpen ? (
          <OptionPost
            setIsOpen={setIsOpen}
            setModalId={setModalId}
            setEditOpen={setEditOpen}
            id={id}
            backdropClose={true}
            setOptionOpen={setOptionOpen}
          />
        ) : (
          ''
        )}
        {dados.id === idCreator ? (
          <IconsEditDelete>
            <BsThreeDots
              onClick={() => {
                setOptionOpen(true)
              }}
            />
          </IconsEditDelete>
        ) : (
          ''
        )}
      </ContTimeline>
      {commentOpen ? (
        <ContainerComment>
          <ListComments>
            <Comments />
          </ListComments>
          <FormComment />
        </ContainerComment>
      ) : (
        ''
      )}
    </ContPost>
  )
}
