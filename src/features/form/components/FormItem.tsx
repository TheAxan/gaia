import { Text, View } from "react-native";
import { styles } from '@styles/styles'

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";
import { BinaryAnswerField } from "@features/form/components/BinaryAnswerField";
import { MultipleAnswerField } from "@features/form/components/MultipleAnswerField";


type ItemProps = {prompt: string, hint: string, questionType: string, children: any};
type AnswerFieldProps = {questionType: string, children: any}

const AnswerField = ({questionType, children}: AnswerFieldProps) => {
  switch (questionType) {
    case 'number':
      return <NumberAnswerField/>
    case 'binary':
      return <BinaryAnswerField/>
    case 'multiple':
      return <MultipleAnswerField childrenIds={children}/>
    default:
      return <Text>Unhandled question questionType</Text>
  };
};

export const FormItem = ({prompt, hint, questionType, children}: ItemProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.question}>{prompt}</Text>
        <Text style={styles.hint}>{hint}</Text>
        <AnswerField questionType={questionType} children={children}/>
      </View>
    );
  };