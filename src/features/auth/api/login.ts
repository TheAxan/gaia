import { axios } from "@lib/axios";

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