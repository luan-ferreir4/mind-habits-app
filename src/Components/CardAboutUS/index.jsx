import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useHistory } from "react-router";

export const CardAboutUs = (item) => {
  const history = useHistory();
  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <div>
      {item.img}
      <br />
      <h3>{item.name}</h3>
      <br />
      <BsLinkedin onClick={() => sendTo(item.linkedin)} />
      <BsGithub onclick={() => sendTo(item.github)} />
    </div>
  );
};
