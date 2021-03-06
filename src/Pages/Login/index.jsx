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
import { useHistory } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../Providers/login";
import { InputForm } from "../../Components/InputForm";
import { NavBar } from "../../Components/NavBar";
import { ButtonForm } from "../../Components/ButtonForm";
import { Alerts } from "../../Components/Alerts";

const LoginPage = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório").min(6, "Mínimo de 6 caracteres"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { login } = useContext(LoginContext);

  const handleLogin = (data) => {
    login(data, history); 
    <Alerts type="success" message="Login realizado com sucesso." />
    history.push("/dashboard")
  };

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <LoginContainer>
        <FormAnimationContainer>
          <form className="form" onSubmit={handleSubmit(handleLogin)}>
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
