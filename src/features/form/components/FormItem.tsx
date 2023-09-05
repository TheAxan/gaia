import { Text, View } from "react-native";
import { styles } from "@styles/styles";

import { AnswerField } from "@features/form/components/AnswerField";
import { AnswerContext } from "@features/form/context/answerContext";

type props = {
  prompt: string;
  hint: string;
  questionType: string;
  children: [number];
  id: number;
};

export const FormItem = ({
  prompt,
  hint,
  questionType,
  children,
  id,
}: props) => {
  const answerContext = {
    questionType: questionType,
    children: children,
    id: id,
  };

  return (
    <View style={styles.item}>
      <Text style={styles.question}>{prompt}</Text>
      <Text style={styles.hint}>{hint}</Text>
      <AnswerContext.Provider value={answerContext}>
        <AnswerField />
      </AnswerContext.Provider>
    </View>
  );
};
