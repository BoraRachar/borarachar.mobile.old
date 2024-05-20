import axios from 'axios'

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL
console.log('API_BASE_URL:', API_BASE_URL)

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
})
