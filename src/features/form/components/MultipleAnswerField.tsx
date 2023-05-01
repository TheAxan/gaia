import { useEffect, useReducer, useState } from "react";
import { FlatList, View } from "react-native";

import { fetchQuestion } from "@features/form/api/question";
import { styles } from "@styles/styles";
import { SubQuestions } from "@features/form/components/SubQuestions";
import { SubmitButton } from "@features/form/components/SubmitButton";
import { multiAnswerReducer } from "@features/form/hooks/multiAnswerReducer";

type props = { childrenIds: { [index: number]: number }; id: number };

export const MultipleAnswerField = ({ childrenIds, id }: props) => {
  let [content, setContent] = useState([
    { prompt_fr: "", id: 0, question_type: "" },
  ]);

  let [state, dispatch] = useReducer(multiAnswerReducer, {});

  useEffect(() => {
    const bootstrapAsync = async () => {
      let output = [];
      for (const i in childrenIds) {
        let question = await fetchQuestion(childrenIds[i]);
        output.push(question);
        dispatch({ type: "ADD", id: question["id"], value: 0 });
      }
      setContent(output);
      dispatch({ type: "UPDATE", id: 10, value: 1 });
    };
    bootstrapAsync();
  }, []);

  return (
    <View style={styles.multipleAnswerField}>
      <FlatList
        scrollEnabled={false}
        data={content}
        renderItem={({ item }) => (
          <SubQuestions
            prompt={item["prompt_fr"]}
            questionType={item["question_type"]}
          />
        )}
      />
      <SubmitButton onPress={() => ""} />
    </View>
  );
};
