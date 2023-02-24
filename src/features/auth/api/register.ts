import { axios } from "@lib/axios";
import { loginCall } from "@features/auth/api/login";

export function registerCall (username: string, password: string) {
  return axios.post('/register/', {
    username: username,
    password: password
  })
  .then(() => loginCall(username, password))
  .catch((error) => {
    if (error.response.data.username != "A user with that username already exists.") {
      console.log(error);
    };
    throw error;
  });
};