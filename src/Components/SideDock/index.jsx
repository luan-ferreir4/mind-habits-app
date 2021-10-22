import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../Providers/user";
import { SideDockStyled } from "../../Styles/ComponentsStyle/SideDock";

export const SideDock = () => {
  const [userName, setUserName] = useState("");

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (localToken !== "") {
      return JSON.parse(localToken);
    } else {
      return localToken;
    }
  });

  const history = useHistory();

  const { userId } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${userId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserName(res.data.username))
      .catch((err) => console.log(err.message));
  },[token, userId]);

  return (
    <>
      <SideDockStyled className="Menu">
        <img src="images/avatar.png" alt="Avatar" />
        <div>{userName}</div>
        <button onClick={() => history.push("/dashboard")}>Dashboard</button>
        <button onClick={() => history.push("/userhabits")}>
          Meus Hábitos
        </button>
        <button onClick={() => history.push("/usergroups")}>Meus Grupos</button>
        <button onClick={() => history.push("/groupscommunity")}>Grupos</button>
      </SideDockStyled>
    </>
  );
};
