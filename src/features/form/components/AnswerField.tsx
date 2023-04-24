import { Text } from "react-native";

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";
import { BinaryAnswerField } from "@features/form/components/BinaryAnswerField";
import { MultipleAnswerField } from "@features/form/components/MultipleAnswerField";


type props = {questionType: string, children: {[index: number]: number}, id: number}

export const AnswerField = ({questionType, children, id}: props) => {
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