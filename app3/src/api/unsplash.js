import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID PZD0EnSV8qHw-1Qb8tkPnOOcJMbWpAhEufWfKuCyq3g'
  },
})