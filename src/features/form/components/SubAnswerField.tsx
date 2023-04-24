import { NumberMultipleField } from "@features/form/components/NumberMultipleField";
import { Text } from "react-native";


type props = {prompt: string, id: number, questionType: string}

export const SubAnswerField = ({prompt, id, questionType}: props) => {
  switch (questionType) {
    case 'number_multiple':
      return <NumberMultipleField id={id}/>
    default:
      return <Text>Unhandled question questionType {prompt}</Text>
  };
};