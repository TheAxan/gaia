import { Text, View } from "react-native";

import { styles } from "@styles/styles";
import { SubAnswerField } from "@features/form/components/SubAnswerField";

type props = { prompt: string; questionType: string };
export const SubQuestions = ({ prompt, questionType }: props) => (
  <View style={styles.centerRow}>
    <SubAnswerField questionType={questionType} />
    <Text>{prompt}</Text>
  </View>
);
