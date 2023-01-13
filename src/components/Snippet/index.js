import React, { useContext, useState, useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { HiOutlineArrowPath } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import ModalContext from '../../contexts/modal.context'
import { metadata } from '../../services/api/post.services'
import Comments from '../Comments'
import CommentsIcon from '../CommentsIcon'
import EditTextPost from '../EditTextPost'
import FormComment from '../FormComment'
import Like from '../Like'
import { OptionPost } from '../OptionsPost'
import Share from '../ShareIcon/index'
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
  ContShare,
} from './style'

export default function Snippet({
  id,
  text,
  likes,
  url,
  imageCreator,
  createdBy,
  idCreator,
  userLiked,
  comments,
  repostsName,
  repostsId,
  count,
}) {
  const userData = localStorage.getItem('user')
  const dados = JSON.parse(userData)
  const routerUser = `/users/${idCreator}`
  const { setIsOpen, setModalId } = useContext(ModalContext)
  const [urlTitle, seturlTitle] = useState(null)
  const [urlImage, seturlImage] = useState(null)
  const [urlDescription, seturlDescription] = useState(null)
  const [textPost, setTextPost] = useState(text)
  const [editOpen, setEditOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [optionOpen, setOptionOpen] = useState(false)
  const [commentOpen, setCommentOpen] = useState(false)
  const [commentsPost, setCommentsPost] = useState(comments)
  //const ficComments = []

  // const openEditForm = () => {
  //   setEditOpen(true)
  // }
  // const closeEditForm = () => {}

  // const openModal = () => {
  //   setModalId(idPost)
  //   setIsOpen(true)
  // }

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
      {repostsId !== null && (
        <>
          {repostsId !== idCreator && (
            <ContShare>
              <HiOutlineArrowPath />
              <p>Re-posted by</p>
              <h1>{repostsName}</h1>
            </ContShare>
          )}
        </>
      )}
      <ContTimeline>
        <ContIcons>
          <img src={imageCreator} alt={imageCreator} />
          <Like id={id} likes={likes} liked={userLiked} />
          <CommentsIcon
            setCommentOpen={setCommentOpen}
            commentOpen={commentOpen}
          />
          <Share count={count} id={id} />
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
                id={id}
                loading={loading}
                setLoading={setLoading}
              />
            ) : (
              <TextPost text={text} />
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
            {commentsPost.map((comment, id) => (
              <Comments key={id} {...comment} idCreator={idCreator} />
            ))}
          </ListComments>
          <FormComment
            idPost={id}
            idCreator={idCreator}
            dados={dados}
            comments={comments}
            setCommentsPost={setCommentsPost}
          />
        </ContainerComment>
      ) : (
        ''
      )}
    </ContPost>
  )
}
