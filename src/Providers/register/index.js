import axios from "axios";
import toast from "react-hot-toast";

import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [errorRegs, setErrorRegs] = useState("");
  const notifySuccessRegister = () => toast.success("Registro realizado!");
  const notifyErrorRegister = () => toast.error("Erro no registro!");

  const handleRegister = (data, history) => {
    const { username, email, password } = data;
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        notifySuccessRegister();
        history.push("/login");
      })
      .catch((e) => {
        setErrorRegs(e.response.data.message);
        notifyErrorRegister();
      });
  };

  return (
    <RegisterContext.Provider
      value={{
        errorRegs,
        handleRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
