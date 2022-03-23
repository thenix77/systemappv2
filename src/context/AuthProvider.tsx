import React from "react"
import AuthContext from "./AuthContextType"

import { fakeAuthProvider } from "../lib/auth"

export function AuthProvider({children}: { children:React.ReactNode}){

  let [user, setUser] = React.useState<any>(null)

  let signIn = (newUser:string , callback:VoidFunction) =>{
    return fakeAuthProvider.signIn(()=>{
      setUser(newUser)
      callback()
    })
  }

  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };


  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}