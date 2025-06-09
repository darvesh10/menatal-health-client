
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', 
  withCredentials: true, // if you're using cookies
});

export default axiosInstance;
