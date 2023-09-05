import { useEffect, useReducer, useState, useContext } from "react";
import { FlatList, View } from "react-native";

import { fetchQuestion } from "@features/form/api/question";
import { styles } from "@styles/styles";
import { SubQuestions } from "@features/form/components/SubQuestions";
import { SubmitButton } from "@features/form/components/SubmitButton";
import { multiAnswerReducer } from "@features/form/hooks/multiAnswerReducer";
import { postAnswer } from "@features/form/api/answer";
import { AnswerContext } from "@features/form/context/answerContext";

export const MultipleNumberField = () => {
  const { children } = useContext(AnswerContext);

  let [content, setContent] = useState([
    { prompt_fr: "", id: 0, question_type: "" },
  ]);

  let [state, dispatch] = useReducer(multiAnswerReducer, {});

  useEffect(() => {
    const bootstrapAsync = async () => {
      let output = [];
      for (const i in children) {
        let question = await fetchQuestion(children[i]);
        output.push(question);
        dispatch({ type: "change", id: question["id"], value: "0" });
      }
      setContent(output);
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
            field={state[item["id"]]}
            setField={(value: any) =>
              dispatch({ type: "change", id: item["id"], value: value })
            }
          />
        )}
      />
      <SubmitButton
        onPress={() => {
          for (const qid in state) {
            postAnswer(parseInt(qid), { float: state[qid] });
          }
        }}
      />
    </View>
  );
};
