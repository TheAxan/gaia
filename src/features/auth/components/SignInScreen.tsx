import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from 'src/customTypes/Props';
import { styles } from "@styles/styles";
import { AuthContext } from "@features/auth/contexts/authContext";

export const SignInScreen = ({ navigation }: Props) => {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.loginContainer}>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={'Username'}
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={'Password'}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.text_button}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.text_button}>Don't have an account yet?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} 
                        onPress={() => signIn(usernameInput, passwordInput)}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
};
