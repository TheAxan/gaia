import { Text, View } from "react-native";
import { styles } from '@styles/styles'

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";


type ItemProps = {prompt: string, hint: string, type: string};
type AnswerFieldProps = {type: string}

const AnswerField = (type: AnswerFieldProps) => {
  switch (type.type) {
    case 'number':
      return <NumberAnswerField/>
    default:
      return <Text>Unhandled question type</Text>
  };
};

export const FormItem = ({prompt, hint, type}: ItemProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.question}>{prompt}</Text>
        <Text style={styles.hint}>{hint}</Text>
        <AnswerField type={type}/>
      </View>
    );
  };