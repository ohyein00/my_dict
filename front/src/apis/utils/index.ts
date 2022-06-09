import axios from 'axios';

const BASE_URL: string = 'http://localhost:1004/';

const axiosApi = (url: string, options?: object) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const axiosAuthApi = (url: string, options?: object) => {
  const token = 'ddd';
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: token },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
