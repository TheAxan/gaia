import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { useReducer, useEffect, useMemo } from 'react';
import { deleteItemAsync } from 'expo-secure-store';

import { RootStackParamList } from '@customTypes/RootStackParamList';
import { SignInScreen } from '@features/auth/components/SignInScreen';
import { SignUpScreen } from '@features/auth/components/SignUpScreen';
import { PasswordResetScreen } from '@features/auth/components/PasswordResetScreen';
import { FormScreen } from '@features/form/components/FormScreen';
import { styles } from '@styles/styles';
import { AuthContext } from '@features/auth/contexts/authContext';
import { authReducer, authReducerInitialState } from '@features/auth/hooks/authReducer';
import { MainScreen } from '@components/MainScreen';
import { signInHandler } from '@features/auth/utils/signInHandler';
import { signUpHandler } from '@features/auth/utils/signUpHandler';
import { restoreTokenHandler } from '@features/auth/utils/restoreTokenHandler';


const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {
  const [state, dispatch] = useReducer(authReducer, authReducerInitialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      dispatch({ type: 'RESTORE_TOKEN', token: await restoreTokenHandler() });
    };
    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (username: string, password: string) => {
      dispatch({
        type: 'SIGN_IN',
        token: await signInHandler(username, password) 
      });
    },
    signOut: async () => {
      await deleteItemAsync('userToken')
        .catch((e) => {console.log(e)});
      dispatch({ type: 'SIGN_OUT' });
    },
    signUp: async (username: string, password: string) => {
      dispatch({
        type: 'SIGN_IN',
        token: await signUpHandler(username, password)
      });
    },
  }), []);

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
                    <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
                  </>
                ) : (
                  <>
                    <Stack.Screen name='Main' component={MainScreen}></Stack.Screen>
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
