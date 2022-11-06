import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { Feather } from '@expo/vector-icons';


function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {true}/>
      <SafeAreaView style={[styles.container]} >
        <View style={[styles.box]}></View>
        <View style={[styles.box]} >
          <Feather name="users" size={40} color="honeydew" />
          <Feather name="search" size={40} color="white" />
          <Feather name="user" size={40} color="floralwhite" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  // alt colors: yellowgreen darkgreen green forestgreen
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  box: {
    width: 'auto',
    height: 60,
    backgroundColor: 'limegreen',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;