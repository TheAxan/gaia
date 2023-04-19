import { axios } from "@lib/axios";

export function fetchQuestions () {
  return axios.get('/questions/valid/')
  .then((response) => response.data)
  .catch((e) => {
    if (e.response && e.response.status != 400) {
      console.error(e);
    };
    throw e;
  });
};