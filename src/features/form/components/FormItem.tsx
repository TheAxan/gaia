import { Text, View } from "react-native";
import { styles } from "@styles/styles";
import { useContext } from "react";

import { AnswerField } from "@features/form/components/AnswerField";
import { FormItemContext } from "@features/form/context/formItemContext";

export const FormItem = () => {
  const { prompt } = useContext(FormItemContext);
  const { hint } = useContext(FormItemContext);

  return (
    <View style={styles.item}>
      <Text style={styles.question}>{prompt}</Text>
      <Text style={styles.hint}>{hint}</Text>
      <AnswerField />
    </View>
  );
};
