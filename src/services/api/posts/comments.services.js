import { api } from '../index'

export async function postComments(id, data, config) {
  return api.post(`/${id}/posts/comments`, { data }, config)
}
