import { createContext } from "react";


export const AuthContext = createContext({
  signIn: (_usernameInput:string, _passwordInput:string) => {},
  signUp: (_usernameInput:string, _passwordInput:string) => {},
  signOut: () => {},
});