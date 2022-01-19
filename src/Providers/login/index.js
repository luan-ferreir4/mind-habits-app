import axios from "axios";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Alert } from "@material-ui/lab";

import { createContext, useState } from "react";
import { Snackbar } from "@material-ui/core";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(() => {
    const isLoged = localStorage.getItem("token") || false;
    if (isLoged) {
      return true;
    } else {
      return false;
    }
  });
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  // const notifySuccessLogin = () => toast.success("Login realizado!");
  const notifyErrorLogin = () => toast.error("Erro no login!");

  const login = (data, history) => {
    const { username, password } = data;
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        setIsLoged(true);
        // notifySuccessLogin();
        history.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          notifyErrorLogin(error.response);
        }
      });
  };

  useEffect(() => {
    if (isLoged) {
      const tokenDecoded = jwt_decode(localStorage.getItem("token"));
      setUserId(tokenDecoded.user_id);
    }
  }, [isLoged]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${userId}/`)
        .then((res) => setUserName(res.data.username))
        .catch((error) => console.log(error.message));
    }
  }, [userId]);

  const logout = (history) => {
    setIsLoged(false);
    localStorage.clear();
    setUserId("");
    history.push("/");
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        userName,
        isLoged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
