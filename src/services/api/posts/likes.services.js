import { api } from '../index'

export async function getLikesByPost(id, config) {
  return api.get(`/posts/likes/${id}`, config)
}

export async function postLike(id, config) {
  return api.post(`/${id}/like`, {}, config)
}

export async function postDislike(id, config) {
  return api.post(`/${id}/dislike`, {}, config)
}
