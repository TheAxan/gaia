import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/customTypes/RootStackParamList";


type ProfileScreeningNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type Props = {
  navigation: ProfileScreeningNavigationProp;
};

