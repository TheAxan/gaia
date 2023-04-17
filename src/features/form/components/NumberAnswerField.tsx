import { View } from "react-native";
import { useState } from "react";
import { styles } from "@styles/styles";
import { SubmitButton } from "@features/form/components/SubmitButton";
import { MinusPlusButtons } from "@features/form/components//MinusPlusButtons";
import { NumberInput } from "@features/form/components//NumberInput";
import { postAnswer } from "@features/form/api/answer";

export const NumberAnswerField = (id: number) => {
    const [field, setField] = useState('0');
    
    return (
      <View style={styles.numberField}>
        <View style={styles.centerRow}>
          <NumberInput field={field} setField={setField}/>
          <MinusPlusButtons target={field} setTarget={setField}/>
        </View>
        <SubmitButton onPress={async (id) => await postAnswer(id, field)}/>
      </View>
    );
  };