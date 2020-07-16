import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const object = { content, votes: 0}
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default { getAll, createNew }