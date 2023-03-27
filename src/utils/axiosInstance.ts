import axios from 'axios';

const BASEURL = 'https://localhost:4000/';

export const baseInstance = axios.create({
  baseURL: BASEURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});
