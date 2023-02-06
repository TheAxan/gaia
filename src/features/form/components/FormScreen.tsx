import { StyleSheet, Text, View } from "react-native";


export const FormScreen = () => {
  return (
    <View style={[styles.form]}>
      <Text>This is the form screen</Text>
    </View>
  );
};
  
const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    },
  });