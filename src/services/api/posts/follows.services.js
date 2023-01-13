import { api } from '../index'

export async function postsFollow(id, config) {
  return api.post(`/follow`, { id }, config)
}

export async function deleteFollow(id, config) {
  return api.delete(`/unfollow/${id}`, config)
}
