import { api } from './index'

export async function getUsers(id, config) {
  return api.get(`/users/${id}`, config)
}
