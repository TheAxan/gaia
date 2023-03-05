import Axios from 'axios';

import { API_URL } from '@config/apiUrl';

export const axios = Axios.create({
  baseURL: API_URL,
  timeout: 1000,
});