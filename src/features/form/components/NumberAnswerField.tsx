import { View, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "@styles/styles";
import { FullSquareButton } from "@features/form/components/FullSquareButton";
import { MinusPlusButtons } from "@features/form/components//MinusPlusButtons";
import { NumberInput } from "@features/form/components//NumberInput";


export const NumberAnswerField = () => {
    const [field, setField] = useState('0');
    
    return (
      <View style={styles.numberField}>
        <View style={styles.centerRow}>
          <NumberInput field={field} setField={setField}/>
          <MinusPlusButtons target={field} setTarget={setField}/>
        </View>
        <FullSquareButton onPress={() => ''} text={'SAVE'}/>
      </View>
    );
  };