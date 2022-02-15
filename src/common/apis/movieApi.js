import axios from 'axios'
import { APIKEY } from './movieApiKey'

export default axios.create({
  baseURL: 'https://omdbapi.com',
  params: {
    apiKey: APIKEY
  }
})
