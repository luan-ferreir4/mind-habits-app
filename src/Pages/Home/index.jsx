import {
  HomeContainer,
  Subtitle,
  TitleHome,
} from "../../Styles/PagesStyle/HomePage";
import { ButtonForm } from "../../Components/ButtonForm";

const Home = () => {
  return (
    <HomeContainer>
      <div className="Image">
        <img src="images/Logo-verde1.png" alt="Logo" />
      </div>
      <TitleHome>MindHabits</TitleHome>
      <Subtitle>- Equilibre sua Mente e Corpo -</Subtitle>

      <p>Crie e gerencie hábitos saudáveis para uma melhor qualidade de vida</p>

      <div className="Buttons">
        <ButtonForm buttonFunction={"algumaCoisaLogin"} />
        <ButtonForm buttonFunction={"algumaCoisaCadastra"} />
      </div>
    </HomeContainer>
  );
};

export default Home;
