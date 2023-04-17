import { axios } from "@lib/axios";

export function postAnswer (id: number, answer: any) {
  return axios.post('/answer/', {
    question: id,
    answer_json: answer
  })
  .then((response) => response.data)
  .catch((e) => {
    console.error(e);
    throw e;
  });
};