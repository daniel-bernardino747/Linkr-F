import { likePost } from '../../services/api/post.services'

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

export const postHelpers = {
  like,
}
