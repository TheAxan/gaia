import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { useReducer, useEffect, useMemo } from 'react';
import { deleteItemAsync } from 'expo-secure-store';

import { styles } from '@styles/styles';
import { AuthContext } from '@features/auth/contexts/authContext';
import { authReducer, authReducerInitialState } from '@features/auth/hooks/authReducer';
import { signInHandler } from '@features/auth/utils/signInHandler';
import { signUpHandler } from '@features/auth/utils/signUpHandler';
import { restoreTokenHandler } from '@features/auth/utils/restoreTokenHandler';
import { StackNavigator } from '@components/StackNavigator';
import { CustomStatusBar } from '@components/CustomStatusBar';


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
      <CustomStatusBar/>
      <SafeAreaView style={[styles.appContainer]}>
        <NavigationContainer>
          <AuthContext.Provider value={authContext}>
            <StackNavigator userToken={state.userToken}/>
          </AuthContext.Provider>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default registerRootComponent(App);
