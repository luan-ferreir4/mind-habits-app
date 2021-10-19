import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
export const CardAboutUs = (item) => {
  // const history = useHistory();
  // const sendTo = (path) => {
  //   <Redirect to=path />;
  // };
  return (
    <div>
      <img src={item.item.image} alt={item.item.name} />
      <br />
      <h3>{item.item.name}</h3>
      <br />
      <a href={item.item.githubpage}>
        <FaGithubSquare />
      </a>
      <a href={item.item.linkedin}>
        <FaLinkedin />
      </a>
    </div>
  );
};
