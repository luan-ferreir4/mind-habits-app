import { useContext, useState } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { NavBar } from "../../Components/NavBar";
import {
  UserGroupsContainer,
  UserGroupMenu,
  MainContent,
  CardMyGroups,
} from "../../Styles/UserGroupsPage";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);
  const history = useHistory();

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <UserGroupsContainer className="Container">
        <UserGroupMenu className="Menu">
          <img src="images/avatar.png" alt="Avatar" />
          <div>Username</div>
          <button onClick={() => history.push("/")}>Dashboard</button>
          <button onClick={() => history.push("/habits")}>Meus Hábitos</button>
          <button onClick={() => history.push("/usergroups")}>
            Meus Grupos
          </button>
          <button onClick={() => history.push("/groups")}>Grupos</button>
        </UserGroupMenu>
        <MainContent>
        <h3>Meus Grupos</h3>
          {userGroups.map((group) => (
            <div className="CardMyGroup" >
              <Typography variant="h5" component="div">
                {group.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                {`Descrição: ${group.description}`}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                {`Categoria: ${group.category}`}
              </Typography>

              <Button
                size="medium"
                color="primary"
                onClick={() => history.push("/groupdetails")}
              >
                Ver mais
              </Button>
            </div>
          ))}
        </MainContent>
      </UserGroupsContainer>
    </>
  );
};
export default UserGroups;
