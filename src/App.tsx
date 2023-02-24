import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { registerRootComponent } from 'expo';

import { useReducer, useEffect, useMemo } from 'react';
import { RootStackParamList } from '@customTypes/RootStackParamList';
import { SignInScreen } from '@features/auth/components/SignInScreen';
import { SignUpScreen } from '@features/auth/components/SignUpScreen';
import { ResetPassword } from '@features/auth/components/ResetPassword';
import { FormScreen } from '@features/form/components/FormScreen';
import { ScrollTab } from '@features/scroll/components/ScrollTab';
import { SearchTab } from '@features/search/components/SearchTab';
import { ProfileTab } from '@features/profile/components/ProfileTab';
import { styles } from '@styles/styles';
import { AuthContext } from '@features/auth/contexts/authContext';
import { loginCall } from "@features/auth/api/login";
import { registerCall } from '@features/auth/api/register';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


function App() {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: any; token: any; }) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  const authContext = useMemo(
    () => ({
      signIn: async (username: string, password: string) => {
        // After getting token, we need to persist the token using `SecureStore`

        let token;
        try {
          token = await loginCall(username, password);
        } catch(error: any) {
          if (error.response.data.non_field_errors 
              == "Unable to log in with provided credentials."
          ) {
            alert('Unable to log in with provided credentials.')
          } else {
            console.log(error);
          };
        };
        
        dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: async () => {
        // we need to remove the token from 'SecureStore'
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (username: string, password: string) => {
        // After getting token, we need to persist the token using `SecureStore`

        let token;
        try {
          token = await registerCall(username, password);
        } catch(error: any) {
          if (error.response.data.username
              == "A user with that username already exists."
          ) {
            alert("A user with that username already exists.")
          } else {
            console.log(error);
          };
        };

        dispatch({ type: 'SIGN_IN', token: token });
      },
    }),
    []
  );

  return (
    <>
      <StatusBar barStyle = "light-content" hidden = {false} 
                 backgroundColor = "black" translucent = {true}
      />
      <SafeAreaView style={[styles.container]}>
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              { 
                state.userToken == null ? (
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
          </AuthContext.Provider>
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
