import { useHistory } from "react-router";
import {
  ButtonHomeNav,
  ButtonSubmit,
} from "../../Styles/ComponentsStyle/ButtonForm";

export const ButtonForm = ({ buttonFunction }) => {
  const history = useHistory();

  const handleClick = () => {
    if (buttonFunction === "redirectToRegister") {
      return history.push("/register");
    } else if (buttonFunction === "redirectToLogin") {
      return history.push("/login");
    }
  };

  return (
    <>
      {buttonFunction === "registerNewUser" && (
        <ButtonSubmit>Cadastrar</ButtonSubmit>
      )}
      {buttonFunction === "loginUser" && <ButtonSubmit>Entrar</ButtonSubmit>}
      {buttonFunction === "redirectToRegister" && (
        <ButtonHomeNav registerNewUser onClick={handleClick}>
          Cadastre-se
        </ButtonHomeNav>
      )}
      {buttonFunction === "redirectToLogin" && (
        <ButtonHomeNav onClick={handleClick}>Login</ButtonHomeNav>
      )}
    </>
  );
};
