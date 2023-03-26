import axios from 'axios';

const baseUrl = 'http://localhost:4000/';

const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
  const token = '';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: 'Bearer ' + token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(baseUrl);
export const authInstance = axiosAuthApi(baseUrl);
