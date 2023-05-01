import { deleteItemAsync } from "expo-secure-store";

export const signOutHandler = async () => {
  await deleteItemAsync("userToken").catch((e) => {
    console.error(e);
  });
};
