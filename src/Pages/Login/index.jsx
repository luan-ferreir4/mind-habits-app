import { Link } from "react-router-dom";
import {
  FormAnimationContainer,
  PictureBackground,
  LoginContainer,
} from "../../Styles/PagesStyle/LoginPage";
import { FiUser, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../Providers/login";
import { InputForm } from "../../Components/InputForm";
// import { Toaster } from "react-hot-toast";
import { NavBar } from "../../Components/NavBar";
import { ButtonForm } from "../../Components/ButtonForm";

const LoginPage = () => {
  // const [error, setError] = useState("");

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .max(50, "Campo obrigatório")
      .required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { auth, handleLogin } = useContext(LoginContext);

  const sendToLoginHandling = (data) => {
    // console.log(data);
    handleLogin(data, history);
  };

  //usuário vai direto pra página dele quando já está logado:
  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <LoginContainer>
        <FormAnimationContainer>
          <form className="form" onSubmit={handleSubmit(sendToLoginHandling)}>
            <h2>Login</h2>
            <InputForm
              register={register}
              name="username"
              icon={FiUser}
              placeholder="Username"
              label="Usuário"
              error={errors.username?.message}
            />
            <InputForm
              register={register}
              name="password"
              icon={FiLock}
              placeholder="Senha"
              label="Senha"
              error={errors.password?.message}
              type="password"
            />
            <ButtonForm buttonFunction={"loginUser"} type="submit" />
          </form>

          <p>
            Não tem conta?{" "}
            <Link className="link" to="/register">
              Faça seu cadastro
            </Link>
          </p>
        </FormAnimationContainer>
        <PictureBackground />
      </LoginContainer>
    </>
  );
};

export default LoginPage;
