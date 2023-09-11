import { Text } from "react-native";
import { useContext } from "react";

import { NumberAnswerField } from "@features/form/components/NumberAnswerField";
import { BinaryAnswerField } from "@features/form/components/BinaryAnswerField";
import { MultipleNumberField } from "@features/form/components/MultipleNumberField";
import { MultipleBinaryField } from "@features/form/components/MultipleBinaryField";
import { FormItemContext } from "@features/form/context/formItemContext";

export const AnswerField = () => {
  const { questionType } = useContext(FormItemContext);

  switch (questionType) {
    case "number":
      return <NumberAnswerField />;
    case "binary":
      return <BinaryAnswerField />;
    case "multiple_number":
      return <MultipleNumberField />;
    case "multiple_binary":
      return <MultipleBinaryField />;
    default:
      return <Text>Unhandled question questionType</Text>;
  }
};
