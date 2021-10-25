import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { LiContainer } from "../../Styles/ComponentsStyle/CardAboutUs";

export const CardAboutUs = (item) => {
  return (
    <LiContainer>
      <img src={item.item.image} alt={item.item.name} />
      <br />
      <h3>{item.item.name}</h3>
      <br />
      <div>
        <a href={item.item.githubpage}>
          <FaGithubSquare size={30} />
        </a>
        <a href={item.item.linkedin}>
          <FaLinkedin size={30} />
        </a>
      </div>
    </LiContainer>
  );
};
