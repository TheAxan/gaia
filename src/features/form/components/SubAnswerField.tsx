import { BinaryMultipleField } from "@features/form/components/BinaryMultipleField";
import { NumberMultipleField } from "@features/form/components/NumberMultipleField";
import { Text } from "react-native";

type props = {
  prompt?: string;
  questionType: string;
  field?: string;
  setField?: React.Dispatch<React.SetStateAction<string>>;
  id: number;
};

export const SubAnswerField = ({
  prompt,
  questionType,
  field,
  setField,
  id,
}: props) => {
  switch (questionType) {
    case "number_multiple":
      return <NumberMultipleField field={field} setField={setField} />;
    case "binary_multiple":
      return <BinaryMultipleField id={id} />;
    default:
      return <Text>Unhandled question questionType {prompt}</Text>;
  }
};
