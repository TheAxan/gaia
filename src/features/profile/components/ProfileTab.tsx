import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "@styles/styles";
import { AuthContext } from "@features/auth/contexts/authContext";

export const ProfileTab = () => {
  const { signOut } = useContext(AuthContext);
  
  return (
    <>
      <Text>This is the ProfileTab</Text>
      <TouchableOpacity style={styles.textButton} onPress={() => signOut()}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </>
  );
};