import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // alt colors: yellowgreen darkgreen green forestgreen
  appContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  pillInput: {
    backgroundColor: "yellowgreen",
    borderRadius: 30,
    width: "70%",
    height: 45,
    margin: 10,
    padding: 10
  },
  
  textButton: {
    margin: 10,
  },
  
  pillButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "limegreen",
  },

  form: {
    flex: 1,
    justifyContent: 'center',
  },
});