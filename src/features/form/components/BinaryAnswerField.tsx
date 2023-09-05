import { View } from "react-native";
import { useContext } from "react";

import { styles } from "@styles/styles";
import { YesButton } from "@features/form/components/YesButton";
import { NoButton } from "@features/form/components/NoButton";
import { postAnswer } from "@features/form/api/answer";
import { AnswerContext } from "@features/form/context/answerContext";

export const BinaryAnswerField = () => {
  const { id } = useContext(AnswerContext);

  return (
    <View style={styles.binaryField}>
      <YesButton onPress={async () => await postAnswer(id, { bool: true })} />
      <NoButton onPress={async () => await postAnswer(id, { bool: false })} />
    </View>
  );
};
