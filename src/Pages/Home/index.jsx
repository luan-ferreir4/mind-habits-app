import {
  HomePage,
  PictureBackground,
  Subtitle,
  TitleHome,
} from "../../Styles/PagesStyle/HomePage";
import { ButtonForm } from "../../Components/ButtonForm";
import { useHistory } from "react-router";
import { NavBar } from "../../Components/NavBar";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <NavBar typeNav="unlogged" />
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
        {/* <PictureBackground /> */}
      </HomePage>
    </>
  );
};

export default Home;
