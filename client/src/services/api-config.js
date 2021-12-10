import axios from 'axios';

const BASE_URL = "https://localhost:3000"


const api = axios.create({
    BASE_URL: BASE_URL,
  });
  
  export default api;