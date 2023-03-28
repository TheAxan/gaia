import { styles } from "@styles/styles";
import { TextInput, View } from "react-native";

export const NumberInput = ({field, setField}: any) => (
  <View style={styles.numberInput}>
    <TextInput
      placeholder={''}
      value={field}
      textAlign='center'
      keyboardType='numeric'
      onChangeText={(textChange) => setField(textChange)}
      // commas and dots mess stuff up
    />
  </View>
);