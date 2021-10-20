import { useHistory } from "react-router-dom";
import { SideDockStyled } from "../../Styles/ComponentsStyle/SideDock";

export const SideDock = () => {
  const history = useHistory();
  return (
    <>
      <SideDockStyled className="Menu">
        <img src="images/avatar.png" alt="Avatar" />
        <div>Username</div>
        <button onClick={() => history.push("/")}>Dashboard</button>
        <button onClick={() => history.push("/habits")}>Meus Hábitos</button>
        <button onClick={() => history.push("/usergroups")}>Meus Grupos</button>
        <button onClick={() => history.push("/groups")}>Grupos</button>
      </SideDockStyled>
    </>
  );
};