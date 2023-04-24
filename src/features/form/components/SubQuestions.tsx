import { Text, View } from "react-native";

import { styles } from "@styles/styles";
import { SubAnswerField } from "@features/form/components/SubAnswerField";

export const SubQuestions = ({prompt, id, questionType}: any) => (
  <View style={styles.centerRow}>
    <SubAnswerField questionType={questionType}/>
    <Text>{prompt}</Text>
  </View>
);