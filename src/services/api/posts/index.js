import { api } from '../index'

export async function getPosts(page, config) {
  return api.get(`/posts?page=${page}`, config)
}

export async function postPost(obj, config) {
  return api.post(`/posts`, obj, config)
}

export async function deletePost(id, config) {
  return api.delete(`/posts/${id}`, {}, config)
}

export async function putPost(id, data, config) {
  return api.put(`/posts/${id}`, { data }, config)
}

export async function postRepost(id, config) {
  return api.post(`/repost/${id}`, {}, config)
}
