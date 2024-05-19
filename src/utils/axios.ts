import axios from 'axios'

const API_BASE_URL =
  process.env.API_BASE_URL || 'http://143.198.159.154/v1'

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
})
