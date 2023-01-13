export const setLocalStorage = ({ user, token }) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}
export const deleteLocalStorage = ({ user, token }) => {
  localStorage.removeItem(token)
  localStorage.removeItem(user)
}
export const useLocalStorage = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }

  return [config, token]
}
