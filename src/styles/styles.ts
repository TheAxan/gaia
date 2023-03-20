
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

  item: {
    backgroundColor: 'lightgrey',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    
  },
  
  boxInput: {
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 8,
    padding: 2,
    width: 50,
  },

  hint: {
    color: 'grey',
    textAlign: "justify",
    fontSize: 10,
  },

  question: {
    textAlign: "justify",
  },
});