import { createContext } from "react";

export const FormItemContext = createContext({
  prompt: "",
  hint: "",
  questionType: "",
  children: [0],
  id: 0,
});
