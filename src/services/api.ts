import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/currentprice.json',
})

const getExample = async () => {
  return await api.get('/test')
}

export default api