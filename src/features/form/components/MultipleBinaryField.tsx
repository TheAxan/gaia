import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { fetchQuestion } from "@features/form/api/question";
import { styles } from "@styles/styles";
import { SubQuestions } from "@features/form/components/SubQuestions";

type props = { childrenIds: { [index: number]: number } };

export const MultipleBinaryField = ({ childrenIds }: props) => {
  let [content, setContent] = useState([
    { prompt_fr: "", id: 0, question_type: "" },
  ]);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let output = [];
      for (const i in childrenIds) {
        output.push(await fetchQuestion(childrenIds[i]));
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
          />
        )}
      />
    </View>
  );
};
