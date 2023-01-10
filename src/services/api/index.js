import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-linkr-sql.onrender.com/',
  /* baseURL: 'http://localhost:4000/' */
})
