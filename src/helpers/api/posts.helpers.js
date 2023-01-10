import { hashtag, likePost, deletePost } from '../../services/api/post.services'

async function like({ id, token }) {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  let httpResponse
  try {
    httpResponse = await likePost(id, config)
  } catch (error) {
    httpResponse = error.response
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function viewTag({ name }) {
  let httpResponse
  try {
    httpResponse = await hashtag(name)
  } catch (error) {
    httpResponse = error.response
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

async function del(id, token) {
  let httpResponse
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }

  try {
    httpResponse = await deletePost(id, config)
  } catch (error) {
    httpResponse = error.response
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

export const postHelpers = {
  like,
  viewTag,
  del,
}
