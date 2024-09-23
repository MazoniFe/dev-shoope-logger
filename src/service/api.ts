// src/services/apiService.ts
import axios from 'axios';

const API_BASE_URL = 'https://app.mazoni.org:7171';

export const ApiService = {
  async get(endpoint: string, headers?: Record<string, string>) {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { headers });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async post(endpoint: string, data: any, headers?: Record<string, string>) {
    try {
      const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, { headers });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async put(endpoint: string, data: any, headers?: Record<string, string>) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${endpoint}`, data, { headers });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async delete(endpoint: string, headers?: Record<string, string>) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${endpoint}`, { headers });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

const handleError = (error: any) => {
  console.error('API Error:', error);
  throw error; 
};
