import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from 'src/customTypes/Props';
import { loginCall } from "@features/auth/api/login";
import { styles } from "@styles/styles";

export const SignInScreen = ({ navigation }: Props) => {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");

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
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.forgot_button}>Don't have an account yet?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} 
                        onPress={() => loginCall(usernameInput, passwordInput)}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
};
