import { api } from './index'

export async function postPublish(config) {
  return api.post(`/posts`, config)
}

export async function likePost(id, config) {
  return api.post(`/${id}/like`, {}, config)
}

export async function dislikePost(id, config) {
  return api.post(`/${id}/dislike`, {}, config)
}

export async function hashtag(name) {
  return api.get(`/hashtag/${name}`)
}
export async function deletePost(id, config) {
  return api.delete(`posts/${id}`, {}, config)
}
export async function signup(obj) {
  return api.post(`/signup`, obj)
}

export async function signin(obj) {
  return api.post(`/signin`, obj)
}
