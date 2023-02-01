const axios = require('axios').default // import axios from 'axios';


axios.defaults.baseURL = 'http://10.0.0.111:9001';

export function loginCall (username: string, password: string) {
  axios.post('/api-token-auth/', {
    username: username,
    password: password
  })
  .then(function (response: { data: { token: any; }; }) {
    console.log(response.data.token);
  })
  .catch(function (error: any) {
    console.log(error);
  });
};