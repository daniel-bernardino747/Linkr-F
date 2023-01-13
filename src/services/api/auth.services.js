import { api } from './index'

export async function postSignUp(obj) {
  return api.post(`/signup`, obj)
}

export async function postSignIn(obj) {
  return api.post(`/signin`, obj)
}

export async function deleteLogout(config) {
  return api.delete(`/logout`, config)
}
