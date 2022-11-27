import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
let isSignedOut = true;


function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {true}/>
      <SafeAreaView style={[styles.container]}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            { 
              isSignedOut ? (
                <>
                  <Stack.Screen name="SignIn" component={SignInScreen} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen name="ResetPassword" component={ResetPassword} />
                </>
              ) : (
                <>
                  <Stack.Screen name='HomePage' component={MainScreen}></Stack.Screen>
                  <Stack.Screen name='form' component={FormScreen}></Stack.Screen>
                </>
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};


const MainScreen = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "users";
            } else if (route.name === 'Search') {
              iconName = "search";
            } else if (route.name === 'Profile') {
              iconName = "user";
            }

            return <Feather name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'limegreen',
          tabBarInactiveBackgroundColor: 'limegreen',
          tabBarShowLabel: false,

          headerStyle: {backgroundColor: 'limegreen',},
          headerTintColor: 'white'
        })}
      >
        <Tab.Screen name='Home' component={ScrollTab}></Tab.Screen>
        <Tab.Screen name='Search' component={SearchTab}></Tab.Screen>
        <Tab.Screen name='Profile' component={ProfileTab}></Tab.Screen>
      </Tab.Navigator>
  );
};

const FormScreen = () => {
  return (
    <View style={[styles.form]}>
      <Text>This is the form screen</Text>
    </View>
  );
};


const ScrollTab = () => {
  return (
    <Text>This is the ScrollTab</Text>
  );
};

const SearchTab = () => {
  return (
    <Text>This is the SearchTab</Text>
  );
};

const ProfileTab = () => {
  return (
    <Text>This is the ProfileTab</Text>
  );
};

const SignInScreen = () => {
  return (
    <>
      <Text>Sign in screen</Text>
    </>
  )
}

const SignUpScreen = () => {
  return (
    <>
      <Text>Sign up screen</Text>
    </>
  )
}

const ResetPassword = () => {
  return (
    <>
      <Text>password reset screen</Text>
    </>
  )
}

const blank = () => {
  return (
    <>
    </>
  )
}

const styles = StyleSheet.create({
  // alt colors: yellowgreen darkgreen green forestgreen
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
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
