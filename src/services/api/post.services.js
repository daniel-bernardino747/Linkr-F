import { api } from './index'

export async function postPublish(obj, config) {
  return api.post(`/posts`, obj, config)
}

export async function getLikesByPost(id, config) {
  return api.get(`/posts/likes/${id}`, config)
}

export async function likePost(id, config) {
  return api.post(`/${id}/like`, {}, config)
}

export async function dislikePost(id, config) {
  return api.post(`/${id}/dislike`, {}, config)
}

export async function hashtag(name, config) {
  return api.get(`/hashtag/${name}`, config)
}
export async function deletePost(id, config) {
  return api.delete(`/posts/${id}`, {}, config)
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

export async function user(id, config) {
  return api.get(`/users/${id}`, config)
}

export async function updatePost(id, data, config) {
  return api.put(`/posts/${id}`, { data }, config)
}
