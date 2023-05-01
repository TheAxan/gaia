import { Text } from "react-native";

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";
import { BinaryAnswerField } from "@features/form/components/BinaryAnswerField";
import { MultipleNumberField } from "@features/form/components/MultipleNumberField";
import { MultipleBinaryField } from "@features/form/components/MultipleBinaryField";

type props = {
  questionType: string;
  children: { [index: number]: number };
  id: number;
};

export const AnswerField = ({ questionType, children, id }: props) => {
  switch (questionType) {
    case "number":
      return <NumberAnswerField id={id} />;
    case "binary":
      return <BinaryAnswerField id={id} />;
    case "multiple_number":
      return <MultipleNumberField childrenIds={children} />;
    case "multiple_binary":
      return <MultipleBinaryField childrenIds={children} />;
    default:
      return <Text>Unhandled question questionType</Text>;
  }
};
