import { Text, View } from "react-native";

import { styles } from "@styles/styles";
import { SubAnswerField } from "@features/form/components/SubAnswerField";


type props = {prompt: string, id: number, questionType: string}
export const SubQuestions = ({prompt, id, questionType}: props) => (
  <View style={styles.centerRow}>
    <SubAnswerField questionType={questionType}/>
    <Text>{prompt}</Text>
  </View>
);