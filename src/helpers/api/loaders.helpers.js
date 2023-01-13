import { getHashtag } from '../../services/api/hashtags.services'
import { getPosts } from '../../services/api/posts'
import { getUsers } from '../../services/api/users.services'
import { useLocalStorage } from './index'

async function hashtag({ name }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await getHashtag(name, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

async function timeline({ page }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await getPosts(page, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

async function user({ id }) {
  let httpResponse
  const [config] = useLocalStorage()

  try {
    httpResponse = await getUsers(id, config)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

export const loaderHelper = {
  hashtag,
  timeline,
  user,
}
