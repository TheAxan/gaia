import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "@styles/styles";


type EmptySquareButtonProps = {
  onPress: ((event: GestureResponderEvent) => void), 
  text: string
};

export const EmptySquareButton = ({onPress, text}: EmptySquareButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.emptySquareButton}>
    <Text style={styles.limegreenPrompt}>{text}</Text>
  </TouchableOpacity>
);