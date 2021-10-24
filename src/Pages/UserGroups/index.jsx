import { useContext } from "react";
import { Redirect } from "react-router";

import { LoginContext } from "../../Providers/login";
import {
  UserGroupsContent,
  UserGroupsMain,
  UserGroupsPage,
} from "../../Styles/PagesStyle/UserGroupsPage";
import { NavBar } from "../../Components/NavBar";
import { SideDock } from "../../Components/SideDock";
import CardRender from "../../Components/CardRender";
import { UserGroupsContext } from "../../Providers/userGroups";
import { NavContainer } from "../../Styles/PagesStyle/GlobalPageStyle";

const UserGroups = () => {
  const { userGroups } = useContext(UserGroupsContext);

  const { auth } = useContext(LoginContext);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <NavBar typeNav={"logged"} />
      <UserGroupsPage>
        <UserGroupsMain>
          
          <NavContainer>
            <SideDock />
          </NavContainer>

          <UserGroupsContent>
            <h3>Meus Grupos</h3>
            {userGroups.map((group) => (
              <CardRender listType={"userGroup"} item={group} key={group.id} />
            ))}
          </UserGroupsContent>
        </UserGroupsMain>
      </UserGroupsPage>
    </>
  );
};

export default UserGroups;
