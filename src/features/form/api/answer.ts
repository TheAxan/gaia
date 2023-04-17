import { axios } from "@lib/axios";

export function postAnswer (id: number, answer: any) {
  return axios.post('/answer/', {
    question: id,
    answer_json: {answer}
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((response) => response.data)
  .catch((e) => {
    if (e.response && e.response.status != 400) {
      console.error(e);
    };
    console.error(e);
    // throw e;
  });
};