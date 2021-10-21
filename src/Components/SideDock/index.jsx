import { useHistory } from "react-router-dom";
import { SideDockStyled } from "../../Styles/ComponentsStyle/SideDock";

export const SideDock = () => {
  const history = useHistory();
  return (
    <>
      <SideDockStyled className="Menu">
        <img src="images/avatar.png" alt="Avatar" />
        <div>Username</div>
        <button onClick={() => history.push("/dashboard")}>Dashboard</button>
        <button onClick={() => history.push("/userhabits")}>Meus Hábitos</button>
        <button onClick={() => history.push("/usergroups")}>Meus Grupos</button>
        <button onClick={() => history.push("/groupscommunity")}>Grupos</button>
      </SideDockStyled>
    </>
  );
};