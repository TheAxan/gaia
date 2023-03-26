import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "@styles/styles";

export const NumberAnswerField = () => {
    const [field, setField] = useState('');
    
    return (
      <View style={styles.numberInput}>
        <View style={styles.boxInput}>
          <TextInput
            placeholder={''}
            textAlign='center'
            onChangeText={(field) => setField(field)}
          />
        </View>
        <TouchableOpacity onPress={() => ''} style={styles.squareButton}>
          <Text style={styles.white}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  };