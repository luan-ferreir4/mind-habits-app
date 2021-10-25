import { SideDockStyled } from "../../Styles/ComponentsStyle/SideDock";

import { useHistory, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { LoginContext } from "../../Providers/login";

export const SideDock = () => {
  const location = useLocation();

  const history = useHistory();

  const { userName } = useContext(LoginContext);

  return (
    <>
      <SideDockStyled>
        <section className="content">
          <img src="images/avatar.png" alt="Avatar" />
          <label>
            {location.pathname !== "/dashboard" && <h4>{userName}</h4>}
          </label>

          <div className="content-buttons">
            {location.pathname !== "/dashboard" && (
              <button onClick={() => history.push("/dashboard")}>
                Dashboard
              </button>
            )}
            {location.pathname !== "/userhabits" && (
              <button onClick={() => history.push("/userhabits")}>
                Meus Hábitos
              </button>
            )}
            {location.pathname !== "/usergroups" && (
              <button onClick={() => history.push("/usergroups")}>
                Meus Grupos
              </button>
            )}
            {location.pathname !== "/groupscommunity" && (
              <button onClick={() => history.push("/groupscommunity")}>
                Grupos
              </button>
            )}
          </div>
        </section>
      </SideDockStyled>
    </>
  );
};
