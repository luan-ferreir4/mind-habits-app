import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import "../../Styles/ComponentsStyle/CardAboutUs/style.css";
export const CardAboutUs = (item) => {
  // const history = useHistory();
  // const sendTo = (path) => {
  //   <Redirect to=path />;
  // };
  return (
    <div className="cardAbout">
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
    </div>
  );
};
