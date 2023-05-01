import { Text, View } from "react-native";

import { styles } from "@styles/styles";
import { SubAnswerField } from "@features/form/components/SubAnswerField";

type props = {
  prompt: string;
  questionType: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
};

export const SubQuestions = ({
  prompt,
  questionType,
  field,
  setField,
}: props) => {
  return (
    <View style={styles.centerRow}>
      <SubAnswerField
        questionType={questionType}
        field={field}
        setField={setField}
      />
      <Text>{prompt}</Text>
    </View>
  );
};
