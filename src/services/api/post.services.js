import { api } from './index'

export async function likePost(id, config) {
  return api.post(`/${id}/like`, {}, config)
}

export async function dislikePost(id, config) {
  return api.post(`/${id}/dislike`, {}, config)
}

export async function hashtag(name) {
  return api.get(`/hashtag/${name}`)
}
export async function deletePost(id) {
  return api.delete(`posts/${id}`)
}
