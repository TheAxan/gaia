import { setItemAsync } from "expo-secure-store";

import { registerCall } from "@features/auth/api/register";

export const signUpHandler = async (username: string, password: string) => {
  let token;

  try {
    token = await registerCall(username, password);
    await setItemAsync("userToken", token);
  } catch (e: any) {
    if (!e.response) {
      alert("Couldn't reach server");
    } else if (
      e.response.data.username == "A user with that username already exists."
    ) {
      alert("A user with that username already exists.");
    } else if (e.response.data.password == "This field may not be blank.") {
      alert("Password missing.");
    } else {
      console.error(e);
    }
  }

  return token;
};
