import { useState } from "react";
import { View } from "react-native";

import { MinusPlusButtons } from "@features/form/components/MinusPlusButtons";
import { styles } from "@styles/styles";
import { NumberInput } from "@features/form/components//NumberInput";

type props = {
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
};

export const NumberMultipleField = ({ field, setField }: props) => {
  return (
    <View style={styles.numberField}>
      <View style={styles.centerRow}>
        <MinusPlusButtons target={field} setTarget={setField} />
        <NumberInput field={field} setField={setField} />
      </View>
    </View>
  );
};
