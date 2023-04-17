import { styles } from "@styles/styles";
import { View } from "react-native";
import { EmptySquareButton } from "@features/form/components/EmptySquareButton";


type props = {id: number}

export const BinaryAnswerField = ({id}: props) => (
  <View style={styles.binaryField}>
    <EmptySquareButton onPress={() => ''} text={'YES'}/>
    <EmptySquareButton onPress={() => ''} text={'NO'}/>
  </View>
);