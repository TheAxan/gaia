import { styles } from "@styles/styles";
import { View } from "react-native";
import { YesButton } from "@features/form/components/YesButton";
import { NoButton } from "@features/form/components/NoButton";


type props = {id: number}

export const BinaryAnswerField = ({id}: props) => (
  <View style={styles.binaryField}>
    <YesButton onPress={() => ''}/>
    <NoButton onPress={() => ''}/>
  </View>
);