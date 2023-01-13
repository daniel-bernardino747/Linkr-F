import { functionHelper } from '../../helpers/functions'
import { getHashtag } from '../../services/api/hashtags.services'
import {
  deletePost,
  postPost,
  postRepost,
  putPost,
} from '../../services/api/posts'
import { postComments } from '../../services/api/posts/comments.services'
import {
  postsFollow,
  deleteFollow,
} from '../../services/api/posts/follows.services'
import { postLike, postDislike } from '../../services/api/posts/likes.services'
import { useLocalStorage } from './index'

async function like({ id }) {
  const [config] = useLocalStorage()

  let httpResponse
  try {
    httpResponse = await postLike(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function dislike({ id }) {
  const [config] = useLocalStorage()

  let httpResponse
  try {
    httpResponse = await postDislike(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function viewTag({ name }) {
  let httpResponse
  try {
    httpResponse = await getHashtag(name)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function del({ id }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await deletePost(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function edit({ id, data }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await putPost(id, data, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function comment({ id, data }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await postComments(id, data, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function sendPost({ data }) {
  let httpResponse
  const [config] = useLocalStorage()
  const hashtags = functionHelper.separeHashtagsInArray(data)

  try {
    httpResponse = await postPost({ ...data, hashtags }, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function sendRepost({ id }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await postRepost(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function follow({ id }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await postsFollow(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function unfollow({ id }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await deleteFollow(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

export const postHelpers = {
  like,
  dislike,
  viewTag,
  del,
  edit,
  comment,
  sendPost,
  sendRepost,
  follow,
  unfollow,
}
