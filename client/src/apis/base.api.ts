import axios from 'axios'

const baseApi = axios.create({
    //baseURL: 'http://localhost:8000/api/v1/',
    baseURL: 'https://ayudapp.onrender.com/api/v1/',
})

export default baseApi