import { axios } from "@lib/axios";

export function fetchQuestion (id: number) {
  return axios.get(`/question/${id}/`)
  .then((response) => response.data)
  .catch((e) => {
    if (e.response && e.response.status != 400) {
      console.error(e);
      console.error(e.response.url);
    };
    throw e;
  });
};