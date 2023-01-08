import { api } from './index'

export async function postPublish(obj, config) {
  return api.post(`/posts`, obj, config)
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

export async function signup(obj) {
  return api.post(`/signup`, obj)
}

export async function signin(obj) {
  return api.post(`/signin`, obj)
}

export async function logout(config) {
  return api.delete(`/logout`, config)
}
