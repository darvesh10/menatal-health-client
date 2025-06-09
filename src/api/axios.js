import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mental-health-server-2.onrender.com', // Update if your backend URL is different

});

// Add this interceptor to include token in headers
  API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default API;
