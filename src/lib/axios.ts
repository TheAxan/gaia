const Axios = require('axios').default;
// import Axios from 'axios';

import { API_URL } from '@/config';

export const axios = Axios.create({
  baseURL: 'http://10.0.0.111:9001',
  // baseURL: API_URL,
});