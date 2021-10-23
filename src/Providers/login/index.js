import axios from "axios";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  
  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState(token);

  const notifySuccessLogin = () => toast.success("Login realizado!");
  const notifyErrorLogin = () => toast.error("Erro no login!");

  const handleLogin = (data, history) => {
    const { username, password } = data;
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        const tokenDecoded = jwt_decode(response.data.access);
        notifySuccessLogin();
        setAuth(tokenDecoded);
        history.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          notifyErrorLogin(error.response);
        }
      });
  };

  return (
    <LoginContext.Provider
      value={{
        auth,
        setAuth,
        handleLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
