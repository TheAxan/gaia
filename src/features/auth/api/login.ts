import { axios } from "@lib/axios";

export function loginCall (username: string, password: string) {
  return axios.post('/api-token-auth/', {
    username: username,
    password: password
  })
  .then((response) => response.data.token)
  .catch((e) => {
    if (e.response.data.non_field_errors != "Unable to log in with provided credentials.") {
      console.error(e);
    };
    throw e;
  });
};