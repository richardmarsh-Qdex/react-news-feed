import axios from 'axios'

const API_BASE_URL = 'https://api.example.com/news'

export const fetchArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles`)
  return response.data
}

export const fetchArticle = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/articles/${id}`)
  return response.data
}

export const searchArticles = async (query) => {
  const response = await axios.get(`${API_BASE_URL}/articles/search`, {
    params: { q: query }
  })
  return response.data
}
