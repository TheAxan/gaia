import { Text, View } from "react-native";
import { styles } from '@styles/styles'

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";
import { BinaryAnswerField } from "@features/form/components/BinaryAnswerField";
import { MultipleAnswerField } from "@features/form/components/MultipleAnswerField";

type ItemProps = {prompt: string, hint: string, questionType: string, children: object, id: number};
type AnswerFieldProps = {questionType: string, children: object, id: number}

const AnswerField = ({questionType, children, id}: AnswerFieldProps) => {
  switch (questionType) {
    case 'number':
      return <NumberAnswerField id={id}/>
    case 'binary':
      return <BinaryAnswerField id={id}/>
    case 'multiple':
      return <MultipleAnswerField  id={id} childrenIds={children}/>
    default:
      return <Text>Unhandled question questionType</Text>
  };
};

export const FormItem = ({prompt, hint, questionType, children, id}: ItemProps) => {
    return (
      <View style={styles.item}>
        <Text style={styles.question}>{prompt}</Text>
        <Text style={styles.hint}>{hint}</Text>
        <AnswerField questionType={questionType} children={children} id={id}/>
      </View>
    );
  };