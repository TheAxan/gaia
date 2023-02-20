import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from 'src/customTypes/Props';
import { registerCall } from "@features/auth/api/register";
import { styles } from "@styles/styles";

export const SignUpScreen = ({ navigation }: Props) => {
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
      
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.forgot_button}>Already have an account?</Text>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.loginBtn} 
                        onPress={() => registerCall(usernameInput, passwordInput)}
      >
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  )
};
