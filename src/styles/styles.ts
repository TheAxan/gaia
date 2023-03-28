
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

  item: {
    backgroundColor: 'lightgrey',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    
  },
  
  numberInput: {
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    borderColor: 'limegreen',
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
    color: 'limegreen',
  },

  numberField: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  centerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  emptySquareButton: {
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    borderColor: 'limegreen',
    borderWidth: 1,
    padding: 10,
    height: 40,
    
  },

  fullSquareButton: {
    backgroundColor: 'limegreen',
    borderRadius: 10,
    padding: 10,
    height: 40,
  },

  whitePrompt: {
    color: 'whitesmoke',
    fontSize: 16,
  },

  limegreenPrompt: {
    color: 'limegreen',
    fontSize: 16,
  },

  binaryField: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 8,
  },

  flexRow: {
    flexDirection: 'row',
  },
});