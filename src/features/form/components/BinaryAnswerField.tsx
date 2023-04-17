import { styles } from "@styles/styles";
import { View } from "react-native";
import { EmptySquareButton } from "@features/form/components/EmptySquareButton";

export const BinaryAnswerField = (id: number) => (
  <View style={styles.binaryField}>
    <EmptySquareButton onPress={() => ''} text={'YES'}/>
    <EmptySquareButton onPress={() => ''} text={'NO'}/>
  </View>
);