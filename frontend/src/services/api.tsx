import axios from 'axios';

const API_URL = 'http://localhost:8000';  // Your FastAPI backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadPDF = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const getCourses = async () => {
  const response = await api.post('/get_courses');
  return response.data;
};