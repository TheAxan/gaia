import { styles } from "@styles/styles";
import { TextInput, View } from "react-native";


type props = {field: string, setField: React.Dispatch<React.SetStateAction<string>>}

export const NumberInput = ({field, setField}: props) => (
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