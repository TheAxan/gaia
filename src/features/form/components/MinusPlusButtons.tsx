import { TouchableOpacity, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { styles } from "@styles/styles";

export const MinusPlusButtons = ({target, setTarget}: any) => (
  <View style={styles.centerRow}>
    <TouchableOpacity 
      onPress={() => {
        if (parseInt(target) > 0) {
          setTarget((parseInt(target)-1).toString())
        };
      }}
    >
      <Feather name="minus" size={30} color={parseInt(target) > 0 ? 'limegreen' : 'grey'}/>
    </TouchableOpacity>
    <TouchableOpacity 
      onPress={() => setTarget((parseInt(target)+1).toString())}
    >
      <Feather name="plus" size={30} color={'limegreen'}/>
    </TouchableOpacity>
  </View>
);