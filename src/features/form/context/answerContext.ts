import { createContext } from "react";

export const AnswerContext = createContext({
  questionType: "",
  children: [0],
  id: 0,
});
