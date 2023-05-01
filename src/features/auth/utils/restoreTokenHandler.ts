import { getItemAsync } from "expo-secure-store";

export const restoreTokenHandler = async () => {
  let userToken = null;

  try {
    userToken = await getItemAsync("userToken");
  } catch (e) {
    console.error(e);
  }
  // After restoring token, we may need to validate it in production apps

  return userToken;
};
