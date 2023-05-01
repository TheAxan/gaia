import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@styles/styles";

type props = {
  target: string;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  quantity?: number;
};

export const MinusPlusButtons = ({
  target,
  setTarget,
  quantity = 1,
}: props) => (
  <View style={styles.centerRow}>
    <TouchableOpacity
      onPress={() => {
        if (parseFloat(target) - quantity >= 0) {
          setTarget((parseFloat(target) - quantity).toString());
        } else if (parseFloat(target) > 0) {
          setTarget("0");
        }
      }}
    >
      <Feather
        name="minus"
        size={30}
        color={parseFloat(target) > 0 ? "limegreen" : "grey"}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => setTarget((parseFloat(target) + quantity).toString())}
    >
      <Feather name="plus" size={30} color={"limegreen"} />
    </TouchableOpacity>
  </View>
);
