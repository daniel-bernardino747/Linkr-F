import {
  hashtag,
  likePost,
  deletePost,
  updatePost,
} from '../../services/api/post.services'

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

export async function edit(id, config) {
  let httpResponse
  try {
    httpResponse = await updatePost(id, config)
  } catch (error) {
    console.log('erro aqui')
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
  edit,
}
