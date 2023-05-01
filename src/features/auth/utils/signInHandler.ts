import { setItemAsync } from "expo-secure-store";

import { loginCall } from "@features/auth/api/login";

export const signInHandler = async (username: string, password: string) => {
  let token;

  try {
    token = await loginCall(username, password);
    await setItemAsync("userToken", token);
  } catch (e: any) {
    if (!e.response) {
      alert("Couldn't reach server");
    } else if (
      e.response.data.non_field_errors ==
      "Unable to log in with provided credentials."
    ) {
      alert("Unable to log in with provided credentials.");
    } else if (e.response.data.password == "This field may not be blank.") {
      alert("Password missing.");
    } else {
      console.log(e);
    }
  }

  return token;
};
