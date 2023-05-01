import { GestureResponderEvent, TouchableOpacity } from "react-native";

import { styles } from "@styles/styles";
import { Feather } from "@expo/vector-icons";

type props = {
  onPress: (event: GestureResponderEvent) => void;
};

export const YesButton = ({ onPress }: props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.whiteButton, styles.squareButton]}
  >
    <Feather name="check" size={20} color={"limegreen"} />
  </TouchableOpacity>
);
