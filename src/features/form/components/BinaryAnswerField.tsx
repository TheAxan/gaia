import { View } from "react-native";
import { useContext } from "react";

import { styles } from "@styles/styles";
import { YesButton } from "@features/form/components/YesButton";
import { NoButton } from "@features/form/components/NoButton";
import { postAnswer } from "@features/form/api/answer";
import { FormItemContext } from "@features/form/context/formItemContext";

export const BinaryAnswerField = () => {
  const { id } = useContext(FormItemContext);

  return (
    <View style={styles.binaryField}>
      <YesButton onPress={async () => await postAnswer(id, { bool: true })} />
      <NoButton onPress={async () => await postAnswer(id, { bool: false })} />
    </View>
  );
};
