import { api } from './index'

export async function getHashtag(name, config) {
  return api.get(`/hashtag/${name}`, config)
}
