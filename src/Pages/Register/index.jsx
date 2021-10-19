import { Link } from "react-router-dom";
import {
  FormAnimationContainer,
  PictureBackground,
  RegisterContainer,
} from "../../Styles/PagesStyle/RegisterPage";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { useContext } from "react";
import { RegisterContext } from "../../Providers/register";
import { InputForm } from "../../Components/InputForm";
import { NavBar } from "../../Components/NavBar";
import { ButtonForm } from "../../Components/ButtonForm";

const RegisterPage = () => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .max(50, "Campo obrigatório. Máximo de 50 dígitos.")
      .required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .min(6, "Campo obrigatório. Mínimo de 6 dígitos")
      .required("Campo obrigatório. Senha deve ter no mínimo 6 caracteres."),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { handleRegister } = useContext(RegisterContext);

  const sendToRegisterHandling = (data) => {
    // console.log(data);
    handleRegister(data, history);
  };

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <RegisterContainer>
        <PictureBackground />
        <FormAnimationContainer>
          <form
            className="form"
            onSubmit={handleSubmit(sendToRegisterHandling)}
          >
            <h2>Cadastre-se</h2>
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
              name="email"
              icon={FiMail}
              placeholder="Email"
              label="Email"
              error={errors.email?.message}
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
            <InputForm
              register={register}
              name="password_confirm"
              icon={FiLock}
              placeholder="Confirme a senha"
              label="Confirmação da senha"
              error={errors.password_confirm?.message}
              type="password"
            />
            <ButtonForm buttonFunction={"registerNewUser"} type="submit" />
          </form>

          <p>
            Já tem uma conta? Faça{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </FormAnimationContainer>
      </RegisterContainer>
    </>
  );
};

export default RegisterPage;
