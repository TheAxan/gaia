import { styles } from "@styles/styles";
import { View } from "react-native";
import { YesButton } from "@features/form/components/YesButton";
import { NoButton } from "@features/form/components/NoButton";
import { postAnswer } from "@features/form/api/answer";


type props = {id: number}

export const BinaryAnswerField = ({id}: props) => (
  <View style={styles.binaryField}>
    <YesButton onPress={async () => await postAnswer(id, {bool: true})}/>
    <NoButton onPress={async () => await postAnswer(id, {bool: false})}/>
  </View>
);