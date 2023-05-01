import { NumberMultipleField } from "@features/form/components/NumberMultipleField";
import { Text } from "react-native";

type props = { prompt?: string; questionType: string };

export const SubAnswerField = ({ prompt, questionType }: props) => {
  switch (questionType) {
    case "number_multiple":
      return <NumberMultipleField />;
    default:
      return <Text>Unhandled question questionType {prompt}</Text>;
  }
};
