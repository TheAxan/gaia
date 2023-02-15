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
    if (error.response.data.non_field_errors == "Unable to log in with provided credentials.") {
      console.log(error.response.data.non_field_errors)
    } else {
      console.log(error);
    };
  });
};