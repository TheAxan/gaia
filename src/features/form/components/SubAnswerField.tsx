import { NumberMultipleField } from "@features/form/components/NumberMultipleField";
import { Text } from "react-native";

type props = {
  prompt?: string;
  questionType: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
};

export const SubAnswerField = ({
  prompt,
  questionType,
  field,
  setField,
}: props) => {
  switch (questionType) {
    case "number_multiple":
      return <NumberMultipleField field={field} setField={setField} />;
    default:
      return <Text>Unhandled question questionType {prompt}</Text>;
  }
};
