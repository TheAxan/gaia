import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "@styles/styles";
import { Feather } from '@expo/vector-icons';


type SubmitButtonProps = {
  onPress: ((event: GestureResponderEvent) => void), 
};

export const SubmitButton = ({onPress}: SubmitButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.submitButton}>
    <Feather name="check" size={20} color={'white'}/>
  </TouchableOpacity>
);