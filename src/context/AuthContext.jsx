import React, { useState } from "react";
import Auth from "./context";
import { account } from "../Appwrite/client";

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  //   Function for sign-in
  const signup = async ({ name, email, password }) => {
    const response = await account.create("unique()", email, password, name);
    console.log(response);
    return response;
  };

  // Function for signin

  const signIn = async ({ email, password }) => {
    await account.createEmailPasswordSession(email, password);
    const userData = await account.get();
    setUser(userData);
    console.log(userData);
    sessionStorage.setItem("currentUser", JSON.stringify(userData.$id));
  };
  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession("current");
      sessionStorage.removeItem("currentUser");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Auth.Provider value={{ signup, signIn, logout }}>{children}</Auth.Provider>
  );
};

export default AuthContext;
