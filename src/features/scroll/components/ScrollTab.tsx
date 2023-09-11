import { FlatList } from "react-native";
import { useEffect, useState } from "react";

import { fetchQuestions } from "@features/form/api/questions";
import { FormItem } from "@features/form/components/FormItem";
import { FormItemContext } from "@features/form/context/formItemContext";

export const ScrollTab = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      setQuestions(await fetchQuestions());
    };
    bootstrapAsync();
  }, []);

  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => {
        const formItemContext = {
          prompt: item["prompt_fr"],
          hint: item["hint_fr"],
          questionType: item["question_type"],
          children: item["children"],
          id: item["id"],
        };

        return (
          <FormItemContext.Provider value={formItemContext}>
            <FormItem />
          </FormItemContext.Provider>
        );
      }}
    />
  );
};
