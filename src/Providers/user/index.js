import jwt_decode from "jwt-decode";
import axios from "axios";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [userId, setUserId] = useState("");

  const [userName, setUserName] = useState("");
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token){
      const tokenDecoded = jwt_decode(token);
      setUserId(tokenDecoded.user_id);
    }
  },[token]);

  return (
    <UserContext.Provider
      value={{
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
