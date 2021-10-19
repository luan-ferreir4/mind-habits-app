import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  const getUserId = (token) => {
    const tokenDecoded = jwt_decode(token);
    setUserId(JSON.stringify(tokenDecoded.user_id));
  };

  useEffect(() => {
    const obtainToken = localStorage.getItem("token");

    obtainToken && getUserId(obtainToken);
  }, []);

  //   console.log("user id no provider user", userId);

  return (
    <UserContext.Provider
      value={{
        userId,
        getUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
