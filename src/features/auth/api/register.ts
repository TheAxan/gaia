import { axios } from "@lib/axios";
// import { loginCall } from "./login";
import { loginCall } from "@features/auth/api/login";

export function registerCall (username: string, password: string) {
  axios.post('/register/', {
    username: username,
    password: password
  })
  .then(function (response) {
    loginCall(username, password);
  })
  .catch(function (error: any) {
    if (error.response.data.username == "A user with that username already exists.") {
      console.log(error.response.data.username);
    } else {
      console.log(error);
    };
  });
};