import Axios from 'axios';
import { getItemAsync } from 'expo-secure-store';

import { API_URL } from '@config/index';

export const axios = Axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

axios.interceptors.request.use(
  async function(config) {
    const token = await getItemAsync('userToken');
    if (token) {
      config.headers["Authorization"] = 'token ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);