import axios from 'axios';

const BASE_URL = 'http://localhost:3000/cockpit';

// GET
export const apiGet = async (endpoint) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return await axios.get(`${BASE_URL}${endpoint}`, { headers });
};


// POST
export const apiPost = async (endpoint, data) => {
             
  const headers = {
    'Content-Type': 'application/json',
  };

  return await axios.post(`${BASE_URL}${endpoint}`, data, { headers });
};

// PUT
export const apiPut = async (endpoint, data) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return await axios.put(`${BASE_URL}${endpoint}`, data, { headers });
};

// DELETE
export const apiDelete = async (endpoint) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return await axios.delete(`${BASE_URL}${endpoint}`, { headers });
};
