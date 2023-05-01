import { axios } from "@lib/axios";
import { loginCall } from "@features/auth/api/login";

export function registerCall(username: string, password: string) {
  return axios
    .post("/register/", {
      username: username,
      password: password,
    })
    .then(() => loginCall(username, password))
    .catch((e) => {
      if (e.response && e.response.status != 400) {
        console.error(e);
      }
      throw e;
    });
}
