import axios from "axios";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";

  const [userId, setUserId] = useState("");

  const [auth, setAuth] = useState(token);

  const [userName, setUserName] = useState("");

  const notifySuccessLogin = () => toast.success("Login realizado!");
  const notifyErrorLogin = () => toast.error("Erro no login!");

  const login = (data, history) => {
    const { username, password } = data;
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.clear()
        localStorage.setItem("token", JSON.stringify(response.data.access));
        notifySuccessLogin();
        history.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          notifyErrorLogin(error.response);
        }
      });
    };
    
    useEffect(() => {
      if(token){
        const tokenDecoded = jwt_decode(token);
        setUserId(tokenDecoded.user_id);
      }
    },[token]);

    useEffect(() => {
    if (userId) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${userId}/`)
        .then((res) => setUserName(res.data.username))
        .catch((error) => console.log(error.message));
    }
  },[userId]);

  const logout = (history) => {
    localStorage.clear();
    setAuth("");
    setUserId("")
    history.push("/");
  };

  return (
    <LoginContext.Provider
      value={{
        auth,
        setAuth,
        login,
        logout,
        userName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
