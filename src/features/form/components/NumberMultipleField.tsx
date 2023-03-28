import { useState } from "react";
import { TextInput, View } from "react-native";

import { MinusPlusButtons } from "@features/form/components/MinusPlusButtons";
import { styles } from "@styles/styles";
import { NumberInput } from "@features/form/components//NumberInput";

export const NumberMultipleField = () => {
  const [field, setField] = useState('0');
    
  return (
    <View style={styles.numberField}>
      <View style={styles.centerRow}>
        <MinusPlusButtons target={field} setTarget={setField}/>
        <NumberInput field={field} setField={setField}/>
      </View>
    </View>
  );
};