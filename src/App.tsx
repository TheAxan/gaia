import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { useReducer, useEffect, useMemo } from 'react';
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';

import { RootStackParamList } from '@customTypes/RootStackParamList';
import { SignInScreen } from '@features/auth/components/SignInScreen';
import { SignUpScreen } from '@features/auth/components/SignUpScreen';
import { ResetPassword } from '@features/auth/components/ResetPassword';
import { FormScreen } from '@features/form/components/FormScreen';
import { styles } from '@styles/styles';
import { AuthContext } from '@features/auth/contexts/authContext';
import { loginCall } from "@features/auth/api/login";
import { registerCall } from '@features/auth/api/register';
import { authReducer, authReducerInitialState } from '@features/auth/hooks/authReducer';
import { MainScreen } from '@components/mainScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  const [state, dispatch] = useReducer(authReducer, authReducerInitialState);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken = null;

      try {
        userToken = await getItemAsync('userToken');
      } catch (e) {
        console.error(e)
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (username: string, password: string) => {
        let token;

        try {
          token = await loginCall(username, password);
          await setItemAsync('userToken', token);
        } catch(e: any) {
          if (!e.response) {
            alert("Couldn't reach server");
          } else if (e.response.data.non_field_errors 
                     == "Unable to log in with provided credentials.") {
            alert('Unable to log in with provided credentials.');
          } else if (e.response.data.password == "This field may not be blank.") {
            alert('Password missing.');
          } else {
            console.log(e);
          };
        };

        dispatch({ type: 'SIGN_IN', token: token });
      },

      signOut: async () => {
        await deleteItemAsync('userToken')
          .catch((e) => {console.log(e)});
        dispatch({ type: 'SIGN_OUT' });
      },

      signUp: async (username: string, password: string) => {
        let token;

        try {
          token = await registerCall(username, password);
          await setItemAsync('userToken', token);
        } catch(e: any) {
          if (!e.response) {
            alert("Couldn't reach server");
          } else if (e.response.data.username
                     == "A user with that username already exists.") {
            alert("A user with that username already exists.");
          } else if (e.response.data.password == "This field may not be blank.") {
            alert('Password missing.');
          } else {
            console.error(e);
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
      <SafeAreaView style={[styles.appContainer]}>
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

export default registerRootComponent(App);
