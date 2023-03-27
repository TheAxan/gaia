import { View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import { styles } from "@styles/styles";
import { FullSquareButton } from "@features/form/components/FullSquareButton";


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
              keyboardType='numeric'
              onChangeText={(textChange) => setField(textChange)}
              // commas and dots mess stuff up
            />
          </View>
          <TouchableOpacity 
            onPress={() => {
              if (parseInt(field) > 0) {
                setField((parseInt(field)-1).toString())
              };
            }}
          >
            <Feather name="minus" size={30} color={parseInt(field) > 0 ? 'limegreen' : 'grey'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setField((parseInt(field)+1).toString())}
          >
            <Feather name="plus" size={30} color={'limegreen'}/>
          </TouchableOpacity>
        </View>
        <FullSquareButton onPress={() => ''} text={'SAVE'}/>
      </View>
    );
  };