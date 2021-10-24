import axios from "axios";
import { useHistory, useLocation} from "react-router-dom";

import { SideDockStyled } from "../../Styles/ComponentsStyle/SideDock";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/user";

export const SideDock = () => {
  const location = useLocation()
  console.log(location.pathname)
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const { userId } = useContext(UserContext);

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://kenzie-habits.herokuapp.com/users/${userId}/`)
        .then((res) => setUserName(res.data.username))
        .catch((err) => console.log(err.message));
    }
  }, [userId]);

  return (
    <>
      <SideDockStyled>
        <section className="content">
        <img src="images/avatar.png" alt="Avatar" />
        {location.pathname !== "/dashboard" && <h4>{userName}</h4> }
       
       <div className="content-buttons">
        {location.pathname !== "/dashboard" &&  <button onClick={() => history.push("/dashboard")}>Dashboard</button>}
        {location.pathname !== "/userhabits" && <button onClick={() => history.push("/userhabits")}>
          Meus Hábitos
        </button>}
        {location.pathname !== "/usergroups" && <button onClick={() => history.push("/usergroups")}>Meus Grupos</button>}
        {location.pathname !== "/groupscommunity" && <button onClick={() => history.push("/groupscommunity")}>Grupos</button> }
       </div>
        </section>
      </SideDockStyled>
    </>
  );
};
