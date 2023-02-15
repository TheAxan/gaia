import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from 'src/customTypes/Props';
import { loginCall } from "@features/auth/api/login";
import { styles } from "@styles/styles";

export const SignInScreen = ({ navigation }: Props) => {
  const [usernameInput, setUsername] = useState("");
  const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username");
  const [passwordInput, setPassword] = useState("");
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

  return (
    <View style={styles.loginContainer}>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={usernamePlaceholder}
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
          onFocus={() => setUsernamePlaceholder(' ')}
          onBlur={() => {if (usernameInput == '') {setUsernamePlaceholder('Username')}}}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={passwordPlaceholder}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          onFocus={() => setPasswordPlaceholder(' ')}
          onBlur={() => {if (passwordInput == '') {setPasswordPlaceholder('Password')}}}
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
