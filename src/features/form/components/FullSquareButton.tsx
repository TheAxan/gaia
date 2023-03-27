import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "@styles/styles";


type FullSquareButtonProps = {
  onPress: ((event: GestureResponderEvent) => void), 
  text: string
};

export const FullSquareButton = ({onPress, text}: FullSquareButtonProps) => (
  <TouchableOpacity onPress={onPress} style={styles.fullSquareButton}>
    <Text style={styles.whitePrompt}>{text}</Text>
  </TouchableOpacity>
);