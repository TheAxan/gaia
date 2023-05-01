import { View } from "react-native";
import { useState } from "react";
import { styles } from "@styles/styles";
import { SubmitButton } from "@features/form/components/SubmitButton";
import { MinusPlusButtons } from "@features/form/components//MinusPlusButtons";
import { NumberInput } from "@features/form/components//NumberInput";
import { postAnswer } from "@features/form/api/answer";

type props = { id: number };

export const NumberAnswerField = ({ id }: props) => {
  const [count, setCount] = useState("0");

  return (
    <View style={styles.numberField}>
      <View style={styles.centerRow}>
        <NumberInput field={count} setField={setCount} />
        <MinusPlusButtons target={count} setTarget={setCount} />
      </View>
      <SubmitButton
        onPress={async () => await postAnswer(id, { float: count })}
      />
    </View>
  );
};
