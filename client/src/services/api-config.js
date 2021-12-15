import axios from 'axios';

// const BASE_URL = "http://localhost:3000"

// const api = axios.create({
//     baseURL: BASE_URL,

//   });


  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://co-lab-backend.herokuapp.com/' : 'http://localhost:3000' 

  const api = axios.create({
    baseURL: baseUrl
  })
  export default api;