import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';

import { RootStackParamList } from '@customTypes/RootStackParamList';
import { SignInScreen } from '@features/auth/components/SignInScreen';
import { SignUpScreen } from '@features/auth/components/SignUpScreen';
import { ResetPassword } from '@features/auth/components/ResetPassword';
import { FormScreen } from '@features/form/components/FormScreen';
import { ScrollTab } from '@features/scroll/components/ScrollTab';
import { SearchTab } from '@features/search/components/SearchTab';
import { ProfileTab } from '@features/profile/components/ProfileTab';
import { styles } from '@styles/styles';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
let isSignedOut = true;


function App() {
  return (
    <>
      <StatusBar barStyle = "light-content" hidden = {false} 
                 backgroundColor = "black" translucent = {true}
      />
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


export default registerRootComponent(App);
