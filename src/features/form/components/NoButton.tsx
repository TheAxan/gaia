import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { styles } from "@styles/styles";
import { Feather } from "@expo/vector-icons";

type props = {
  onPress: (event: GestureResponderEvent) => void;
};

export const NoButton = ({ onPress }: props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.whiteButton, styles.squareButton]}
  >
    <Feather name="x" size={20} color={"limegreen"} />
  </TouchableOpacity>
);
