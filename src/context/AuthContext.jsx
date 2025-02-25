import React, { useState } from "react";
import Auth from "./context";
import { account } from "../Appwrite/client";

const AuthContext = ({ children }) => {
  //   const [user, setUser] = useState(null);

  //   Function for sign-in

  const signup = async ({ name, email, password }) => {
    const response = await account.create("unique()", email, password, name);
    console.log(response);
    return response;
  };

  return <Auth.Provider value={{ signup }}>{children}</Auth.Provider>;
};

export default AuthContext;
