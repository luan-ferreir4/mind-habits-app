import { useContext } from "react";
import { UserGroupsContext } from "../../Providers/userGroups";

import { Button, Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { NavBar } from "../../Components/NavBar";
import {
  UserGroupsContainer,
  MainContent,
} from "../../Styles/PagesStyle/UserGroupsPage";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);
  const history = useHistory();

  return (
    <>
      <NavBar typeNav={"unlogged"} />
      <UserGroupsContainer className="Container">
        <MainContent>
          <h3>Meus Grupos</h3>
          {userGroups.map((group) => (
            <div className="CardMyGroup">
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
                onClick={() => history.push(`/groupdetails/${group.id}`)}
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
