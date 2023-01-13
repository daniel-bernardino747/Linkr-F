import {
  deleteLogout,
  postSignIn,
  postSignUp,
} from '../../services/api/auth.services'
import { deleteLocalStorage, setLocalStorage, useLocalStorage } from './index'

async function register({ data }) {
  let httpResponse
  try {
    httpResponse = await postSignUp(data)
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function login({ data }) {
  let httpResponse
  try {
    httpResponse = await postSignIn(data)

    const {
      data: { user: userObj, token },
    } = httpResponse
    const user = JSON.stringify(userObj)

    setLocalStorage({ user, token })
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}
async function logout() {
  const [config] = useLocalStorage()

  let httpResponse
  try {
    httpResponse = await deleteLogout(config)

    deleteLocalStorage({ user: 'user', token: 'token' })
  } catch (error) {
    httpResponse = error.response
    return false
  }
  return {
    statusData: httpResponse.status,
    body: httpResponse.data,
  }
}

export const authHelper = {
  register,
  login,
  logout,
}
