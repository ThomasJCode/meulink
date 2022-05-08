import axios from 'axios';

export const key = "2de780362ee7d2ad719a7677de67cb10e3401844";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;