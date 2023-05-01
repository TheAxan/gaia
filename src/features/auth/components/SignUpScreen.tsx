import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Props } from "src/customTypes/Props";
import { styles } from "@styles/styles";
import { AuthContext } from "@features/auth/contexts/authContext";

export const SignUpScreen = ({ navigation }: Props) => {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const { signUp } = useContext(AuthContext);

  return (
    <View style={styles.centerContainer}>
      <View style={styles.pillInput}>
        <TextInput
          placeholder={"Username"}
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.pillInput}>
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.textButton}>Already have an account?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.pillButton}
        onPress={() => signUp(usernameInput, passwordInput)}
      >
        <Text>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};
