import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { RootStackParamList } from '@customTypes/RootStackParamList';
import { SignInScreen } from '@features/auth/components/SignInScreen';
import { SignUpScreen } from '@features/auth/components/SignUpScreen';
import { PasswordResetScreen } from '@features/auth/components/PasswordResetScreen';
import { FormScreen } from '@features/form/components/FormScreen';
import { MainScreen } from '@components/MainScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = (props: {userToken: string}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      { 
        props.userToken == null ? (
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
  );
};