import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from 'src/customTypes/Props';
import { registerCall } from "@features/auth/api/register";

export const SignUpScreen = ({ navigation }: Props) => {
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

const styles = StyleSheet.create({
  // alt colors: yellowgreen darkgreen green forestgreen
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "yellowgreen",
    borderRadius: 30,
    width: "70%",
    height: 45,
    margin: 10,
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  
  forgot_button: {
    height: 30,
    margin: 10,
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "limegreen",
  },

  form: {
    flex: 1,
    justifyContent: 'center',
  },
});
