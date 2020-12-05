import axios from 'axios'

const API_KEY = 'AIzaSyCRrKiuAHGFbGX0DnuxHfVV5KB0UgmiNDw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY,
    type: 'video',
  }
})