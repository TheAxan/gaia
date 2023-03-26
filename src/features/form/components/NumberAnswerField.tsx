import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { styles } from "@styles/styles";


export const NumberAnswerField = () => {
    const [field, setField] = useState('0');
    
    return (
      <View style={styles.numberField}>
        <View style={styles.numberInput}>
          <View style={styles.boxInput}>
            <TextInput
              placeholder={''}
              value={field}
              textAlign='center'
              onChangeText={(textChange) => setField(textChange)}
            />
          </View>
          <TouchableOpacity 
            onPress={() => {
              if (parseInt(field) > 0) {
                setField((parseInt(field)-1).toString())
              };
            }}
          >
            <Feather name="minus" size={20} color={parseInt(field) > 0 ? 'limegreen' : 'grey'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setField((parseInt(field)+1).toString())}
          >
            <Feather name="plus" size={20} color={'limegreen'}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => ''} style={styles.squareButton}>
          <Text style={styles.white}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  };