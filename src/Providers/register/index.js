import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router";
// import { Redirect } from "react-router";
import toast from "react-hot-toast";

export const RegisterContext = createContext([]);

export const RegisterProvider = ({ children }) => {
  const history = useHistory();
  const [errorRegs, setErrorRegs] = useState("");
  const notifySuccessRegister = () => toast.success("Registro realizado!");
  const notifyErrorRegister = () => toast.error("Erro ao criar conta!");

  const handleRegister = (data) => {
    // console.log(data);
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response.data);
        notifySuccessRegister();
        return history.push("/login");
      })
      .catch((e) => {
        console.log("error", e.response.data.message);
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
