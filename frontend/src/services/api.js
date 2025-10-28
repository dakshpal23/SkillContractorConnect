import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const testAPI = async () => {
  try {
    const response = await api.get('/test');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export default api;