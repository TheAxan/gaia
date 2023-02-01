import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  // list navigation names here
  SignIn: undefined,
  SignUp: undefined,
  ResetPassword: undefined,
  HomePage: undefined,
  form: undefined,
  
  Profile: { name: string };
};

type ProfileScreeningNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type Props = {
  navigation: ProfileScreeningNavigationProp;
};

