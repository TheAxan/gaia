import { Text, View } from "react-native";
import { styles } from '@styles/styles'

import { AnswerField } from "@features/form/components/AnswerField";


type ItemProps = {prompt: string, hint: string, questionType: string, children: object, id: number};

export const FormItem = ({prompt, hint, questionType, children, id}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.question}>{prompt}</Text>
      <Text style={styles.hint}>{hint}</Text>
      <AnswerField questionType={questionType} children={children} id={id}/>
    </View>
  );
};