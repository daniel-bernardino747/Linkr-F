import { api } from '../index'

export async function postMetadata(link) {
  return api.post(`/metadata`, { link })
}
