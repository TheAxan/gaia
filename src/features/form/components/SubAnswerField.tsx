import { NumberMultipleField } from "@features/form/components/NumberMultipleField";
import { Text } from "react-native";

export const SubAnswerField = ({prompt, id, questionType}: any) => {
  switch (questionType) {
    case 'number_multiple':
      return <NumberMultipleField id={id}/>
    default:
      return <Text>Unhandled question questionType {prompt}</Text>
  };
};