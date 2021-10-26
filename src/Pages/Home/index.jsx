import {
  HomePage,
  Subtitle,
  TitleHome,
} from "../../Styles/PagesStyle/HomePage";
import { ButtonForm } from "../../Components/ButtonForm";
import { NavBar } from "../../Components/NavBar";
import { Alerts } from "../../Components/Alerts";

const Home = () => {
  const token = localStorage.getItem("token")

  const typeNavBar = token ? "logged" : "unlogged";

  return (
    <>
      <NavBar typeNav={typeNavBar} />
      <HomePage>
        <div className="Logo">
          <img src="images/Logo-verde1.png" alt="Logo" />
        </div>
        <TitleHome>MindHabits</TitleHome>
        <Subtitle>- Equilibre sua Mente e Corpo -</Subtitle>

        <div className="Background">
          <img src="images/Lotus 1.png" alt="Lotus" />
        </div>

        <p>
          Crie e gerencie hábitos saudáveis para uma melhor qualidade de vida
        </p>

        <div className="Buttons">
          <ButtonForm buttonFunction={"redirectToRegister"} />
          <ButtonForm buttonFunction={"redirectToLogin"} />
        </div>
        <Alerts type="error" message="Login realizado com sucesso." />
      </HomePage>
    </>
  );
};

export default Home;
