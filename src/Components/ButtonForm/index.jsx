import { useHistory } from "react-router";
import {
  ButtonHomeNav,
  ButtonSubmit,
} from "../../Styles/ComponentsStyle/ButtonForm";

export const ButtonForm = ({ buttonFunction }) => {
  const history = useHistory();

  const handleClick = () => {
    if (buttonFunction === "algumaCoisaCadastra-se") {
      return history.push("/register");
    } else if (buttonFunction === "algumaCoisaLogin") {
      return history.push("/login");
    }
  };

  return (
    <>
      {buttonFunction === "registerNewUser" && (
        <ButtonSubmit>Cadastrar</ButtonSubmit>
      )}
      {buttonFunction === "loginUser" && <ButtonSubmit>Entrar</ButtonSubmit>}
      {buttonFunction === "algumaCoisaCadastra" && (
        <ButtonHomeNav onClick={handleClick} />
      )}
      {buttonFunction === "algumaCoisaLogin" && (
        <ButtonHomeNav onClick={handleClick} />
      )}
    </>
  );
};
